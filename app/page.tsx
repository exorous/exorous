"use client";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import HowItWorksSection from "@/components/how-it-works-section";
import ServicesSection from "@/components/services-section";

import GuaranteeSection from "@/components/guarantee-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";

import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="relative min-h-screen bg-black overflow-clip">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ServicesSection />
      <GuaranteeSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
