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
                                White-Glove. Risk-Qualified.
                            </div>

                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter">
                                The 90-Day <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Managed Pilot</span>
                            </h3>

                            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                                We run the entire pipeline for you for 90 days. Weekly scans, AI analysis, 8 branded variations. If we do not find three competitor insights worth acting on in week one, you do not pay for month one.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-2xl">
                                {[
                                    { label: "$2,000 Per Month", desc: "Full managed service. Scan, analysis, variations. Everything delivered weekly." },
                                    { label: "Day 90 Transition", desc: "You get login access to the self-serve Exorous platform. Run your own scans and generate variations independently." },
                                ].map((item) => (
                                    <div key={item.label} className="flex flex-col gap-2 p-4 rounded-2xl bg-zinc-900 border border-white/10 text-left">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                            <span className="text-sm font-bold text-white">{item.label}</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
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
