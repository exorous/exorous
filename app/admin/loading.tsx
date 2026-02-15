import SectionWrapper from "@/components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <SectionWrapper id="admin-loading" className="bg-black min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Header Skeleton */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-3">
                        <Skeleton className="h-10 w-64 bg-zinc-800" />
                        <Skeleton className="h-5 w-96 bg-zinc-900" />
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end gap-2">
                            <Skeleton className="h-3 w-24 bg-zinc-900" />
                            <Skeleton className="h-5 w-32 bg-zinc-800" />
                        </div>
                        <Skeleton className="h-10 w-10 rounded-full bg-zinc-800" />
                    </div>
                </div>

                {/* Stats Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-32 rounded-2xl bg-zinc-900/40 border border-white/5" />
                    ))}
                </div>

                {/* Insights Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Skeleton className="h-64 rounded-2xl bg-zinc-900/40 border border-white/5" />
                    <Skeleton className="h-64 rounded-2xl bg-zinc-900/40 border border-white/5" />
                </div>

                {/* Table Skeleton */}
                <div className="bg-zinc-900/60 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center">
                        <Skeleton className="h-7 w-32 bg-zinc-800" />
                        <div className="flex gap-2">
                            <Skeleton className="h-9 w-24 bg-zinc-800" />
                            <Skeleton className="h-9 w-32 bg-zinc-800" />
                        </div>
                    </div>
                    <div className="p-0">
                        <div className="flex border-b border-white/5 p-6 bg-zinc-900/20">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <Skeleton key={i} className="h-4 w-full mx-2 bg-zinc-800" />
                            ))}
                        </div>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="flex p-6 border-b border-white/5">
                                <Skeleton className="h-12 w-full bg-zinc-900/30" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
