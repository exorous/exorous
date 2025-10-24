"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  Phone, 
  CheckCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import MotionSection from './motion-section';
import { meetingTypes } from '@/lib/config';

interface CalendlyBookingProps {
  variant?: 'inline' | 'popup' | 'button';
  meetingType?: string;
  className?: string;
}

export default function CalendlyBooking({ 
  variant = 'inline', 
  meetingType = 'consultation',
  className = ""
}: CalendlyBookingProps) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="calendly"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const meetingTypesWithIcons = meetingTypes.map(meeting => ({
    ...meeting,
    icon: meeting.id === 'consultation' ? <Users className="h-5 w-5" /> :
          meeting.id === 'project-discussion' ? <Video className="h-5 w-5" /> :
          <Phone className="h-5 w-5" />
  }));

  const selectedMeeting = meetingTypesWithIcons.find(type => type.id === meetingType) || meetingTypesWithIcons[0];

  const openCalendlyPopup = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: selectedMeeting.calendlyUrl
      });
    }
  };

  const contactInfo = [
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Schedule",
      value: "Book a meeting with us",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Response Time", 
      value: "Instant confirmation",
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Meeting Types",
      value: "Consultation, Project Discussion, Technical Review",
    },
  ];

  if (variant === 'button') {
    return (
      <Button 
        onClick={openCalendlyPopup}
        className={`rounded-full ${className}`}
        disabled={!isCalendlyLoaded}
      >
        <Calendar className="h-4 w-4 mr-2" />
        {isCalendlyLoaded ? 'Book a Meeting' : 'Loading...'}
      </Button>
    );
  }

  if (variant === 'popup') {
    return (
      <div className={`text-center ${className}`}>
        <Button 
          onClick={openCalendlyPopup}
          size="lg"
          className="rounded-full"
          disabled={!isCalendlyLoaded}
        >
          <Calendar className="h-5 w-5 mr-2" />
          {isCalendlyLoaded ? 'Schedule Your Meeting' : 'Loading...'}
        </Button>
        <p className="text-sm text-muted-foreground mt-2">
          Choose your preferred time slot
        </p>
      </div>
    );
  }

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
              <h5 className="font-semibold text-lg">What to Expect:</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Free project consultation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Technical requirements analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Timeline and budget estimation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Next steps planning
                </li>
              </ul>
            </div>
          </MotionSection>

          <MotionSection className="glass-panel rounded-xl p-6 sm:p-8" direction="left">
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Choose Your Meeting Type</h4>
                <p className="text-muted-foreground mb-6">
                  Select the type of meeting that best fits your needs
                </p>
              </div>

              <div className="space-y-4">
                {meetingTypesWithIcons.map((meeting, index) => (
                  <motion.div
                    key={meeting.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedMeeting.id === meeting.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => {
                      // Update selected meeting type
                      const event = new CustomEvent('meetingTypeChanged', { 
                        detail: { meetingType: meeting.id } 
                      });
                      window.dispatchEvent(event);
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          {meeting.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold">{meeting.title}</h5>
                          <p className="text-sm text-muted-foreground">{meeting.description}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                              {meeting.duration}
                            </span>
                            <span className="text-xs font-medium text-green-600">
                              {meeting.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                  onClick={openCalendlyPopup}
                  size="lg"
                  className="w-full rounded-full"
                  disabled={!isCalendlyLoaded}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  {isCalendlyLoaded ? 'Schedule Your Meeting' : 'Loading...'}
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
