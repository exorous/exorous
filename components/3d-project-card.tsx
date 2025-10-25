"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
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

export default function Project3DCard({ 
  title, 
  description, 
  imageUrl, 
  category,
  tags,
  index,
  projectUrl,
}: ProjectCardProps) {
  return (
    <PinContainer
      title={projectUrl}
      href={projectUrl}
      containerClassName="w-full"
    >
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
        {/* Project Image */}
        <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover/pin:scale-105"
          />
        </div>

        {/* Project Info */}
        <div className="flex flex-col gap-2">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          
          <div className="text-sm !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              {description}
            </span>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.map((tag, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="bg-primary/10 text-primary border-primary/20 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}


          {/* View Project Link */}
          <div className="mt-auto pt-2">
            <Link 
              href={projectUrl} 
              className="flex items-center gap-1 text-primary font-medium text-sm hover:text-primary/80 transition-colors"
              onClick={() => {
                trackProjectView(title);
                trackExternalLink(projectUrl, title);
              }}
            >
              View Project <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </PinContainer>
  );
}
