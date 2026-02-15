"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    badge: string;
    title: string;
    titleHighlighted?: string;
    description: string;
    align?: "left" | "center";
}

export default function SectionHeader({
    badge,
    title,
    titleHighlighted,
    description,
    align = "center",
}: SectionHeaderProps) {
    return (
        <div className={cn(
            "max-w-3xl mb-8",
            align === "left" ? "text-left mx-0" : "text-center mx-auto"
        )}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[9px] font-bold mb-3"
            >
                {badge}
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight"
            >
                {title} {titleHighlighted && <span className="text-glow text-primary">{titleHighlighted}</span>}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={cn(
                    "text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-2xl",
                    align === "left" ? "mx-0" : "mx-auto"
                )}
            >
                {description}
            </motion.p>
        </div>
    );
}
