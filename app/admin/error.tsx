'use client';

import { useEffect } from 'react';
import SectionWrapper from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <SectionWrapper id="admin-error" className="bg-black min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-zinc-900/40 border border-red-500/20 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-red-500/10 flex items-center justify-center border border-red-500/20 shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)]">
                        <AlertTriangle className="h-8 w-8 text-red-500" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-black text-white tracking-tight">System Malfunction</h2>
                        <p className="text-zinc-400 text-sm">
                            Something went wrong while loading the Agency Command center.
                        </p>
                    </div>

                    <div className="w-full bg-black/40 rounded-lg p-4 font-mono text-xs text-red-400 text-left overflow-auto max-h-32 border border-red-500/10">
                        {error.message || "Unknown error occurred"}
                        {error.digest && <span className="block mt-2 text-zinc-600">Digest: {error.digest}</span>}
                    </div>

                    <Button
                        onClick={() => reset()}
                        className="bg-white text-black hover:bg-zinc-200 font-bold w-full"
                    >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Retry Connection
                    </Button>
                </div>
            </div>
        </SectionWrapper>
    );
}
