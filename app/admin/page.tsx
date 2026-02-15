import { prisma } from "@/lib/db";
import { UserButton } from "@clerk/nextjs";
import SectionWrapper from "@/components/section-wrapper";
import { AdminStats } from "@/components/admin/admin-stats";
import { CampaignInsights } from "@/components/admin/campaign-insights";
import { LeadTable } from "@/components/admin/lead-table";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
    const leads = await prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            aiLogs: {
                orderBy: { createdAt: "desc" },
                take: 1,
            },
            followUps: {
                orderBy: { sequenceIndex: "asc" }
            }
        }
    }) || [];

    return (
        <SectionWrapper id="admin-leads" className="bg-black min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
                            Agency Command <span className="text-primary text-glow text-xl">v2.1</span>
                        </h1>
                        <p className="text-muted-foreground mt-2">Real-time AI Lead Intelligence & Pipeline monitoring.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[10px] text-muted-foreground">System Status</span>
                            <span className="flex items-center gap-2 text-primary font-bold text-sm">
                                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                Gemini Engine Active
                            </span>
                        </div>
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </div>

                {/* Stats Grid */}
                <AdminStats leads={leads} />

                {/* Campaign Insights */}
                <CampaignInsights leads={leads} />

                {/* Main Table */}
                <LeadTable leads={leads} />
            </div>
        </SectionWrapper>
    );
}
