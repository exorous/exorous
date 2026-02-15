"use client";

import { motion } from "framer-motion";
import { Check, Zap, Rocket, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
    {
        name: "Starter",
        tagline: "AI Kickstart",
        price: "$599",
        type: "one-time setup",
        description: "Perfect for: Small businesses or solo founders who want to see AI automation in action.",
        icon: <Zap className="w-6 h-6 text-primary" />,
        features: [
            "Live AI lead capture on your website",
            "Instant AI-generated reply to every lead",
            "Basic lead qualification (HOT/WARM/COLD)",
            "1 automated follow-up email",
            "Simple dashboard to track all leads",
            "1-week setup & support",
        ],
        value: "Automate lead responses and qualify prospects instantly — save hours every week without hiring extra staff.",
        cta: "Get Started Today",
        popular: false,
    },
    {
        name: "Growth",
        tagline: "AI Sales Booster",
        price: "$1,999",
        type: "one-time setup + $199/mo",
        description: "Perfect for: Businesses struggling to turn leads into clients efficiently.",
        icon: <Rocket className="w-6 h-6 text-primary" />,
        features: [
            "Everything in Starter Package",
            "3–5 automated follow-up sequences",
            "Advanced AI lead scoring & tagging",
            "Personalized email templates",
            "CRM integration (Hubspot / Zoho / custom)",
            "Monthly analytics report",
            "2-week post-launch optimization",
        ],
        value: "Convert more leads automatically, save time, and build a predictable sales pipeline.",
        cta: "Boost Your Sales Now",
        popular: true,
    },
    {
        name: "Pro",
        tagline: "AI Full Automation",
        price: "$4,499",
        type: "one-time setup + $399/mo",
        description: "Perfect for: Mid-sized businesses ready for full AI-powered lead automation.",
        icon: <Shield className="w-6 h-6 text-primary" />,
        features: [
            "Everything in Growth Package",
            "Multi-channel (Email + WhatsApp + Slack)",
            "Advanced lead routing & prioritization",
            "Real-time dashboards with live metrics",
            "AI-generated proposals & follow-ups",
            "Continuous optimization (3 months)",
            "24/7 support & team training",
        ],
        value: "Let AI run your sales engine while you focus on growing your business.",
        cta: "Request a Pro Demo",
        popular: false,
    },
];

import SectionHeader from "./section-header";
import SectionWrapper from "./section-wrapper";

export default function PricingSection() {
    return (
        <SectionWrapper id="pricing" compact>
            <SectionHeader
                badge="Strategic AI Investment"
                title="Choose Your"
                titleHighlighted="Automation Power"
                description="Select a plan that fits your business stage. Packages built to turn your business into an autonomous growth machine."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start max-w-6xl mx-auto">
                {packages.map((pkg, idx) => (
                    <motion.div
                        key={pkg.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`relative flex flex-col p-6 rounded-3xl border transition-all duration-500 group ${pkg.popular
                            ? "bg-zinc-900/50 border-primary/40 shadow-[0_0_30px_rgba(23,194,227,0.15)] lg:scale-105 z-20"
                            : "bg-zinc-900/20 border-white/5 hover:border-white/10"
                            }`}
                    >
                        {pkg.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[9px] font-black tracking-widest uppercase px-3 py-0.5 rounded-full shadow-[0_0_15px_rgba(23,194,227,0.5)]">
                                Recommended
                            </div>
                        )}

                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                                {pkg.icon}
                            </div>
                            <div className="text-right">
                                <h3 className="text-xl font-black text-white tracking-tight leading-none mb-1">{pkg.name}</h3>
                                <p className="text-[9px] text-primary font-bold tracking-widest uppercase leading-none">{pkg.tagline}</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-black text-white tracking-tighter">{pkg.price}</span>
                            </div>
                            <p className="text-[9px] text-muted-foreground mt-1 font-mono uppercase tracking-widest opacity-60">
                                {pkg.type}
                            </p>
                        </div>

                        <p className="text-[13px] text-zinc-400 font-light mb-6 leading-relaxed min-h-[40px]">
                            {pkg.description}
                        </p>

                        <div className="space-y-2 mb-8 flex-grow">
                            {pkg.features.map((feature) => (
                                <div key={feature} className="flex gap-2 text-[13px]">
                                    <Check className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-zinc-300 font-light leading-snug">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-white/5 mt-auto">
                            <div className="mb-4 p-3 rounded-xl bg-white/5 italic text-[12px] text-zinc-300 font-light border-l-2 border-primary leading-snug">
                                {pkg.value}
                            </div>

                            <Button
                                className={`w-full py-5 rounded-xl text-sm font-bold transition-all group-hover:scale-[1.02] ${pkg.popular
                                    ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(23,194,227,0.3)]"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                            >
                                {pkg.cta} <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>

        </SectionWrapper>
    );
}
