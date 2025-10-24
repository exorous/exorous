"use client";

import { useEffect, useRef } from 'react';

interface CalendlyWidgetProps {
  url: string;
  height?: string;
  className?: string;
}

export default function CalendlyWidget({ 
  url, 
  height = "700px",
  className = ""
}: CalendlyWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Initialize Calendly widget
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: url,
        parentElement: widgetRef.current,
        prefill: {},
        utm: {}
      });
    }
  }, [url]);

  return (
    <div 
      ref={widgetRef}
      className={`calendly-inline-widget ${className}`}
      style={{ 
        minWidth: '320px', 
        height: height,
        width: '100%'
      }}
    />
  );
}
