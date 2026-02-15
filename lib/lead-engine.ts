import { GoogleGenerativeAI } from "@google/generative-ai";
import { Resend } from "resend";
import { prisma } from "./db";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const resend = new Resend(process.env.RESEND_API_KEY || "");

export type LeadInput = {
    name: string;
    email: string;
    problem: string;
    budget?: string;
};

export async function processLead(input: LeadInput) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // 1. Qualify & Score the Lead
    const scoringPrompt = `
    You are an expert Sales Intelligence AI for Exorous (an AI Automation Agency).
    Analyze the following lead and provide:
    1. Score (1-100) based on automation potential and business value.
    2. Category (HOT, WARM, or COLD). 
       - HOT: High budget, clear manual bottleneck, professional inquiry.
       - WARM: Moderate interest, vague problem, or mid-level budget.
       - COLD: Student, unrealistic request, or "just testing" tone.
    3. AI Reasoning: Brief internal analysis of why this score was given.

    Lead Info:
    Name: ${input.name}
    Problem: ${input.problem}
    Budget Range: ${input.budget || "Not specified"}

    Return ONLY a valid JSON object with keys: "score", "category", "reasoning".
  `;

    const scoringResult = await model.generateContent(scoringPrompt);
    const scoringJson = JSON.parse(scoringResult.response.text().replace(/```json|```/g, ""));

    // 2. Draft Personalized Auto-Reply
    const replyPrompt = `
    You are Alex Morgan, Lead Automation Architect at Exorous.
    Draft a short, professional, and slightly "smart" auto-reply to this lead.
    The goal is to acknowledge their specific problem (${input.problem}) and invite them to the next step.
    
    Tone: Premium, efficient, confident but helpful.
    
    Lead Category: ${scoringJson.category}
    
    If HOT: Emphasize urgency and the priority slot we've reserved.
    If WARM/COLD: Focus on providing a general roadmap and asking for more details.

    Return ONLY the text content of the email.
  `;

    const replyResult = await model.generateContent(replyPrompt);
    const replyText = replyResult.response.text().trim();

    // 3. Save to Database
    const lead = await prisma.lead.create({
        data: {
            name: input.name,
            email: input.email,
            problem: input.problem,
            budget: input.budget,
            score: scoringJson.score,
            category: scoringJson.category,
            aiReasoning: scoringJson.reasoning,
            suggestedReply: replyText,
        },
    });

    // 4. Send Email (Only if Resend Key is Present and lead is not COLD)
    // We'll log the attempt regardless
    let emailStatus = "PENDING";
    if (process.env.RESEND_API_KEY && scoringJson.category !== "COLD") {
        try {
            await resend.emails.send({
                from: "Alex from Exorous <onboarding@resend.dev>", // Replace with your domain when verified
                to: input.email,
                subject: `Re: Your Automation Audit for ${input.name}`,
                text: replyText,
            });
            emailStatus = "SENT";
        } catch (error) {
            emailStatus = "FAILED";
            console.error("Email sending failed:", error);
        }
    }

    // Log the events
    await prisma.aiLog.create({
        data: {
            leadId: lead.id,
            action: "LEAD_INITIAL_PROCESSING",
            input: input as any,
            output: { scoring: scoringJson, reply: replyText } as any,
        },
    });

    if (emailStatus !== "PENDING") {
        await prisma.emailLog.create({
            data: {
                leadId: lead.id,
                subject: `Re: Your Automation Audit for ${input.name}`,
                content: replyText,
                status: emailStatus,
            },
        });
    }

    // 5. Schedule Follow-ups (if NO reply was sent or it's a cold lead, we might skip, but let's schedule for everyone except junk)
    if (scoringJson.category !== "COLD") {
        const { scheduleFollowUps } = await import("./followup-engine");
        await scheduleFollowUps(lead.id);
    }

    return lead;
}
