"use client";

import { motion } from "framer-motion";
import { Search, Brain, Palette } from "lucide-react";
import SectionHeader from "./section-header";
import SectionWrapper from "./section-wrapper";

const steps = [
    {
        number: "01",
        title: "Competitor Scan",
        description: "We scan your top 5 competitors weekly, pulling their latest ads from a library of 100M+ creatives. You see what's running and when it launched.",
        icon: <Search className="h-5 w-5 text-primary" />,
    },
    {
        number: "02",
        title: "AI Analysis",
        description: "Every winning ad gets broken down: hook type, emotional tone, pacing structure, CTA placement. Not opinion. Structured AI analysis trained on what actually converts.",
        icon: <Brain className="h-5 w-5 text-primary" />,
    },
    {
        number: "03",
        title: "Branded Variations",
        description: "From the analysis, we generate 8 branded variations per week using your brand kit. Colors, fonts, tone — all locked in from day one.",
        icon: <Palette className="h-5 w-5 text-primary" />,
    },
];

export default function HowItWorksSection() {
    return (
        <SectionWrapper id="process" compact>
            <SectionHeader
                badge="The Pipeline"
                title="Three Steps."
                titleHighlighted="One Session."
                description="No separate tools. No manual briefs. Scan, analyze, generate — in one automated pipeline."
            />

            <div className="max-w-5xl mx-auto relative">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-4">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12, duration: 0.5 }}
                            className="group relative h-full"
                        >
                            <div className="relative flex flex-col items-start text-left p-6 sm:p-8 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-primary/20 hover:bg-zinc-900/40 transition-all duration-500 h-full group-hover:-translate-y-1">
                                {/* Step number */}
                                <div className="text-[10px] font-mono text-zinc-600 mb-6 tracking-widest group-hover:text-primary transition-colors">
                                    STEP {step.number}
                                </div>

                                {/* Icon circle */}
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(23,194,227,0.15)] transition-all duration-300">
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h4 className="text-base font-bold text-white mb-3 tracking-tight group-hover:text-primary transition-colors">
                                    {step.title}
                                </h4>

                                {/* Description */}
                                <p className="text-zinc-500 text-sm font-light leading-relaxed group-hover:text-zinc-400 transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
