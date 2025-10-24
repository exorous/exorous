"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Star, Sparkles, X } from 'lucide-react';
import { trackButtonClick } from '@/lib/gtag';

interface ReturnVisitorDetectionProps {
  className?: string;
}

export default function ReturnVisitorDetection({ className = "" }: ReturnVisitorDetectionProps) {
  const [isReturnVisitor, setIsReturnVisitor] = useState(false);
  const [showWelcomeBack, setShowWelcomeBack] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const checkReturnVisitor = () => {
      const lastVisit = localStorage.getItem('lastVisit');
      const visitCount = parseInt(localStorage.getItem('visitCount') || '0');
      const now = Date.now();
      
      // Update visit count
      const newVisitCount = visitCount + 1;
      setVisitCount(newVisitCount);
      localStorage.setItem('visitCount', newVisitCount.toString());
      localStorage.setItem('lastVisit', now.toString());
      
      // Check if user visited before (within last 30 days)
      if (lastVisit) {
        const daysSinceLastVisit = (now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24);
        
        if (daysSinceLastVisit > 1 && newVisitCount > 1) {
          setIsReturnVisitor(true);
          
          // Show welcome back message after a short delay
          setTimeout(() => {
            setShowWelcomeBack(true);
            trackButtonClick('Return Visitor Detected', 'return-visitor');
          }, 2000);
        }
      }
    };

    checkReturnVisitor();
  }, []);

  const openCalendlyBooking = () => {
    if (typeof window !== 'undefined') {
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/free-consultation';
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
      trackButtonClick('Return Visitor Booking', 'welcome-back');
      setShowWelcomeBack(false);
    }
  };

  const dismissWelcome = () => {
    setShowWelcomeBack(false);
    trackButtonClick('Welcome Back Dismissed', 'return-visitor');
  };

  return (
    <AnimatePresence>
      {showWelcomeBack && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-sm w-full mx-4 ${className}`}
        >
          <div className="bg-background border border-border rounded-xl shadow-lg p-4 relative">
            <button
              onClick={dismissWelcome}
              className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="p-2 rounded-full bg-primary/10 text-primary flex-shrink-0"
              >
                <Star className="h-5 w-5" />
              </motion.div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-sm">Welcome back!</h4>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3">
                  Great to see you again! This is your visit #{visitCount}. 
                  Ready to discuss your project?
                </p>
                
                <Button
                  onClick={openCalendlyBooking}
                  size="sm"
                  className="w-full rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  Book Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
