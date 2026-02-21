"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "./section-header";
import SectionWrapper from "./section-wrapper";

const faqs = [
    {
        question: "How long does it take to deploy an AI system?",
        answer: "Most systems go live within 1–2 weeks. Complex multi-tool integrations may take 3–4 weeks depending on scope."
    },
    {
        question: "Do I need to replace my existing CRM?",
        answer: "No. We specialize in building 'AI overlays' that sit on top of your current tools (HubSpot, Salesforce, Zoho, etc.) and automate the data flow between them."
    },
    {
        question: "Is my business data secure with AI?",
        answer: "Absolutely. We use enterprise-grade APIs with strict data privacy controls. Your proprietary business data is never used to train public AI models."
    },
    {
        question: "What kind of ROI can I expect?",
        answer: "Most clients see a 70-80% reduction in lead response time and save 20+ hours of manual admin work per week within the first month of deployment."
    },
    {
        question: "Do you offer ongoing support?",
        answer: "Yes. Every project includes a 30-day post-launch warranty. We also offer ongoing monthly optimization and priority support to keep your systems running at peak performance."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <SectionWrapper id="faq" compact>
            <SectionHeader
                badge="Knowledge Base"
                title="Common"
                titleHighlighted="Questions"
                description="Everything you need to know about transforming your business with Exorous AI."
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
