"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, 
  Paintbrush, 
  Smartphone, 
  LineChart, 
  Bot,
  Zap
} from 'lucide-react';
import MotionSection from './motion-section';
import AnimatedServiceCard from './animated-service-card';

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance.",
    },
    {
      icon: <Paintbrush className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces that delight users and improve conversion rates.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Apps",
      description: "Native and cross-platform applications built for seamless user experiences across all devices.",
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: "AI Agent Development",
      description: "Intelligent AI agents and chatbots that automate customer interactions and enhance user experience.",
    }
  ];


  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-12 sm:mb-16">
          <MotionSection className="text-center px-4">
            <h2 className="text-base sm:text-lg font-medium text-primary mb-2">Our Services</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What We Do</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              We specialize in creating digital experiences that engage, inspire, and deliver results.
              Our comprehensive suite of services covers everything you need for a successful digital presence.
            </p>
          </MotionSection>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <MotionSection key={index} delay={0.1 * index}>
              <AnimatedServiceCard {...service} index={index} />
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}