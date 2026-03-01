"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "./section-header";
import SectionWrapper from "./section-wrapper";

const faqs = [
    {
        question: "Which competitors do you track?",
        answer: "You choose up to 5 competitor brands. We can track more in the Growth SaaS tier."
    },
    {
        question: "How do you learn my brand guidelines?",
        answer: "In week one we send a brand kit intake form. Logo, colors, fonts, tone of voice, product context. Takes 20 minutes. Every variation is on-brand from day one."
    },
    {
        question: "What AI models power the analysis?",
        answer: "We use Claude claude-opus-4-6 for video ad analysis and claude-sonnet-4-6 for image analysis. Gemini handles variation generation. No generic models."
    },
    {
        question: "What happens at the end of 90 days?",
        answer: "You get login access to the self-serve Exorous platform. Run your own scans, read analysis, and generate variations at $349/month instead of $2,000."
    },
    {
        question: "What if I do not like the variations?",
        answer: "One revision round per week, included. You give feedback on Monday. Revised creatives are delivered by Wednesday."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <SectionWrapper id="faq" compact>
            <SectionHeader
                badge="Questions"
                title="Common"
                titleHighlighted="Questions"
                description="Everything you need to know about the managed pilot and how the pipeline works."
            />

            <div className="max-w-3xl mx-auto space-y-3">
                {faqs.map((faq, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${openIndex === idx
                                ? "bg-zinc-900/60 border-primary/40 shadow-[0_0_20px_rgba(23,194,227,0.1)]"
                                : "bg-zinc-900/20 border-white/5 hover:border-white/10"
                                }`}
                        >
                            <span className="text-sm md:text-base font-bold text-white tracking-tight">
                                {faq.question}
                            </span>
                            <div className={`p-1 rounded-full border transition-colors ${openIndex === idx ? "border-primary text-primary" : "border-white/10 text-zinc-500"}`}>
                                {openIndex === idx ? <Minus size={14} /> : <Plus size={14} />}
                            </div>
                        </button>

                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-5 pt-2 text-[13px] md:text-sm text-zinc-400 font-light leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
