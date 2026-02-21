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

  const openCalendly = () => {
    if (typeof window !== 'undefined') {
      const url = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/workflow-audit';
      window.open(url, '_blank', 'noopener,noreferrer');
      trackButtonClick('Idle Detection Book Click', 'idle-notification');
      setShowNotification(false);
    }
  };

  const dismissNotification = () => {
    setShowNotification(false);
    trackButtonClick('Idle Notification Dismissed', 'idle-detection');
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
          className={`fixed bottom-4 left-2 right-2 sm:bottom-6 sm:left-6 sm:right-6 md:left-auto md:right-6 md:w-80 z-50 ${className}`}
        >
          <div className="bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl p-4 relative">
            <button
              onClick={dismissNotification}
              className="absolute top-2 right-2 p-1 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary flex-shrink-0">
                <Sparkles className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm text-white mb-1">Spotted an inefficiency?</h4>

                <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
                  We can find more. Book a quick call and see where you're losing money.
                </p>

                <div className="flex items-center gap-2">
                  <Button
                    onClick={openCalendly}
                    size="sm"
                    className="flex-1 rounded-full bg-primary text-black hover:bg-primary/90 text-xs font-bold"
                  >
                    Book a Call
                  </Button>

                  <Button
                    onClick={dismissNotification}
                    variant="ghost"
                    size="sm"
                    className="px-3 text-zinc-500 hover:text-white text-xs"
                  >
                    Later
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
