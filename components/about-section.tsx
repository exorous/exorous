"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { User2, Calendar, Zap, Award } from 'lucide-react';
import MotionSection from './motion-section';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  
  const stats = [
    {
      icon: <User2 className="h-6 w-6" />,
      value: "10+",
      label: "Satisfied Clients"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      value: "1+",
      label: "Years Experience"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      value: "10+",
      label: "Projects Completed"
    },
    // {
    //   icon: <Award className="h-6 w-6" />,
    //   value: "15+",
    //   label: "Industry Awards"
    // }
  ];

  return (
    <section id="about" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-4">
        <MotionSection className="mb-16 text-center">
          <h2 className="text-lg font-medium text-primary mb-2">Who We Are</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're a team of dedicated digital craftspeople, committed to creating 
            exceptional experiences that drive business growth.
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionSection className="order-2 lg:order-1" direction="right">
            <h4 className="text-2xl font-bold mb-4">Innovating at the intersection of design and technology</h4>
            <p className="text-muted-foreground mb-6">
              Founded in 2024, Exorous has quickly established itself as a leader in creative digital solutions. 
              Our team combines technical expertise with artistic vision to create websites and applications that not only 
              look beautiful but perform exceptionally.
            </p>
            <p className="text-muted-foreground mb-6">
              We believe that great design should be accessible to all businesses, regardless of size. Our process is 
              collaborative, transparent, and focused on achieving measurable results for our clients.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <h5 className="text-2xl font-bold">{stat.value}</h5>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </MotionSection>
          
          <div className="order-1 lg:order-2">
            <motion.div
              style={{ scale: imageScale }}
              className="relative rounded-2xl overflow-hidden neon-border h-[400px]"
            >
              <Image
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="The FlowCode team collaborating"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}