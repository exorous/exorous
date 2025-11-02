"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MotionSection from './motion-section';
import ProjectCard from './project-card';
import Project3DCard from './3d-project-card';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      title: "Fizzi",
      description: "Live Gutsy - Soda perfected with 3-5g sugar, 9g fiber, and 5 delicious flavors. Gut-friendly goodness with prebiotics and probiotics.",
      imageUrl: "/fizzi.png",
      category: "ecommerce",
      tags: [],
      projectUrl: "https://fizzi37.vercel.app",
    },
    {
      title: "Nimbus",
      description: "Built for the bold - Professional grade mechanical keyboard with full aluminum case, hot-swappable switches, and E-ink display.",
      imageUrl: "/nimbus.png",
      category: "ecommerce",
      tags: [],
      projectUrl: "https://nimbus37.vercel.app",
    },
    {
      title: "Suburbia skate",
      description: "Build your own skate board.",
      imageUrl: "/skate.png",
      category: "dashboard",
      tags: [],
      projectUrl: "https://skateboard37.vercel.app",
    },
    {
      title: "CreatorHub",
      description: "Create.Publish.Grow. The AI-powered platform that turns your ideas into engaging content and helps you build a thriving creator business.",
      imageUrl: "/creatorhub.png",
      category: "dashboard",
      tags: [],
      projectUrl: "https://creatorhub37.vercel.app",
    },
    {
      title: "Dentify",
      description: "AI-powered dental assistant that answers your dental questions instantly, helps you book smart appointments, and provides personalized care recommendations. Available 24/7.",
      imageUrl: "/dentify.png",
      category: "dashboard",
      tags: [],
      projectUrl: "https://dentify37.vercel.app",
    },
    {
      title: "Short Link",
      description: "Create short, memorable links in seconds. Track their performance and ensure safety with our advanced URL shortening platform.",
      imageUrl: "/shortlink.png",
      category: "dashboard",
      tags: [],
      projectUrl: "https://shortlink37.vercel.app",
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <MotionSection className="mb-12 sm:mb-16 text-center px-4">
          <h2 className="text-base sm:text-lg font-medium text-primary mb-2">Our Work</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Projects</h3>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions that have helped our clients 
            achieve their business goals and captivate their audiences.
          </p>
        </MotionSection>
{/* 
        <div className="flex justify-center mb-12">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="website">Websites</TabsTrigger>
              <TabsTrigger value="ecommerce">E-Commerce</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboards</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="branding">Branding</TabsTrigger>
            </TabsList>
          </Tabs>
        </div> */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
          >
            {filteredProjects.map((project, index) => (
              <MotionSection key={index} delay={0.1 * index} direction="up">
                <Project3DCard {...project} index={index} />
              </MotionSection>
            ))}
          </motion.div>
        </AnimatePresence>
{/* 
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">View All Projects</Button>
        </div> */}
      </div>
    </section>
  );
}