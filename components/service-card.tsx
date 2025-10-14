"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group card-3d relative rounded-xl p-6 glass-panel neon-border h-full",
        isHovered ? "shadow-lg" : "shadow-md"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor-hover
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="card-content">
        <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-50" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            
            <h3 className="text-xl font-bold gradient-text">{title}</h3>
            
            <p className="text-muted-foreground">
              {description}
            </p>
            
            <motion.div 
              className="mt-4 text-primary font-medium"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0.8 }}
            >
              Learn more →
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}