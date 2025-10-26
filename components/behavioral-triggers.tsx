"use client";

import { useEffect, useState } from "react";
import IdleDetection from "./idle-detection";
import ReturnVisitorDetection from "./return-visitor-detection";

interface BehavioralTriggersProps {
  children: React.ReactNode;
  enableStickyButton?: boolean;
  enableExitIntent?: boolean;
  enableIdleDetection?: boolean;
  enableReturnVisitor?: boolean;
  className?: string;
}

export default function BehavioralTriggers({
  children,
  enableStickyButton = true,
  enableExitIntent = true,
  enableIdleDetection = true,
  enableReturnVisitor = true,
  className = "",
}: BehavioralTriggersProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure all components are loaded after hydration
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <div className={`behavioral-triggers-container relative ${className}`}>
      {children}

      {/* Behavioral Trigger Components */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="relative w-full h-full">
          {enableIdleDetection && <IdleDetection />}
          {enableReturnVisitor && <ReturnVisitorDetection />}
        </div>
      </div>
    </div>
  );
}
