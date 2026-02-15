"use client";

import SectionHeader from './section-header';
import SectionWrapper from './section-wrapper';
import { Bot, Zap } from 'lucide-react';
import MotionSection from './motion-section';

const services = [
  {
    title: "AI Workflow Automation",
    description: "Capture, qualify, and respond to leads in real-time. We build intelligent systems that handle follow-ups and CRM updates autonomously.",
    icon: <Bot className="h-6 w-6 text-primary" />,
    className: "md:col-span-2",
    stats: "Instant Qualification"
  },
  {
    title: "AI Sales Automation",
    description: "Personalized outreach and automated meeting bookings that turn cold prospects into revenue.",
    icon: <Zap className="h-6 w-6 text-emerald-400" />,
    className: "md:col-span-1",
    stats: "+40% Conversion"
  },
  {
    title: "AI Operations",
    description: "Intelligent data processing and internal workflows that eliminate manual tasks and reduce overhead.",
    icon: <Zap className="h-6 w-6 text-purple-400" />,
    className: "md:col-span-1",
    stats: "24/7 Autonomy"
  },
  {
    title: "Customer Support AI",
    description: "Advanced AI agents that handle complex inquiries across all platforms without human intervention.",
    icon: <Zap className="h-6 w-6 text-orange-400" />,
    className: "md:col-span-2",
    stats: "80% Time Saved"
  }
];

export default function ServicesSection() {
  return (
    <SectionWrapper id="services" compact>
      <SectionHeader
        badge="Core AI Services"
        title="Strategic AI"
        titleHighlighted="Solutions"
        description="We build autonomous systems that replace manual effort with intelligent execution."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <MotionSection
            key={index}
            delay={index * 0.1}
            className={`group relative overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-primary/40 transition-all duration-500 p-8 flex flex-col justify-between h-[280px] ${service.className}`}
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed text-sm font-light max-w-xs">
                {service.description}
              </p>
            </div>

            <div className="relative z-10 mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider">RES-ID: {String(index + 1).padStart(2, '0')}</span>
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                {service.stats}
              </span>
            </div>
          </MotionSection>
        ))}
      </div>
    </SectionWrapper>
  );
}