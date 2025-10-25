"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Code, Paintbrush, Smartphone, LineChart, Bot, Zap } from "lucide-react";

interface AnimatedServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export default function AnimatedServiceCard({
  icon,
  title,
  description,
  index,
  className,
}: AnimatedServiceCardProps) {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group",
        className
      )}
    >
      <AnimatedIconContainer index={index}>
        {icon}
      </AnimatedIconContainer>
      <h3 className="text-lg font-semibold text-foreground py-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

const AnimatedIconContainer = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      `.icon-${index}`,
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(sequence, {
        // @ts-ignore
        repeat: Infinity,
        repeatDelay: 2 + index * 0.5, // Stagger animations
      });
    }, index * 200); // Delay start based on index

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="p-8 overflow-hidden h-32 relative flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div
          className={cn(
            `h-16 w-16 rounded-full flex items-center justify-center bg-primary/10
            shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
            border border-primary/20 group-hover:border-primary/40 transition-colors`,
            `icon-${index}`
          )}
        >
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {children}
          </div>
        </div>
      </div>

      {/* Animated sparkles effect */}
      <div className="h-20 w-px absolute top-16 m-auto z-40 bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-move">
        <div className="w-8 h-16 top-1/2 -translate-y-1/2 absolute -left-4">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  
  return (
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-primary/60"
        />
      ))}
    </div>
  );
};
