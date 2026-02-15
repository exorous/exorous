"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Zap } from 'lucide-react';
import HeroCanvas from '@/components/hero-canvas';
import Link from 'next/link';

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
            <span>AI Automation Agency</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] text-white">
            Turn Your Business Into An <br className="hidden md:block" />
            <span className="text-glow text-primary">
              AI-Powered Machine
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4 leading-relaxed font-light">
            Eliminate repetitive manual work. We build autonomous AI systems that capture leads,
            qualify customers, and automate operations 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Link href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2 rounded-full text-base font-bold px-8 h-12 w-full shadow-[0_0_20px_rgba(23,194,227,0.3)] hover:shadow-[0_0_30px_rgba(23,194,227,0.5)] transition-shadow bg-primary text-black hover:bg-primary/90">
                Book a Call <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="#demo" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="gap-2 rounded-full text-base font-bold px-8 h-12 w-full border-white/10 hover:bg-white/5 text-white">
                Try AI Demo <Zap size={18} />
              </Button>
            </Link>
          </div>

        </motion.div>
      </div>

    </section>
  );
}