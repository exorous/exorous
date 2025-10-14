"use client"

import { useState } from "react"
import { Mic } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MicrophoneButton() {
  const [isActive, setIsActive] = useState(false)
  const [isListening, setIsListening] = useState(false)

  const handleMicrophoneClick = () => {
    setIsActive(true)
    setIsListening(true)

    // Simulate recording for demo purposes
    // In a real application, you would implement actual speech recognition here
    setTimeout(() => {
      setIsListening(false)
      setIsActive(false)
    }, 3000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleMicrophoneClick}
        disabled={isListening}
        className={cn(
          "relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300",
          "bg-black shadow-lg hover:scale-105 active:scale-95",
          isActive && "scale-105",
        )}
      >
        {/* Gradient border */}
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 to-blue-500",
            "animate-pulse opacity-80",
          )}
        />

        {/* Inner circle */}
        <div className="absolute inset-[2px] rounded-full bg-black" />

        {/* Microphone icon */}
        <Mic className={cn("relative z-10 h-6 w-6 text-white transition-all", isListening && "animate-pulse")} />
      </button>
    </div>
  )
}
