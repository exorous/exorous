"use client";

import { motion } from "framer-motion";
import { Check, Lock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionHeader from "./section-header";
import SectionWrapper from "./section-wrapper";
import { calendlyUrl } from "@/lib/config";

const packages = [
    {
        name: "Managed Pilot",
        tagline: "Full-Service Intelligence",
        setupPrice: 750,
        monthlyPrice: 2000,
        locked: false,
        description: "We run the entire pipeline for you. Weekly scans, AI analysis, 8 branded variations — delivered every Monday.",
        features: [
            "Weekly competitor scan (5 brands)",
            "AI analysis report (hook, tone, pacing, CTA)",
            "8 branded variations per week",
            "Monday morning delivery",
            "Brand kit setup (week 1)",
            "Day 90 SaaS platform transition",
        ],
        cta: "Apply for Managed Pilot",
        popular: true,
    },
    {
        name: "Starter SaaS",
        tagline: "Self-Serve Platform",
        monthlyPrice: 129,
        locked: true,
        description: "Run your own scans and generate variations at a fraction of the managed cost.",
        features: [
            "Up to 5 competitors tracked",
            "AI analysis on demand",
            "5,000 credits per month",
            "Daily scan schedule",
        ],
        cta: "Coming at Day 90",
        popular: false,
    },
    {
        name: "Growth SaaS",
        tagline: "Full Self-Serve",
        monthlyPrice: 349,
        locked: true,
        description: "Unlimited competitors, daily scans, and 20,000 credits for high-volume creative generation.",
        features: [
            "Unlimited competitors",
            "20,000 credits per month",
            "Daily scan schedule",
            "Priority support",
        ],
        cta: "Coming at Day 90",
        popular: false,
    },
];

export default function PricingSection() {
    return (
        <SectionWrapper id="pricing" compact>
            <SectionHeader
                badge="Investment"
                title="One Engagement."
                titleHighlighted="Full Stack Intelligence."
                description="Start with the managed pilot. Transition to self-serve at day 90."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start max-w-6xl mx-auto mb-6">
                {packages.map((pkg, idx) => (
                    <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative flex flex-col p-5 rounded-2xl border transition-all duration-500 group h-full ${pkg.popular
                            ? "bg-zinc-900/80 border-primary/50 shadow-[0_0_40px_rgba(23,194,227,0.1)] lg:-translate-y-2 z-10"
                            : "bg-zinc-900/40 border-white/5 hover:border-white/10"
                            } ${pkg.locked ? "opacity-60" : ""}`}
                    >
                        {pkg.locked && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 rounded-2xl gap-2">
                                <Lock className="w-6 h-6 text-zinc-400" />
                                <span className="text-xs text-zinc-400 font-medium">Available at Day 90</span>
                            </div>
                        )}

                        {pkg.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[9px] font-black px-3 py-0.5 rounded-full shadow-[0_0_15px_rgba(23,194,227,0.4)] flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> Start Here
                            </div>
                        )}

                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-right w-full">
                                    <h3 className="text-base font-bold text-zinc-100 leading-none mb-1">{pkg.name}</h3>
                                    <p className="text-[10px] text-primary font-medium leading-none">{pkg.tagline}</p>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                {pkg.setupPrice ? (
                                    <>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-2xl font-black tracking-tight text-primary">
                                                ${pkg.setupPrice.toLocaleString()}
                                            </span>
                                            <span className="text-xs text-zinc-500 font-normal">setup</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mt-1">
                                            <span className="text-2xl font-black tracking-tight text-white">
                                                ${pkg.monthlyPrice.toLocaleString()}
                                            </span>
                                            <span className="text-xs text-zinc-500 font-normal">/mo</span>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-3xl font-black tracking-tight ${pkg.popular ? 'text-primary' : 'text-white'}`}>
                                            ${pkg.monthlyPrice?.toLocaleString()}
                                        </span>
                                        <span className="text-xs text-zinc-500 font-normal">/mo</span>
                                    </div>
                                )}
                                <p className="text-[10px] text-zinc-500 font-mono mt-1 uppercase tracking-wider">
                                    {pkg.setupPrice ? "One-Time Setup + Monthly" : "Per Month"}
                                </p>
                            </div>
                        </div>

                        <div className="mb-5 pt-4 border-t border-white/5">
                            <p className="text-xs text-zinc-400 leading-relaxed mb-3 min-h-[32px]">
                                {pkg.description}
                            </p>
                        </div>

                        <div className="space-y-2 mb-6 flex-grow">
                            {pkg.features.map((feature) => (
                                <div key={feature} className="flex gap-2 text-xs group/item">
                                    <Check className={`w-3.5 h-3.5 shrink-0 transition-colors ${pkg.popular ? 'text-primary' : 'text-zinc-600'}`} />
                                    <span className="text-zinc-300 font-light leading-snug">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto">
                            {pkg.locked ? (
                                <Button
                                    disabled
                                    className="w-full h-10 rounded-lg text-xs font-bold bg-white/5 text-zinc-500 border border-white/5 cursor-not-allowed"
                                >
                                    {pkg.cta}
                                </Button>
                            ) : (
                                <Link href={calendlyUrl} target="_blank">
                                    <Button
                                        className="w-full h-10 rounded-lg text-xs font-bold bg-primary text-black hover:bg-primary/90 hover:scale-[1.02] shadow-[0_0_20px_rgba(23,194,227,0.2)] transition-all"
                                    >
                                        {pkg.cta} <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <p className="text-center text-xs text-zinc-500 mt-6">SaaS tiers available at day 90 of the pilot</p>
        </SectionWrapper>
    );
}
