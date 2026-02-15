"use client";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import ServicesSection from "@/components/services-section";
import AiDemoSection from "@/components/ai-demo-section";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import MicrophoneButton from "@/components/ui/microphone-button";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500); // Allow for cinematic text reveal completion
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="relative min-h-screen bg-black overflow-clip">
      <HeroSection />
      <ProblemSection />
      <AiDemoSection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
