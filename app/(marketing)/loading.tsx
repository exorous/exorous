"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setComplete(true), 1200);
          return 100;
        }
        return Math.min(100, prev + 1);
      });
    }, 30);
    return () => clearInterval(timer);
  }, []);

  // Circular progress math
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden select-none font-sans">
      {/* Dynamic Background for Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        {/* Branding */}
        <motion.h1
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl font-black text-white/90 tracking-[0.6em] text-center"
        >
          EXOROUS
        </motion.h1>

        {/* Circular Progress Indicator */}
        <div className="relative flex items-center justify-center">
          <svg className="w-48 h-48 md:w-56 md:h-56 -rotate-90">
            {/* Background Ring */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              className="fill-none stroke-white/5"
              strokeWidth="4"
            />
            {/* Progress Ring */}
            <motion.circle
              cx="50%"
              cy="50%"
              r={radius}
              className="fill-none stroke-primary"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                filter: "drop-shadow(0 0 8px rgba(var(--primary-rgb), 0.5))"
              }}
            />
          </svg>

          {/* Percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-4xl md:text-5xl font-black text-white tabular-nums tracking-tighter"
            >
              {percent}<span className="text-base font-light ml-0.5 text-primary/80">%</span>
            </motion.span>
          </div>
        </div>
      </div>

      {/* Transition Overlay */}
      <AnimatePresence>
        {complete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-[110] bg-black"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
