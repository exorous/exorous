"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Loader2,
  Check
} from 'lucide-react';
import { meetingTypes } from '@/lib/config';
import SectionHeader from './section-header';
import SectionWrapper from './section-wrapper';
import { toast } from 'sonner';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadCategory, setLeadCategory] = useState<"HOT" | "WARM" | "COLD" | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: "",
    budget: "",
  });

  const selectedMeeting = meetingTypes[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setLeadCategory(data.category);
        toast.success("AI Analysis Complete!");
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCalendlyBooking = () => {
    if (typeof window !== 'undefined') {
      // Pre-fill Calendly with Name and Email
      const calendlyUrl = new URL(selectedMeeting.calendlyUrl);
      calendlyUrl.searchParams.set('name', formData.name);
      calendlyUrl.searchParams.set('email', formData.email);
      window.open(calendlyUrl.toString(), '_blank', 'noopener,noreferrer');
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
        title={submitted ? "Analysis Complete" : "Analyze Your"}
        titleHighlighted={submitted ? "Next Steps" : "Automation Potential"}
        description={submitted
          ? "Our AI has analyzed your request. See below for the recommended path forward."
          : "Submit your details for an instant AI audit of your business bottlenecks and a personalized automation roadmap."
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* Left Column: Benefits & Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/40 rounded-3xl p-8 border border-white/5 sticky top-24"
        >
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <Sparkles className="h-4 w-4 text-primary" />
            Why Run an Audit?
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h5 className="font-bold text-sm text-white uppercase tracking-widest">The Transformation:</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Identify Manual Leakage",
                "AI Workflow Design",
                "ROI & Scaling Plan",
                "Tool Stack Selection"
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 text-sm text-zinc-400">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {submitted && leadCategory === "HOT" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20"
            >
              <p className="text-sm text-white font-medium mb-3">🔥 You qualify for a priority consultation.</p>
              <p className="text-xs text-zinc-400 leading-relaxed">Your business shows high potential for automation. We&apos;ve reserved a priority slot for you.</p>
            </motion.div>
          )}
        </motion.div>

        {/* Right Column: Dynamic Form/Result */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/60 rounded-3xl p-1 border border-white/10 overflow-hidden"
        >
          <div className="p-8">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Full Name</Label>
                      <Input
                        required
                        placeholder="John Doe"
                        className="bg-white/5 border-white/10 text-white rounded-xl py-6 focus:ring-primary/20"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Email</Label>
                      <Input
                        required
                        type="email"
                        placeholder="john@company.com"
                        className="bg-white/5 border-white/10 text-white rounded-xl py-6 focus:ring-primary/20"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">Budget Range (Optional)</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-xl py-6 focus:ring-primary/20">
                        <SelectValue placeholder="Select your budget" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-white/10 text-white">
                        <SelectItem value="low">$500 - $1k</SelectItem>
                        <SelectItem value="mid">$1k - $3k</SelectItem>
                        <SelectItem value="high">$3k - $10k+</SelectItem>
                        <SelectItem value="custom">Custom Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs text-zinc-500 uppercase tracking-widest ml-1">What is your biggest manual bottleneck?</Label>
                    <Textarea
                      required
                      placeholder="e.g., We spend 10 hours a week manually entering lead data..."
                      className="bg-white/5 border-white/10 text-white rounded-xl min-h-[120px] focus:ring-primary/20"
                      value={formData.problem}
                      onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    />
                  </div>

                  <Button
                    disabled={isSubmitting}
                    className="w-full py-7 rounded-xl bg-primary text-black hover:bg-primary/90 font-bold text-base transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        AI is Analyzing...
                      </>
                    ) : (
                      <>
                        Run Free Audit
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-[10px] text-zinc-500 text-center uppercase tracking-widest">
                    🔒 Data secured and analyzed by Exorous Core
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mb-6">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-2">Audit Received!</h4>
                  <p className="text-sm text-zinc-400 mb-8 max-w-xs mx-auto">
                    {leadCategory === "HOT"
                      ? "The systems you described have massive automation potential. Let's lock in a time to see the roadmap."
                      : "We've received your details. Our AI is drafting a personalized roadmap which will land in your inbox shortly."
                    }
                  </p>

                  {leadCategory === "HOT" ? (
                    <Button
                      onClick={openCalendlyBooking}
                      size="lg"
                      className="w-full py-7 rounded-xl bg-primary text-black hover:bg-primary/90 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(23,194,227,0.3)]"
                    >
                      <Calendar className="h-5 w-5" />
                      Schedule Deep Dive
                    </Button>
                  ) : (
                    <div className="p-6 border border-white/5 bg-white/5 rounded-2xl flex flex-col items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-xs text-white font-medium uppercase tracking-widest">Checking Inbox...</p>
                      <p className="text-[10px] text-zinc-500">A personalized email is being generated for {formData.email}</p>
                    </div>
                  )}

                  <Button
                    variant="link"
                    onClick={() => setSubmitted(false)}
                    className="text-zinc-500 hover:text-white text-xs mt-6"
                  >
                    Resubmit with different details
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
