"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, MapPin, Clock, Briefcase, CheckCircle, Users, Calendar, DollarSign } from 'lucide-react';
import Link from 'next/link';
import MotionSection from './motion-section';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  experience: string;
  workingDays: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  googleFormLink: string;
  postedDate: string;
}

interface JobDetailsProps {
  job: JobPosition;
}

export default function JobDetails({ job }: JobDetailsProps) {
  const handleApplyNow = () => {
    window.open(job.googleFormLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-background via-muted/20 to-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <MotionSection delay={0.1} direction="up">
            <div className="flex flex-col gap-8">
              {/* Badge and Title */}
              <div className="flex items-start gap-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-2 h-fit">
                  {job.type}
                </Badge>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">{job.title}</h1>
                  <p className="text-lg text-muted-foreground font-medium">{job.department}</p>
                </div>
              </div>
              
              {/* Job Info */}
              <div className="flex flex-wrap gap-6 text-base">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">{job.workingDays}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium">Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <MotionSection delay={0.2} direction="up">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="h-6 w-6" />
                    Job Description
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {job.description}
                  </p>
                </div>
              </MotionSection>

              {/* Responsibilities */}
              <MotionSection delay={0.3} direction="up">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Key Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionSection>

              {/* Requirements */}
              <MotionSection delay={0.4} direction="up">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-base">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Benefits */}
                <MotionSection delay={0.5} direction="up">
                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      What We Offer
                    </h3>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionSection>

                {/* Job Info */}
                <MotionSection delay={0.6} direction="up">
                  <div className="bg-muted/30 rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-semibold mb-4">Job Information</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Department:</span>
                        <span className="font-medium">{job.department}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="font-medium capitalize">{job.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <span className="font-medium">{job.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Posted:</span>
                        <span className="font-medium">{new Date(job.postedDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </MotionSection>
              </div>
            </div>
          </div>
        </div>

        {/* Apply Now Button */}
        <MotionSection delay={0.8} direction="up">
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              onClick={handleApplyNow}
              className="gap-2 px-8 py-3 text-lg"
            >
              Apply Now
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </MotionSection>
      </div>
    </div>
  );
}
