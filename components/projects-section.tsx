"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MotionSection from './motion-section';
import ProjectCard from './project-card';
import Sensai from "./../public/sensai.png";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      title: "Sens AI",
      description: "Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.",
      imageUrl: "/sensai.png",
      category: "ecommerce",
      tags: [],
      projectUrl: "https://sensai37.vercel.app/",
    },
    {
      title: "Short Link",
      description: "Create short, memorable links in seconds. Track their performance and ensure safety with our advanced URL shortening platform.",
      imageUrl: "/shortlink.png",
      category: "dashboard",
      tags: [],
      projectUrl: "https://shortlink37.vercel.app/",

    },
    {
      title: "banking nine ecru",
      description: "A Banking system mangement app.",
      imageUrl: "/bankSystem.png",
      category: "mobile",
      tags: [],
      projectUrl: "https://banking-nine-ecru.vercel.app/",
    },
    {
      title: "Horizon Travel Agency",
      description: "A visually stunning travel platform with interactive destination exploration and booking.",
      imageUrl: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "website",
      tags: [],
      projectUrl: "",
    },
    {
      title: "Pulse Music Streaming",
      description: "Iphone case brand website. Senshi — where your vibe meets vibrant visuals",
      imageUrl: "/senshiphone.png",
      category: "website",
      tags: [],
      projectUrl: "https://senshiphonecasings.store/",
    },
    {
      title: "Suburbia skate",
      description: "Build your own skate board.",
      imageUrl: "/skate.png",
      category: "dashboard",
      tags: [],
      projectUrl: "https://skateboard37.vercel.app/",
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <MotionSection className="mb-16 text-center">
          <h2 className="text-lg font-medium text-primary mb-2">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Projects</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <MotionSection key={index} delay={0.1 * index} direction="up">
                <ProjectCard {...project} index={index} />
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