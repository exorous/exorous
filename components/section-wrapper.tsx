"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
    id: string;
    className?: string;
    children: React.ReactNode;
    showDecor?: boolean;
    compact?: boolean;
}

export default function SectionWrapper({
    id,
    className,
    children,
    showDecor = true,
    compact = false,
}: SectionWrapperProps) {
    return (
        <section id={id} className={cn(compact ? "py-10" : "py-20", "relative overflow-clip bg-black", className)}>
            {showDecor && (
                <>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                </>
            )}
            <div className="container mx-auto px-4 relative z-10">
                {children}
            </div>
        </section>
    );
}
