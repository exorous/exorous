"use client";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import MicrophoneButton from "@/components/ui/microphone-button";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // simulate delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="relative">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
