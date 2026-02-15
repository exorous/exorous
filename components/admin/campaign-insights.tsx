import {
    Users,
    Zap,
} from "lucide-react";

interface CampaignInsightsProps {
    leads: any[];
}

export function CampaignInsights({ leads }: CampaignInsightsProps) {
    const total = leads.length;
    const hot = leads.filter((l) => l.category === "HOT").length;
    const booked = leads.filter((l) => l.status === "BOOKED").length;

    // Calculate traffic sources
    const sources = leads.reduce((acc: any, lead: any) => {
        const source = lead.source || "Direct";
        acc[source] = (acc[source] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traffic Sources */}
            <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" /> Traffic Sources
                </h3>
                <div className="space-y-3">
                    {Object.entries(sources).map(([source, count]: any) => (
                        <div key={source} className="flex items-center justify-between">
                            <span className="text-sm text-zinc-400">{source}</span>
                            <div className="flex items-center gap-2">
                                <div className="h-2 bg-zinc-800 rounded-full w-32 overflow-hidden">
                                    <div
                                        className="h-full bg-primary"
                                        style={{ width: `${(count / total) * 100}%` }}
                                    />
                                </div>
                                <span className="text-xs font-bold text-white min-w-[20px]">{count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pipeline Health */}
            <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-red-500" /> Pipeline Health
                </h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <span className="text-zinc-500 text-sm">Response Rate (Start to Hot)</span>
                        <span className="text-white font-bold">{total > 0 ? Math.round((hot / total) * 100) : 0}%</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <span className="text-zinc-500 text-sm">Booking Rate</span>
                        <span className="text-white font-bold">{total > 0 ? Math.round((booked / total) * 100) : 0}%</span>
                    </div>

                </div>
            </div>
        </div>
    );
}
