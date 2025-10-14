"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

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
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            {/* <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="gradient-text">FlowCode</span>
            </Link> */}

             <Link 
                      href="/" 
                      className="flex items-center gap-2 text-xl font-bold mb-4"
                    >
                      <Image src={"/logo.png"} height={30} width={30} alt='Exorous' />
                      <span className="gradient-text mt-3">Exorous</span>
                    </Link>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Crafting digital experiences that flow. We specialize in creating websites and applications
              that engage users and drive business growth.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  aria-label={social.name}
                >
                  {/* <ExternalLink className="h-5 w-5" /> */}
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((column, colIndex) => (
              <div key={colIndex}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Link 
                        href={link.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
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
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Exorous. All rights reserved.
          </p>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}