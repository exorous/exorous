"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const problems = [
    {
        id: "01",
        title: "Lead Decay",
        description: "Every minute you wait to respond to a new lead, your conversion chance drops. Manual follow-up is too slow, and it's costing you deals.",
        category: "Sales"
    },
    {
        id: "02",
        title: "The Fulfillment Treadmill",
        description: "You sign a client, but then you're stuck onboarding them for weeks. You stop selling to fulfill, and your pipeline dries up.",
        category: "Operations"
    },
    {
        id: "03",
        title: "The Hiring Bloat",
        description: "You hire people to do work that software should do. Your revenue grows, but your margins get tighter with every new head.",
        category: "Growth"
    },
    {
        id: "04",
        title: "Scope Creep",
        description: "Clients treat you like an employee because your processes aren't rigid. You spend hours on 'quick tasks' that you can't bill for.",
        category: "Management"
    },
    {
        id: "05",
        title: "Data Blindness",
        description: "You don't know your actual profit per client because your reporting is a mess of scattered spreadsheets and dashboard screenshots.",
        category: "Analytics"
    }
];

import SectionHeader from "./section-header";
import SectionWrapper from "./section-wrapper";

export default function ProblemSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    return (
        <SectionWrapper id="bottleneck" compact>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Statement */}
                <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader
                            badge="The Agency Trap"
                            title="Why You Can't Scale"
                            titleHighlighted="Past Your Ceiling"
                            description="It's not a lead problem. It's a bandwidth problem. You're capping your own growth because your operations rely on humans doing robot work."
                            align="left"
                        />
                    </motion.div>
                </div>

                {/* Right Column: Scrolling Timeline */}
                <div ref={containerRef} className="relative flex flex-col pl-12 pb-24 pt-12">
                    {/* Timeline Track */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent">
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-400 origin-top shadow-[0_0_15px_1px_rgba(34,211,238,0.4)]"
                        />
                    </div>

                    {problems.map((problem, idx) => {
                        const start = idx / problems.length;
                        const end = (idx + 1) / problems.length;

                        return (
                            <ProblemItem
                                key={idx}
                                problem={problem}
                                progress={scrollYProgress}
                                range={[start, end]}
                            />
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}

function ProblemItem({ problem, progress, range }: { problem: any, progress: any, range: [number, number] }) {
    const opacity = useTransform(progress, [range[0], range[0] + 0.05], [0.3, 1]);
    const scale = useTransform(progress, [range[0], range[0] + 0.05], [1, 1.05]);
    const x = useTransform(progress, [range[0], range[0] + 0.05], [0, 10]);
    const active = useTransform(progress, (latest: number) => latest >= range[0] ? 1 : 0);
    const borderColor = useTransform(progress, [range[0], range[0] + 0.05], ["rgb(63, 63, 70)", "rgb(34, 211, 238)"]); // zinc-700 to cyan-400
    const glowScale = useTransform(progress, [range[0], range[0] + 0.05], [1, 1.5]);

    return (
        <motion.div
            style={{ opacity, scale, x }}
            className="relative py-16 cursor-default group"
        >
            {/* Tech Node on the timeline */}
            <div className="absolute top-20 left-[-56px] flex items-center justify-center w-8 h-8">
                {/* Outer pulsing ring for active state */}
                <motion.div
                    style={{ scale: glowScale, opacity: active }}
                    className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md"
                />

                {/* Main Node Circle */}
                <motion.div
                    style={{ borderColor }}
                    className="w-6 h-6 rounded-full border-2 bg-black z-10 flex items-center justify-center transition-colors duration-300"
                >
                    {/* Inner Core */}
                    <motion.div
                        style={{
                            scale: active,
                            backgroundColor: "rgb(34, 211, 238)"
                        }}
                        className="w-2 h-2 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    />
                </motion.div>
            </div>

            <div className="flex items-baseline justify-between mb-3">
                <motion.h4
                    style={{ color: borderColor }}
                    className="text-3xl font-bold transition-colors duration-300"
                >
                    {problem.title}
                </motion.h4>
                <span className="text-sm font-mono text-zinc-600">/{problem.category}</span>
            </div>

            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
                {problem.description}
            </p>
        </motion.div>
    );
}
