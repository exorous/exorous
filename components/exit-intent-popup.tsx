"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, X, Clock, Users, CheckCircle, Sparkles } from 'lucide-react';
import { trackButtonClick } from '@/lib/gtag';

interface ExitIntentPopupProps {
  className?: string;
}

export default function ExitIntentPopup({ className = "" }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('exitIntentShown');
    if (hasShownPopup) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is moving towards the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        trackButtonClick('Exit Intent Triggered', 'popup');
      }
    };

    const handleBeforeUnload = () => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown]);

  const openCalendlyBooking = () => {
    if (typeof window !== 'undefined') {
      const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/free-consultation';
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
      trackButtonClick('Exit Intent Booking', 'popup');
      setIsVisible(false);
    }
  };

  const closePopup = () => {
    setIsVisible(false);
    trackButtonClick('Exit Intent Dismissed', 'popup');
  };

  const benefits = [
    {
      icon: <Clock className="h-4 w-4" />,
      text: "30-minute free consultation"
    },
    {
      icon: <Users className="h-4 w-4" />,
      text: "Expert project analysis"
    },
    {
      icon: <CheckCircle className="h-4 w-4" />,
      text: "No commitment required"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={closePopup}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 ${className}`}
          >
            <div className="bg-background border border-border rounded-2xl shadow-2xl max-w-md w-full mx-2 sm:mx-4 overflow-hidden max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 p-4 sm:p-6 text-center">
                <button
                  onClick={closePopup}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-1 hover:bg-muted rounded-full transition-colors touch-manipulation"
                >
                  <X className="h-4 w-4" />
                </button>
                
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3" />
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Wait! Don&apos;t miss out!</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Get a free consultation and expert advice on your project
                </p>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <div className="p-1 rounded-full bg-primary/10 text-primary flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <span className="text-xs sm:text-sm">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Button
                    onClick={openCalendlyBooking}
                    size="lg"
                    className="w-full rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 touch-manipulation min-h-[44px]"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm sm:text-base">Book Free Consultation</span>
                  </Button>
                  
                  <Button
                    onClick={closePopup}
                    variant="ghost"
                    size="sm"
                    className="w-full touch-manipulation min-h-[40px]"
                  >
                    Maybe later
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
