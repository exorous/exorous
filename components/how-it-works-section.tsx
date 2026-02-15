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
        icon: <Phone className="h-5 w-5" />,
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-cyan-400/20",
    },
    {
        number: "02",
        title: "The Blueprint",
        description: "We design the exact system your agency needs to scale, tailored to your offer and team.",
        icon: <Pencil className="h-5 w-5" />,
        color: "text-emerald-400",
        bgColor: "bg-emerald-400/10",
        borderColor: "border-emerald-400/20",
    },
    {
        number: "03",
        title: "The Build",
        description: "We build it for you. You don't lift a finger. Your team keeps selling while we build the engine.",
        icon: <Wrench className="h-5 w-5" />,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
    },
    {
        number: "04",
        title: "The Handover",
        description: "We train your team and hand over the keys. You own the system entirely.",
        icon: <Rocket className="h-5 w-5" />,
        color: "text-orange-400",
        bgColor: "bg-orange-400/10",
        borderColor: "border-orange-400/20",
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
                            <div className="relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-500 h-full">
                                {/* Step number */}
                                <div className={`text-[10px] font-mono ${step.color} mb-4 tracking-widest`}>
                                    STEP {step.number}
                                </div>

                                {/* Icon circle */}
                                <div
                                    className={`w-14 h-14 rounded-2xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center mb-5 ${step.color} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {step.icon}
                                </div>

                                {/* Title */}
                                <h4 className="text-lg font-bold text-white mb-3 tracking-tight">
                                    {step.title}
                                </h4>

                                {/* Description */}
                                <p className="text-zinc-400 text-sm font-light leading-relaxed">
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
