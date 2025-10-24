"use client";

import { useEffect } from 'react';

interface CalendlyPopupProps {
  url: string;
  text?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyPopup({ 
  url, 
  text = "Book a Meeting",
  className = "",
  children
}: CalendlyPopupProps) {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const openCalendlyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: url
      });
    }
  };

  if (children) {
    return (
      <div onClick={openCalendlyPopup} className={className}>
        {children}
      </div>
    );
  }

  return (
    <button 
      onClick={openCalendlyPopup}
      className={className}
    >
      {text}
    </button>
  );
}
