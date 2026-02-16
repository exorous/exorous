"use client";

import { useEffect } from "react";
import { calendlyUrl } from "@/lib/config";
import { Loader2 } from "lucide-react";

export default function BookPageClient() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = calendlyUrl;
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <div className="text-center space-y-6 max-w-md w-full animate-in fade-in duration-700">

                {/* Animated Icon */}
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full animate-pulse" />
                    <Loader2 className="w-12 h-12 text-cyan-500 animate-spin relative z-10" />
                </div>

                {/* Text */}
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold tracking-tight">Redirecting to Calendly...</h1>
                    <p className="text-zinc-500 text-sm">We are securing your priority slot. Please wait a moment.</p>
                </div>

                {/* Progress Bar (Visual Only) */}
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 w-1/3 animate-[loading_1.5s_ease-in-out_infinite]" />
                </div>

            </div>

            <style jsx global>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
}
