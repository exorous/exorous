"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mouse, MousePointer } from 'lucide-react';
import HeroCanvas from '@/components/hero-canvas';
import Link from 'next/link';

export default function HeroSection() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const phrases = ['Ideas', 'Innovation', 'Transform'];

  useEffect(() => {
    let timer: NodeJS.Timeout | number;
    const currentPhrase = phrases[currentIndex];
    
    // Handle typing and deleting logic
    if (isDeleting) {
      // When deleting
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length - 1));
        
        // When fully deleted, start typing the next phrase
        if (text.length <= 1) {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }, 50); // Faster deletion speed
    } else {
      // When typing
      if (text === currentPhrase) {
        // Pause when phrase is complete
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        // Continue typing
        const speed = Math.floor(Math.random() * (150 - 80) + 80);
        timer = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, speed);
      }
    }
    
    // Cleanup timer on component unmount or state change
    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, phrases]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="text-primary text-sm sm:text-base lg:text-lg font-medium mb-4">Digital Experience Agency</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            <span className="block mb-2">The Whizz Behind Next</span>
            <span className="block">
              Big{" "}
              <span className="text-primary text-glow">
                {text}
              </span>
              <span className="animate-pulse ml-1">|</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 px-4">
            We build cutting-edge websites and applications that captivate audiences
            and deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href={"#contact"}>
            <Button size="lg" className="gap-2 rounded-full text-sm sm:text-base w-full sm:w-auto">
              Book a Meeting <ArrowRight size={16} />
            </Button>
            </Link>
          <Link href={"#projects"}>
            <Button size="lg" variant="outline" className="gap-2 rounded-full text-sm sm:text-base w-full sm:w-auto">
              See Our Work
            </Button>
          </Link>
          </div>

          <motion.div 
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <span>Scroll to explore</span>
            <Mouse className="h-6 w-6 mt-2 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}