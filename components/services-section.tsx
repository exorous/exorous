"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Brain, Image, FileText, Brush, Rocket } from "lucide-react";
import SectionHeader from "./section-header";

const services = [
  {
    title: "Weekly Competitor Scan",
    description:
      "Every Monday, we pull the latest ads from your top 5 competitors. You know what they launched, when, and on which platform — before your week starts.",
    icon: <Search className="h-7 w-7 text-primary" />,
    stats: "5 Competitors Tracked",
    color: "primary",
    number: "01",
  },
  {
    title: "AI Pattern Analysis",
    description:
      "We do not just show you the ads. We break down the hook framework, emotional arc, pacing, and CTA mechanics of every winning creative. Structured intelligence, not screenshots.",
    icon: <Brain className="h-7 w-7 text-emerald-400" />,
    stats: "4 Dimensions Analyzed",
    color: "emerald",
    number: "02",
  },
  {
    title: "Branded Variation Generation",
    description:
      "8 new creatives per week, generated from your brand kit and informed by the analysis. Your colors, your tone, your message — engineered from what is working.",
    icon: <Image className="h-7 w-7 text-purple-400" />,
    stats: "8 Creatives Per Week",
    color: "purple",
    number: "03",
  },
  {
    title: "The Weekly Report",
    description:
      "Every Monday morning you get a structured briefing: what your competitors ran, what is working and why, and 8 variations ready to test. One document, every week.",
    icon: <FileText className="h-7 w-7 text-orange-400" />,
    stats: "Monday Delivery",
    color: "orange",
    number: "04",
  },
  {
    title: "Brand Kit Setup",
    description:
      "In week one we capture your brand guidelines: logo, color palette, typography, tone of voice, product details. Every variation is on-brand from generation one.",
    icon: <Brush className="h-7 w-7 text-cyan-300" />,
    stats: "Day 1 Setup",
    color: "cyan",
    number: "05",
  },
  {
    title: "SaaS Transition",
    description:
      "At day 90, you get access to the self-serve platform. Run your own scans, read your own analysis, generate your own variations — at a fraction of the managed cost.",
    icon: <Rocket className="h-7 w-7 text-yellow-400" />,
    stats: "Day 90 Handover",
    color: "yellow",
    number: "06",
  },
];



function ServiceCard({
  service,
  index,
  totalServices,
  containerProgress,
}: {
  service: (typeof services)[number];
  index: number;
  totalServices: number;
  containerProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each card gets an equal segment of the scroll
  const segmentSize = 1 / totalServices;
  const start = index * segmentSize;
  const enterEnd = start + segmentSize * 0.3; // card fully enters by 30% of its segment
  const exitStart = start + segmentSize * 0.7; // card starts exiting at 70%
  const end = (index + 1) * segmentSize;

  // Slide in from right, hold, slide out left
  const x = useTransform(
    containerProgress,
    [start, enterEnd, exitStart, end],
    ["100%", "0%", "0%", "-100%"]
  );

  // Fade in, hold, fade out
  const opacity = useTransform(
    containerProgress,
    [start, enterEnd, exitStart, end],
    [0, 1, 1, 0]
  );

  // Scale up on entry, hold, scale down on exit
  const scale = useTransform(
    containerProgress,
    [start, enterEnd, exitStart, end],
    [0.85, 1, 1, 0.85]
  );

  // Counter text for progress
  const progressText = `${String(index + 1).padStart(2, "0")} / ${String(totalServices).padStart(2, "0")}`;

  return (
    <motion.div
      style={{ x, opacity, scale }}
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900/60 border border-white/5 backdrop-blur-sm p-8 sm:p-12 md:p-16">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Top row: number + stats */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-mono text-zinc-600 tracking-widest">
                {progressText}
              </span>
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                {service.stats}
              </span>
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative bg-black"
      style={{ height: `${(services.length + 1) * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Header */}
        <div className="container mx-auto px-4 pt-20 sm:pt-24">
          <SectionHeader
            badge="The Solution"
            title="Introducing the"
            titleHighlighted="Intelligence Pipeline"
            description="A complete competitive intelligence system. We replace guesswork with structured AI analysis and branded outputs — delivered weekly."
          />
        </div>

        {/* Cards viewport */}
        <div className="relative flex-1">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              totalServices={services.length}
              containerProgress={scrollYProgress}
            />
          ))}
        </div>


      </div>
    </section>
  );
}