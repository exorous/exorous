"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Twitter, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { config } from '@/lib/config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Site Map",
      links: [
        { label: "Home", href: "#hero" },
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#" },
        { label: "UI/UX Design", href: "#" },
        { label: "Mobile Apps", href: "#" },
        { label: "SEO & Analytics", href: "#" },
        { label: "CMS Solutions", href: "#" },
        { label: "Support & Maintenance", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ];
  
  const socialLinks = [
    // { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/exorous", icon: <Linkedin/> },
    // { name: "GitHub", href: "https://github.com" },
    { name: "Facebook", href: "https://www.facebook.com/exorous", icon: <Facebook/> },
  ];

  return (
    <footer className="relative pt-24 pb-12 border-t border-border overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="w-full lg:w-1/3 mb-6 sm:mb-8 lg:mb-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-lg sm:text-xl font-bold mb-4"
            >
              <Image src={"/logo.png"} height={24} width={24} alt='Exorous' className="sm:h-[30px] sm:w-[30px]" />
              <span className="gradient-text mt-2 sm:mt-3">Exorous</span>
            </Link>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md">
              Crafting digital experiences that flow. We specialize in creating websites and applications
              that engage users and drive business growth.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href={`mailto:${config.app.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {config.app.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href={`tel:${config.app.phone}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {config.app.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {config.app.address}
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {footerLinks.map((column, colIndex) => (
              <div key={colIndex}>
                <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">{column.title}</h3>
                <ul className="space-y-1.5 sm:space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Exorous. All rights reserved.
          </p>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full text-xs sm:text-sm" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}