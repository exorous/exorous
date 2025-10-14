"use client"

import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : prev))
    }, 30)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden text-white px-4">
      {/* Stars background */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Planets */}
      <div
        className="absolute rounded-full bg-cyan-900/30 blur-2xl"
        style={{
          width: "150px",
          height: "150px",
          top: "20%",
          left: "15%",
        }}
      />
      <div
        className="absolute rounded-full bg-cyan-800/20 blur-xl"
        style={{
          width: "80px",
          height: "80px",
          bottom: "25%",
          right: "20%",
        }}
      />

      <div className="z-10 text-center max-w-3xl">
        <div className="flex flex-col items-center">
          {/* Logo placeholder */}
          <div className="mb-8">
            <div className="text-3xl font-bold">
              Nex<span className="text-cyan-400">whizz</span>
            </div>
          </div>

          {/* Orbital loading animation */}
          <div className="relative w-32 h-32 mb-8">
            <div className="absolute inset-0 rounded-full border-2 border-gray-800 opacity-30"></div>

            {/* Orbital rings */}
            <div
              className="absolute inset-0 rounded-full border border-gray-700 animate-spin"
              style={{ animationDuration: "8s" }}
            ></div>
            <div
              className="absolute inset-2 rounded-full border border-gray-700 animate-spin"
              style={{ animationDuration: "6s" }}
            ></div>
            <div
              className="absolute inset-4 rounded-full border border-gray-700 animate-spin"
              style={{ animationDuration: "4s" }}
            ></div>

            {/* Planets */}
            <div
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                top: "50%",
                left: "0%",
                transform: "translate(-50%, -50%)",
                animation: "orbit 8s linear infinite",
              }}
            ></div>
            <div
              className="absolute w-3 h-3 bg-cyan-500 rounded-full"
              style={{
                top: "50%",
                left: "12.5%",
                transform: "translate(-50%, -50%)",
                animation: "orbit 6s linear infinite",
              }}
            ></div>
            <div
              className="absolute w-4 h-4 bg-cyan-600 rounded-full"
              style={{
                top: "50%",
                left: "25%",
                transform: "translate(-50%, -50%)",
                animation: "orbit 4s linear infinite",
              }}
            ></div>

            {/* Center planet */}
            <div className="absolute w-8 h-8 bg-cyan-400 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 glow"></div>
          </div>

          {/* Progress bar */}
          <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-2">
            <div
              className="h-full bg-cyan-400 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-400">{progress < 100 ? "Loading..." : "Ready"}</div>
        </div>
      </div>

      <div className="absolute bottom-8 text-center text-gray-500 text-sm">
        <p>Exorous Digital Experience Agency</p>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(16px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(16px) rotate(-360deg); }
        }
        
        .glow {
          box-shadow: 0 0 15px 5px rgba(11, 206, 239, 0.3);
        }
      `}</style>
    </div>
  )
}
