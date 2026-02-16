"use client"

import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
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
        <h1 className="text-7xl md:text-9xl font-bold mb-4">
          4<span className="text-cyan-400">0</span>4
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-10">The page you're looking for has drifted into deep space.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group bg-cyan-400 hover:bg-cyan-500 text-black font-medium py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
          <Link
            href="/#contact"
            className="group bg-transparent border border-gray-600 hover:border-cyan-400 text-white font-medium py-3 px-8 rounded-full flex items-center justify-center transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 text-center text-gray-500 text-sm">
        <p>Exorous Digital Experience Agency</p>
      </div>

      {/* CSS for twinkling stars */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
