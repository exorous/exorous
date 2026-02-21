"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot } from 'lucide-react';
import HeroCanvas from '@/components/hero-canvas';
import Link from 'next/link';
import Image from 'next/image';



export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 bg-black">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold mb-8">
            <Bot className="w-3 h-3" />
            <span>Built for Marketing Agencies</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] text-white">
            Scale Your Agency <br className="hidden md:block" />
            <span className="text-glow text-primary">
              Without Increasing Headcount
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4 leading-relaxed font-light">
            We help agencies automate repetitive operations using AI so they can scale without hiring more staff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/workflow-audit'} target="_blank">
                <Button size="lg" className="gap-2 rounded-full text-base font-bold px-8 h-12 w-full shadow-[0_0_20px_rgba(23,194,227,0.3)] hover:shadow-[0_0_30px_rgba(23,194,227,0.5)] transition-shadow bg-primary text-black hover:bg-primary/90">
                  Book a Call <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Tools Strip */}


        </motion.div>
      </div>

    </section>
  );
}