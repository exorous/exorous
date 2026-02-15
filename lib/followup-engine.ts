import { prisma } from "@/lib/db";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Resend } from "resend";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const resend = new Resend(process.env.RESEND_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const FOLLOW_UP_SCHEDULE = [
    { days: 2, type: "VALUE_ADD" },
    { days: 4, type: "CASE_STUDY" },
    { days: 7, type: "BREAKUP" },
];

export async function scheduleFollowUps(leadId: string) {
    const today = new Date();

    for (let i = 0; i < FOLLOW_UP_SCHEDULE.length; i++) {
        const schedule = FOLLOW_UP_SCHEDULE[i];
        const scheduledDate = new Date(today);
        scheduledDate.setDate(today.getDate() + schedule.days);

        await prisma.followUp.create({
            data: {
                leadId,
                scheduledAt: scheduledDate,
                sequenceIndex: i + 1,
                status: "SCHEDULED",
            },
        });
    }
}

export async function processPendingFollowUps() {
    const now = new Date();

    // Find due follow-ups
    const pendingFollowUps = await prisma.followUp.findMany({
        where: {
            status: "SCHEDULED",
            scheduledAt: { lte: now },
            lead: {
                stopFollowUps: false,
                status: { notIn: ["BOOKED", "DORMANT"] } // Don't email if booked or dormant
            }
        },
        include: { lead: true }
    });

    console.log(`Found ${pendingFollowUps.length} pending follow-ups.`);

    for (const followUp of pendingFollowUps) {
        try {
            // 1. Generate Email Content using Gemini
            const prompt = `
            You are Alex from Exorous (AI Automation Agency).
            Draft a follow-up email for a lead who hasn't replied yet.
            
            Lead Name: ${followUp.lead.name}
            Problem: ${followUp.lead.problem}
            Sequence: Email #${followUp.sequenceIndex} (Day ${FOLLOW_UP_SCHEDULE[followUp.sequenceIndex - 1]?.days})
            
            Goal:
            - Email #1 (Day 2): meaningful value add or a quick tip related to their problem.
            - Email #2 (Day 4): Share a brief success story or case study.
            - Email #3 (Day 7): The "breakup" email. Polite, professional close-out.
            
            Return JSON: { "subject": "...", "content": "..." }
            `;

            const result = await model.generateContent(prompt);
            const text = result.response.text().replace(/```json|```/g, "").trim();
            const emailData = JSON.parse(text);

            // 2. Send via Resend
            if (process.env.RESEND_API_KEY) {
                await resend.emails.send({
                    from: "Alex from Exorous <onboarding@resend.dev>",
                    to: followUp.lead.email,
                    subject: emailData.subject,
                    text: emailData.content,
                });
            }

            // 3. Update DB
            await prisma.followUp.update({
                where: { id: followUp.id },
                data: {
                    status: "SENT",
                    sentAt: new Date(),
                    subject: emailData.subject,
                    content: emailData.content
                }
            });

            // Log it
            await prisma.emailLog.create({
                data: {
                    leadId: followUp.leadId,
                    subject: emailData.subject,
                    content: emailData.content,
                    status: "SENT"
                }
            });

        } catch (error) {
            console.error(`Failed to process follow-up ${followUp.id}:`, error);
            await prisma.followUp.update({
                where: { id: followUp.id },
                data: { status: "FAILED" }
            });
        }
    }

    return { processed: pendingFollowUps.length };
}
