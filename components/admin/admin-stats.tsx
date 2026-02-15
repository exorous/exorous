import {
    Users,
    TrendingUp,
    Zap,
    CheckCircle,
} from "lucide-react";

interface AdminStatsProps {
    leads: any[];
}

export function AdminStats({ leads }: AdminStatsProps) {
    const stats = {
        total: leads.length,
        hot: leads.filter((l) => l.category === "HOT").length,
        today: leads.filter((l) => {
            const today = new Date();
            const leadDate = new Date(l.createdAt);
            return leadDate.toDateString() === today.toDateString();
        }).length,
    };

    const booked = leads.filter((l) => l.status === "BOOKED").length;
    const conversionRate = stats.total > 0 ? Math.round((booked / stats.total) * 100) : 0;

    const statItems = [
        { label: "Total Leads", value: stats.total, icon: <Users className="h-4 w-4" />, color: "text-white" },
        { label: "HOT Opportunities", value: stats.hot, icon: <Zap className="h-4 w-4" />, color: "text-red-500" },
        { label: "Incoming Today", value: stats.today, icon: <TrendingUp className="h-4 w-4" />, color: "text-primary" },
        { label: "Conversion Rate", value: `${conversionRate}%`, icon: <CheckCircle className="h-4 w-4" />, color: "text-green-500" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {statItems.map((stat, i) => (
                <div key={i} className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-muted-foreground">
                        <span className="text-xs uppercase tracking-widest font-bold">{stat.label}</span>
                        {stat.icon}
                    </div>
                    <span className={`text-2xl font-black ${stat.color}`}>{stat.value}</span>
                </div>
            ))}
        </div>
    );
}
