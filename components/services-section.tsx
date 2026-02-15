"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Zap, Users, FileText, Settings, BarChart3 } from "lucide-react";
import SectionHeader from "./section-header";

const services = [
  {
    title: "The Growth Engine",
    description:
      "Your sales team shouldn't be chasing bad leads. We build systems that engage prospects instantly, qualify them, and only book calls with the ones who have budget.",
    icon: <Bot className="h-7 w-7 text-primary" />,
    stats: "0s Response Time",
    color: "primary",
    number: "01",
  },
  {
    title: "The Nurture Matrix",
    description:
      "Stop losing deals because you forgot to follow up. We automate personalized messages across Email, SMS, and LinkedIn so you stay top-of-mind without lifting a finger.",
    icon: <Zap className="h-7 w-7 text-emerald-400" />,
    stats: "+40% Reply Rate",
    color: "emerald",
    number: "02",
  },
  {
    title: "The Data Backbone",
    description:
      "Stop guessing. We sync your entire agency so you know exactly which ads are working and which clients are actually profitable.",
    icon: <Settings className="h-7 w-7 text-purple-400" />,
    stats: "100% Data Accuracy",
    color: "purple",
    number: "03",
  },
  {
    title: "Onboarding Velocity",
    description:
      "Sign a contract, and the project starts itself. Invoices sent, Slack channels created, and ClickUp folders ready—instantly.",
    icon: <Users className="h-7 w-7 text-orange-400" />,
    stats: "Day 1 Kickoff",
    color: "orange",
    number: "04",
  },
  {
    title: "The Retention Guard",
    description:
      "Clients stay longer when they see results. We automate the reporting so they always know exactly what you've done for them.",
    icon: <BarChart3 className="h-7 w-7 text-cyan-300" />,
    stats: "Reduced Churn",
    color: "cyan",
    number: "05",
  },
  {
    title: "The Admin Killer",
    description:
      "Your high-level staff shouldn't be moving files. We automate invoicing and contractor payouts so you can run lean.",
    icon: <FileText className="h-7 w-7 text-yellow-400" />,
    stats: "Zero Admin Bloat",
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
            title="Introducing The"
            titleHighlighted="Agency OS"
            description="A complete infrastructure overhaul. We replace your manual processes with intelligent automation systems."
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