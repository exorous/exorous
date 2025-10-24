"use client";

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Paintbrush, 
  Smartphone, 
  LineChart, 
  Bot,
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import MotionSection from './motion-section';
import ServiceCard from './service-card';

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  
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
      icon: <LineChart className="h-10 w-10" />,
      title: "SEO & Analytics",
      description: "Data-driven strategies to improve search rankings and user engagement metrics.",
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: "AI Agent Development",
      description: "Intelligent AI agents and chatbots that automate customer interactions and enhance user experience.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Business Automation",
      description: "Streamline your operations with custom automation solutions that reduce manual work and increase efficiency.",
    }
  ];

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollBy({
          left: -470,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollIndex < services.length - 3) {
      setScrollIndex(scrollIndex + 1);
      const container = scrollContainerRef.current;
      if (container) {
        container.scrollBy({
          left: 470,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-16">
          <MotionSection className="text-center">
            <h2 className="text-lg font-medium text-primary mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h3>
            <p className="text-muted-foreground max-w-2xl">
              We specialize in creating digital experiences that engage, inspire, and deliver results.
              Our comprehensive suite of services covers everything you need for a successful digital presence.
            </p>
          </MotionSection>
          
          {/* Navigation Buttons */}
          {/* <div className="hidden md:flex space-x-2">
            <button 
              onClick={scrollLeft}
              disabled={scrollIndex === 0}
              className="p-2 rounded-full border hover:bg-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous services"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollRight}
              disabled={scrollIndex >= services.length - 3}
              className="p-2 rounded-full border hover:bg-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next services"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile View (Vertical Cards) */}
      <div className="md:hidden px-4 grid grid-cols-1 gap-6">
        {services.map((service, index) => (
          <MotionSection key={index} delay={0.1 * index}>
            <ServiceCard {...service} index={index} />
          </MotionSection>
        ))}
      </div>

      {/* Desktop View (Scrollable Cards) */}
      <div className="hidden md:block relative">
        {/* For framer-motion animation on scroll */}
        <motion.div 
          className="hidden"
          style={{ x }}
        />
        
        {/* Actual scrollable container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 pl-8 mb-8 overflow-x-hidden scroll-smooth"
        >
          <AnimatePresence>
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="w-[450px] flex-shrink-0 py-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="hidden md:flex space-x-2 justify-center">
            <button 
              onClick={scrollLeft}
              disabled={scrollIndex === 0}
              className="p-2 rounded-full border hover:bg-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous services"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollRight}
              disabled={scrollIndex >= services.length - 3}
              className="p-2 rounded-full border hover:bg-secondary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next services"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
      </div>
    </section>
  );
}