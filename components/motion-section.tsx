"use client";

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface MotionSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function MotionSection({ 
  children, 
  delay = 0.2, 
  className = '',
  direction = 'up'
}: MotionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getDirectionVariants = () => {
    switch(direction) {
      case 'up':
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'down':
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'right':
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      default:
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getDirectionVariants()}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}