"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('[data-cursor-hover]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Only show on large screens and non-touch devices
  const [shouldRender, setShouldRender] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth >= 1024;
      setShouldRender(isLargeScreen && !isTouchDevice);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/30 z-50 pointer-events-none mix-blend-screen backdrop-blur-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 z-40 filter blur-2xl pointer-events-none mix-blend-screen"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 100,
          mass: 1,
        }}
      />
    </>
  );
}