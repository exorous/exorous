"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Sparkles, X } from 'lucide-react';
import { trackButtonClick } from '@/lib/gtag';

interface IdleDetectionProps {
  idleTime?: number; // in milliseconds, default 30 seconds
  className?: string;
}

export default function IdleDetection({ 
  idleTime = 30000, // 30 seconds
  className = "" 
}: IdleDetectionProps) {
  const [isIdle, setIsIdle] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [lastActivity, setLastActivity] = useState(Date.now());

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;
    let notificationTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
      setLastActivity(Date.now());
      setIsIdle(false);
      setShowNotification(false);
      
      // Clear existing timers
      if (idleTimer) clearTimeout(idleTimer);
      if (notificationTimer) clearTimeout(notificationTimer);
      
      // Set new idle timer
      idleTimer = setTimeout(() => {
        setIsIdle(true);
        trackButtonClick('User Idle Detected', 'idle-detection');
        
        // Show notification after idle is detected
        notificationTimer = setTimeout(() => {
          setShowNotification(true);
          trackButtonClick('Idle Notification Shown', 'idle-detection');
        }, 2000); // Show notification 2 seconds after idle detection
      }, idleTime);
    };

    // Activity events to reset timer
    const activityEvents = [
      'mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'
    ];

    // Add event listeners
    activityEvents.forEach(event => {
      document.addEventListener(event, resetIdleTimer, true);
    });

    // Initial timer setup
    resetIdleTimer();

    return () => {
      // Cleanup
      if (idleTimer) clearTimeout(idleTimer);
      if (notificationTimer) clearTimeout(notificationTimer);
      
      activityEvents.forEach(event => {
        document.removeEventListener(event, resetIdleTimer, true);
      });
    };
  }, [idleTime]);

  const openCalendlyBooking = () => {
    if (typeof window !== 'undefined') {
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/free-consultation';
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
      trackButtonClick('Idle Detection Booking', 'idle-notification');
      setShowNotification(false);
    }
  };

  const dismissNotification = () => {
    setShowNotification(false);
    trackButtonClick('Idle Notification Dismissed', 'idle-detection');
  };

  const getTimeSinceIdle = () => {
    const seconds = Math.floor((Date.now() - lastActivity) / 1000);
    return seconds;
  };

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className={`fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80 z-50 ${className}`}
        >
          <div className="bg-background border border-border rounded-xl shadow-lg p-4 relative">
            <button
              onClick={dismissNotification}
              className="absolute top-2 right-2 p-1 hover:bg-muted rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            
            <div className="flex items-start gap-3">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="p-2 rounded-full bg-primary/10 text-primary flex-shrink-0"
              >
                <Clock className="h-5 w-5" />
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-sm">Still here?</h4>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3">
                  You&apos;ve been browsing for a while. Ready to discuss your project?
                </p>
                
                <div className="flex gap-2">
                  <Button
                    onClick={openCalendlyBooking}
                    size="sm"
                    className="flex-1 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    Book Now
                  </Button>
                  
                  <Button
                    onClick={dismissNotification}
                    variant="ghost"
                    size="sm"
                    className="px-3"
                  >
                    Later
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Idle time indicator */}
            <div className="mt-3 text-xs text-muted-foreground text-center">
              Idle for {getTimeSinceIdle()}s
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
