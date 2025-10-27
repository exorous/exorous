"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Track the acceptance (this will only work if Google Analytics is loaded)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cookie_consent', {
        event_category: 'engagement',
        event_label: 'accepted'
      });
    }
    
    // Enable Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    
    // Track the rejection
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'cookie_consent', {
        event_category: 'engagement',
        event_label: 'declined'
      });
      
      // Disable Google Analytics
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-50 max-w-2xl mx-auto"
        >
          <div className="bg-background border border-border rounded-xl shadow-lg p-4 sm:p-6 relative">
            {/* Close button */}
            <button
              onClick={declineCookies}
              className="absolute top-4 right-4 p-1 hover:bg-muted rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Content */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Cookie className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-sm sm:text-base mb-2">
                  We Use Cookies
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking &quot;Accept All&quot;, you consent to our use of cookies. You can learn more in our{' '}
                  <Link href="/cookie-policy" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button
                    onClick={acceptCookies}
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    Accept All
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    Decline
                  </Button>
                  <Link href="/cookie-policy">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
