"use client";

import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { trackProjectView, trackExternalLink } from '@/lib/gtag';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  index: number;
  projectUrl: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  imageUrl, 
  tags,
  index,
  projectUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Calculate card center position
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate mouse position relative to center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation (max 5 degrees)
    const rotateX = (mouseY / (rect.height / 2)) * -5;
    const rotateY = (mouseX / (rect.width / 2)) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group card-3d relative rounded-xl overflow-hidden h-[360px]",
        isHovered ? "shadow-xl z-10" : "shadow-md z-0"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 0.5,
      }}
      data-cursor-hover
    >
      {/* Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className={cn(
            "transition-all duration-500",
            isHovered ? "scale-110 blur-sm brightness-50" : "scale-100 brightness-75"
          )}
        />
      </div>

      {/* Card content overlay */}
      <div 
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300",
          isHovered ? "bg-gradient-to-t from-background/90 via-background/70 to-transparent" : "bg-gradient-to-t from-background/80 to-transparent/0"
        )}
      >
        <div className="relative z-10">
          <motion.div
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-3"
          >
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                {tag}
              </Badge>
            ))}
          </motion.div>

          <h3 className="text-xl font-bold mb-2">{title}</h3>
          
          <motion.p 
            className="text-muted-foreground mb-4"
            animate={{ 
              height: isHovered ? "auto" : "0px", 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            className="inline-flex items-center gap-1 text-primary font-medium"
            animate={{
              opacity: isHovered ? 1 : 0.8,
              x: isHovered ? 0 : -5,
            }}
            transition={{ duration: 0.3 }}
          >
           <Link 
             href={projectUrl} 
             className='flex gap-1 items-center'
             onClick={() => {
               trackProjectView(title);
               trackExternalLink(projectUrl, title);
             }}
           >
            View Project <ArrowUpRight className="h-4 w-4" />
           </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}