"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Lightbulb,
  FileSearch,
  Code as CodeIcon,
  Rocket,
  ArrowDownToLine
} from 'lucide-react';
import MotionSection from './motion-section';

const steps = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Business Analysis",
    description: "We analyze your current workflow to identify bottlenecks, repetitive tasks, and high-impact automation opportunities.",
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "Automation Strategy Design",
    description: "We design a customized AI architecture tailored to your specific needs, selecting the right agents and tools.",
  },
  {
    icon: <CodeIcon className="h-6 w-6" />,
    title: "System Development",
    description: "We build and integrate AI agents, automation workflows, and connect them seamlessly with your existing stack.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Deployment & Optimization",
    description: "We launch your system, monitor performance, and continuously optimize it to ensure maximum efficiency and ROI.",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-0 bg-black" />
      <div className="container mx-auto px-4 relative z-10">
        <MotionSection className="mb-24 text-center px-4">
          <h2 className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From chaos to clarity in four steps.
          </p>
        </MotionSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Line Background */}
          <div className="absolute left-[19px] md:left-1/2 top-0 w-1 md:w-1 h-full bg-zinc-900 transform md:-translate-x-1/2 rounded-full overflow-hidden">
            {/* Tracer Beam */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
              style={{ height: progressHeight }}
            />
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-24 relative">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                total={steps.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index, total, scrollYProgress }: { step: any, index: number, total: number, scrollYProgress: any }) {
  // Calculate threshold for this step activation
  // e.g. 4 steps: 0.0, 0.33, 0.66, 0.99 (approx)
  const threshold = index / (total - 0.5);

  // Create a strict boolean transform for activation state would be ideal, but let's use opacity variants based on a simple check in render or useTransform
  const isActive = useTransform(scrollYProgress, (value: number) => value > threshold - 0.1);
  const opacity = useTransform(scrollYProgress, [threshold - 0.2, threshold], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [threshold - 0.2, threshold], [0.9, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      style={{ opacity, scale }}
      className={`relative flex md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Timeline Node */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-20">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-black border-4 border-zinc-900 transition-colors duration-500 timeline-node">
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, (v: number) => v > threshold ? 1 : 0) }}
            className="absolute inset-0 rounded-full bg-primary shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          />
          <span className="relative z-10 text-xs font-bold text-white">{index + 1}</span>
        </div>
      </div>

      {/* Content Card */}
      <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-3rem)] ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
        <div className={`glass-panel p-8 rounded-2xl border transition-all duration-500 hover:border-primary/30 group ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
          <div className={`mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300 ${isEven ? 'md:ml-auto' : ''}`}>
            {step.icon}
          </div>
          <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
          <p className="text-muted-foreground leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}