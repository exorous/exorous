"use client";

import { motion } from "framer-motion";
import { Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "./section-wrapper";
import Link from "next/link";

export default function GuaranteeSection() {
    return (
        <SectionWrapper id="guarantee" compact showDecor={false}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Animated Gradient Border/Glow */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-cyan-400/30 to-primary/30 rounded-3xl opacity-50 blur-xl transition-all duration-500 group-hover:opacity-75 group-hover:blur-2xl" />

                    <div className="relative overflow-hidden rounded-3xl bg-black border border-white/10 p-8 md:p-14 text-center">
                        {/* Background Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
                                <Shield className="w-3 h-3" />
                                Risk-Free Implementation
                            </div>

                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
                                The 2-Week <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Performance Pilot</span>
                            </h3>

                            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                                We don't ask for long-term retainers until we prove our value.
                                We build your first automation system in 14 days. <br className="hidden md:block" />
                                <span className="text-white font-medium">If it doesn't save you time, you don't pay a cent.</span>
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-10">
                                {["Zero Upfront Risk", "14-Day Turnaround", "Pay on Results"].map((item) => (
                                    <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-sm text-zinc-300">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        {item}
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
