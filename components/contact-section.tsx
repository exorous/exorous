"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import MotionSection from './motion-section';
import { meetingTypes } from '@/lib/config';

export default function ContactSection() {
  const selectedMeeting = meetingTypes[0]; // Use the first (and only) meeting type

  const openCalendlyBooking = () => {
    if (typeof window !== 'undefined') {
      window.open(selectedMeeting.calendlyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const contactInfo = [
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Schedule",
      value: "Book a free consultation",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Duration", 
      value: "30-60 minutes",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Format",
      value: "One-on-one video call",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 z-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <MotionSection className="mb-12 sm:mb-16 text-center px-4">
          <h2 className="text-base sm:text-lg font-medium text-primary mb-2">Book a Meeting</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Let&apos;s Discuss Your Project</h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project requirements and get expert advice.
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <MotionSection className="glass-panel rounded-xl p-6 sm:p-8" direction="right">
            <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              Why Book a Meeting?
            </h4>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-sm sm:text-base font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h5 className="font-semibold text-lg">What You&apos;ll Get:</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Project requirements analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Technology recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Timeline and budget estimates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Next steps roadmap
                </li>
              </ul>
            </div>
          </MotionSection>

          <MotionSection className="glass-panel rounded-xl p-6 sm:p-8" direction="left">
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Free Consultation</h4>
                <p className="text-muted-foreground mb-6">
                  Discuss your project requirements and get expert advice
                </p>
              </div>

              <div className="p-6 rounded-lg border-2 border-primary bg-primary/5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-semibold mb-2">Free Consultation</h5>
                    <p className="text-muted-foreground mb-4">
                      Discuss your project and get expert advice on the best solutions for your business needs.
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded">
                        30-60 minutes
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        Free
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={openCalendlyBooking}
                  size="lg"
                  className="w-full rounded-full"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Your Meeting
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Powered by Calendly • Secure & Professional
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
