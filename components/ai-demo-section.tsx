"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initialLogs = [
    { type: 'info', message: 'System initialized. Monitoring active workflows...', time: '00:00:01' },
    { type: 'success', message: 'Connected to CRM: HubSpot', time: '00:00:02' },
    { type: 'success', message: 'Connected to Email: Gmail API', time: '00:00:02' },
];

import SectionHeader from './section-header';
import SectionWrapper from './section-wrapper';

export default function AiDemoSection() {
    const [logs, setLogs] = useState(initialLogs);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Simulate live logs
    useEffect(() => {
        const possibleLogs = [
            { type: 'info', message: 'Inbound Lead Detected: "Apex Logistics"', time: 'NEW' },
            { type: 'process', message: 'Scraping company data from LinkedIn...', time: '+200ms' },
            { type: 'process', message: 'Analyzing intent: High Probability (87%)', time: '+1.5s' },
            { type: 'action', message: 'Drafting personalized outreach email...', time: '+2.1s' },
            { type: 'success', message: 'Email passed Q/A check. Sending...', time: '+3.0s' },
            { type: 'info', message: 'CRM Updated: Status -> Contacted', time: '+3.5s' },
        ];

        let index = 0;
        let isResetting = false;

        const interval = setInterval(() => {
            if (isResetting) return;

            if (index < possibleLogs.length) {
                setLogs(prev => [...prev.slice(-6), possibleLogs[index]]);
                index++;
            } else {
                isResetting = true;
                setTimeout(() => {
                    setLogs(initialLogs);
                    index = 0;
                    isResetting = false;
                }, 3000);
            }
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <SectionWrapper id="demo" compact>
            <SectionHeader
                badge="Live System Status"
                title="See It In"
                titleHighlighted="Action"
                description="Experience how our AI agents process leads and automate complex workflows in real-time."
            />

            {/* Terminal Window */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <div className="rounded-xl border border-primary/30 bg-black/90 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(23,194,227,0.2)] overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-primary/20 bg-primary/5">
                        <div className="flex gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 text-center font-mono text-[10px] text-primary/70">
                            agent-core-v2.1.0 -- executing
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div
                        ref={scrollRef}
                        className="p-6 font-mono text-[13px] h-[350px] overflow-y-auto scrollbar-hide space-y-3"
                    >
                        <AnimatePresence mode='popLayout'>
                            {logs.map((log, idx) => {
                                if (!log) return null;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex gap-4 items-start border-l border-primary/20 pl-4 py-0.5"
                                    >
                                        <span className="text-zinc-600 min-w-[70px] text-[10px] pt-1">{log.time}</span>
                                        <div className="flex-1">
                                            <span className={`
                                            ${log.type === 'info' ? 'text-blue-400' : ''}
                                            ${log.type === 'success' ? 'text-emerald-400' : ''}
                                            ${log.type === 'process' ? 'text-yellow-400' : ''}
                                            ${log.type === 'action' ? 'text-purple-400' : ''}
                                        `}>
                                                {log.type === 'process' && '↻ '}
                                                {log.type === 'success' && '✓ '}
                                                {log.message}
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                        <div className="animate-pulse text-primary font-bold">_</div>
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
}
