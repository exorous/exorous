import { prisma } from "@/lib/db";
import { format } from "date-fns";

export async function GET() {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: { createdAt: "desc" },
            include: { followUps: true }
        });

        // 1. Define CSV Headers
        const headers = [
            "ID", "Name", "Email", "Problem", "Budget", "Status", "Category",
            "Score", "Created At", "Next Follow Up"
        ];

        // 2. Generate Rows
        const rows = leads.map((lead) => {
            const nextFollowUp = lead.followUps.find(f => f.status === "SCHEDULED");
            return [
                lead.id,
                `"${lead.name.replace(/"/g, '""')}"`, // Escape quotes
                lead.email,
                `"${lead.problem.replace(/"/g, '""')}"`,
                lead.budget || "",
                lead.status,
                lead.category || "",
                lead.score || 0,
                format(lead.createdAt, "yyyy-MM-dd HH:mm"),
                nextFollowUp ? format(nextFollowUp.scheduledAt, "yyyy-MM-dd") : "None"
            ].join(",");
        });

        // 3. Combine
        const csvContent = [headers.join(","), ...rows].join("\n");

        // 4. Return as downloadable file
        return new Response(csvContent, {
            headers: {
                "Content-Type": "text/csv",
                "Content-Disposition": `attachment; filename="leads-export-${format(new Date(), "yyyy-MM-dd")}.csv"`
            }
        });

    } catch (error) {
        console.error("Export Error:", error);
        return new Response("Failed to export leads", { status: 500 });
    }
}
