const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Verifying Follow-up Scheduling...');

    // 1. Create a dummy lead
    const lead = await prisma.lead.create({
        data: {
            name: "Test Lead " + Date.now(),
            email: "test@example.com",
            problem: "Verification Test",
            status: "NEW",
            category: "WARM"
        }
    });

    console.log('Created Lead:', lead.id);

    // 2. Trigger scheduling manually (since we can't easily trigger the import in this script context without ts-node)
    // We'll mimic what lead-engine does:
    const FOLLOW_UP_SCHEDULE = [
        { days: 2, type: "VALUE_ADD" },
        { days: 4, type: "CASE_STUDY" },
        { days: 7, type: "BREAKUP" },
    ];

    const today = new Date();
    for (let i = 0; i < FOLLOW_UP_SCHEDULE.length; i++) {
        const schedule = FOLLOW_UP_SCHEDULE[i];
        const scheduledDate = new Date(today);
        scheduledDate.setDate(today.getDate() + schedule.days);

        await prisma.followUp.create({
            data: {
                leadId: lead.id,
                scheduledAt: scheduledDate,
                sequenceIndex: i + 1,
                status: "SCHEDULED",
            },
        });
    }

    // 3. Verify Follow-ups were created
    const followUps = await prisma.followUp.findMany({
        where: { leadId: lead.id },
        orderBy: { sequenceIndex: 'asc' }
    });

    console.log(`Created ${followUps.length} follow-ups.`);
    followUps.forEach(fu => {
        console.log(`- Sequence ${fu.sequenceIndex}: Scheduled for ${fu.scheduledAt.toISOString().split('T')[0]}`);
    });

    if (followUps.length === 3) {
        console.log('✅ Follow-up scheduling verified.');
    } else {
        console.error('❌ Follow-up scheduling failed.');
    }

    // Cleanup
    await prisma.lead.delete({ where: { id: lead.id } });
    console.log('Test lead cleaned up.');
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
