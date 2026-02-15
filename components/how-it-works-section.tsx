"use client";

import { motion } from "framer-motion";
import { Phone, Pencil, Wrench, Rocket } from "lucide-react";
import SectionHeader from "./section-header";
import SectionWrapper from "./section-wrapper";

const steps = [
    {
        number: "01",
        title: "The Audit",
        description: "We tear down your current operations to find exactly where you're losing time and money.",
        icon: <Phone className="h-5 w-5 text-primary" />,
    },
    {
        number: "02",
        title: "The Blueprint",
        description: "We design the exact system your agency needs to scale, tailored to your offer and team.",
        icon: <Pencil className="h-5 w-5 text-primary" />,
    },
    {
        number: "03",
        title: "The Build",
        description: "We build it for you. You don't lift a finger. Your team keeps selling while we build the engine.",
        icon: <Wrench className="h-5 w-5 text-primary" />,
    },
    {
        number: "04",
        title: "The Handover",
        description: "We train your team and hand over the keys. You own the system entirely.",
        icon: <Rocket className="h-5 w-5 text-primary" />,
    },
];

export default function HowItWorksSection() {
    return (
        <SectionWrapper id="process" compact>
            <SectionHeader
                badge="The Process"
                title="The Deployment"
                titleHighlighted="Protocol"
                description="Your transition to an automated agency is structured and fast. No guesswork."
            />

            <div className="max-w-5xl mx-auto relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
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
