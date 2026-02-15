"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Rocket, Shield, ArrowRight, Sparkles, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionHeader from "./section-header";
import SectionWrapper from "./section-wrapper";
import { calendlyUrl } from "@/lib/config";
import { Switch } from "@/components/ui/switch";

const packages = [
    {
        name: "Starter",
        tagline: "AI Workflow Launch",
        basePrice: 1500,
        type: "One-Time",
        description: "Ideal for small teams looking to eliminate repetitive manual work quickly.",
        icon: <Zap className="w-6 h-6 text-primary" />,
        features: [
            "1–2 custom AI automation workflows",
            "Integration with up to 2 business tools",
            "Workflow strategy & system design",
            "Full setup and deployment",
            "Basic documentation",
            "Go-Live within 14 days",
        ],
        bestFor: "Small agencies, founders, and service teams starting automation.",
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Growth",
        tagline: "Agency Automation System",
        basePrice: 3000,
        type: "One-Time",
        description: "Built for agencies and growing businesses ready to scale operations.",
        icon: <Rocket className="w-6 h-6 text-black" />,
        features: [
            "3–5 custom AI automation workflows",
            "Multi-tool integrations",
            "Lead management automation",
            "Client onboarding automation",
            "Custom operational dashboard",
            "Team training session",
            "Priority deployment support",
        ],
        bestFor: "Marketing agencies, SaaS teams, and service companies.",
        cta: "Scale Your Agency",
        popular: true,
    },
    {
        name: "Pro",
        tagline: "AI Operations Engine",
        basePrice: 6000,
        type: "Starting from",
        description: "A complete AI-powered operational system for scaling organizations.",
        icon: <Shield className="w-6 h-6 text-primary" />,
        features: [
            "Unlimited workflow automation",
            "Advanced AI agents & decision systems",
            "CRM and pipeline automation",
            "Multi-department process automation",
            "Custom reporting dashboards",
            "Dedicated support & consultation",
            "Ongoing optimization strategy",
        ],
        bestFor: "Large agencies, funded startups, and enterprise teams.",
        cta: "Book Consultation",
        popular: false,
    },
];

const supportAddon = {
    price: 300,
    features: [
        "Monthly system optimization & monitoring",
        "Ongoing workflow updates & improvements",
        "Priority support access",
    ]
};

export default function PricingSection() {
    const [isSupportEnabled, setIsSupportEnabled] = useState(false);

    return (
        <SectionWrapper id="pricing" compact>
            <SectionHeader
                badge="Investment"
                title="Transparent"
                titleHighlighted="Pricing"
                description="Simple, on-time investment to build assets that save you money forever."
            />

            <div className="flex justify-center mb-10">
                <div className="flex items-center gap-4 bg-zinc-900/40 p-1.5 rounded-full border border-white/5">
                    <span className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${!isSupportEnabled ? 'text-white bg-white/10' : 'text-zinc-500'}`}>
                        One-Time Setup
                    </span>
                    <Switch
                        checked={isSupportEnabled}
                        onCheckedChange={setIsSupportEnabled}
                        className="data-[state=checked]:bg-primary"
                    />
                    <span className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors flex items-center gap-2 ${isSupportEnabled ? 'text-black bg-primary font-bold' : 'text-zinc-500'}`}>
                        + Monthly Support
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start max-w-6xl mx-auto mb-12">
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
                            }`}
                    >
                        {pkg.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[9px] font-black px-3 py-0.5 rounded-full shadow-[0_0_15px_rgba(23,194,227,0.4)] flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> Most Popular
                            </div>
                        )}

                        <div className="mb-4">
                            <div className="flex items-center justify-between mb-3">
                                <div className={`p-2 rounded-lg ${pkg.popular ? 'bg-primary text-black' : 'bg-white/5 text-white'}`}>
                                    {pkg.icon}
                                </div>
                                <div className="text-right">
                                    <h3 className="text-base font-bold text-zinc-100 leading-none mb-1">{pkg.name}</h3>
                                    <p className="text-[10px] text-primary font-medium leading-none">{pkg.tagline}</p>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <div className="flex items-baseline gap-1">
                                    <span className={`text-3xl font-black tracking-tight ${pkg.popular ? 'text-primary' : 'text-white'}`}>
                                        ${pkg.basePrice.toLocaleString()}
                                    </span>
                                    {isSupportEnabled && (
                                        <motion.span
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="text-lg font-bold text-zinc-400"
                                        >
                                            + ${supportAddon.price}<span className="text-xs font-normal">/mo</span>
                                        </motion.span>
                                    )}
                                </div>
                                <p className="text-[10px] text-zinc-500 font-mono mt-1 uppercase tracking-wider">
                                    {pkg.type} {isSupportEnabled && "+ Monthly Optimization"}
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
                                    <Check className={`w-3.5 h-3.5 shrink-0 transition-colors ${pkg.popular ? 'text-primary' : 'text-zinc-600 group-hover/item:text-zinc-400'}`} />
                                    <span className="text-zinc-300 font-light leading-snug">{feature}</span>
                                </div>
                            ))}

                            <AnimatePresence>
                                {isSupportEnabled && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="pt-2 mt-2 border-t border-white/5 space-y-2"
                                    >
                                        {supportAddon.features.map((feature) => (
                                            <div key={feature} className="flex gap-2 text-xs text-primary font-medium">
                                                <Plus className="w-3.5 h-3.5 shrink-0" />
                                                <span className="leading-snug">{feature}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="mt-auto">
                            <Link href={calendlyUrl} target="_blank">
                                <Button
                                    className={`w-full h-10 rounded-lg text-xs font-bold transition-all ${pkg.popular
                                        ? "bg-primary text-black hover:bg-primary/90 hover:scale-[1.02] shadow-[0_0_20px_rgba(23,194,227,0.2)]"
                                        : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                                        }`}
                                >
                                    {isSupportEnabled ? "Subscribe & Build" : pkg.cta} <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
