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

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const progressLineHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  const steps = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
    },
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "Strategy & Design",
      description: "Our team creates the blueprint for your project, including wireframes, mockups, and a comprehensive development strategy.",
    },
    {
      icon: <CodeIcon className="h-6 w-6" />,
      title: "Development",
      description: "We bring designs to life with clean, efficient code, regular updates, and ongoing quality assurance throughout the build.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Launch & Growth",
      description: "We deploy your project, provide training, and establish ongoing maintenance plans to ensure continued success.",
    },
  ];

  return (
    <section id="process" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        <MotionSection className="mb-16 text-center">
          <h2 className="text-lg font-medium text-primary mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures we deliver exceptional results 
            while keeping you informed and involved at every stage.
          </p>
        </MotionSection>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-[19px] md:left-1/2 top-0 w-1 md:w-1 h-full bg-muted transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-primary"
              style={{ height: progressLineHeight }}
            />
          </div>

          {/* Process Steps */}
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative flex md:items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:static flex items-center justify-center z-10">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary bg-background">
                  <span className="animate-pulse absolute w-12 h-12 rounded-full bg-primary/20" />
                  <span className="relative z-10 text-primary font-bold">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <MotionSection
                className={`ml-14 md:ml-0 px-6 py-6 rounded-lg glass-panel w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
                delay={0.1 * index}
                direction={index % 2 === 0 ? 'right' : 'left'}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold">{step.title}</h4>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </MotionSection>
            </div>
          ))}

          {/* Final Node */}
          <div className="absolute bottom-[-20px] left-[19px] md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
            {/* <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
              <ArrowDownToLine className="h-5 w-5 text-white" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}