"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { calendlyUrl } from '@/lib/config';
import SectionHeader from './section-header';
import SectionWrapper from './section-wrapper';

export default function ContactSection() {
  const openCalendlyBooking = () => {
    if (typeof window !== 'undefined') {
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const contactInfo = [
    {
      icon: <Calendar className="h-4 w-4" />,
      label: "Schedule",
      value: "Free consultation",
    },
    {
      icon: <Clock className="h-4 w-4" />,
      label: "Duration",
      value: "30-60 minutes",
    },
    {
      icon: <Users className="h-4 w-4" />,
      label: "Format",
      value: "Direct video call",
    },
  ];

  return (
    <SectionWrapper id="contact" compact>
      <SectionHeader
        badge="Ready to Scale?"
        title="Analyze Your"
        titleHighlighted="Bleeding Time"
        description="Every day you wait is another day of lost leads and wasted hours. Book your call to stop the bleeding."
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/40 rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

          <h4 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">
            Stop The Manual Grind. <br />
            <span className="text-primary">Start The Machine.</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full max-w-2xl">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5 items-center justify-center">
                <div className="text-primary mb-1">
                  {item.icon}
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={openCalendlyBooking}
            size="lg"
            className="w-full sm:w-auto py-8 px-12 rounded-full bg-primary text-black hover:bg-primary/90 font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(23,194,227,0.3)] hover:shadow-[0_0_60px_rgba(23,194,227,0.5)] hover:scale-105"
          >
            <Calendar className="h-6 w-6" />
            Book Your Call
            <ArrowRight className="h-6 w-6" />
          </Button>

          <p className="mt-6 text-xs text-zinc-500 max-w-md">
            No pressure sales. just a strategy session to see where you're losing money and how we can fix it.
          </p>

        </motion.div>
      </div>
    </SectionWrapper>
  );
}
