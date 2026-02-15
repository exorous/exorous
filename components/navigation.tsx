"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/theme-toggle';
import Image from 'next/image';
import { trackButtonClick } from '@/lib/gtag';
import { config } from '@/lib/config';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['hero', 'bottleneck', 'demo', 'services', 'pricing', 'faq', 'contact'];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Bottleneck', href: '#bottleneck', id: 'bottleneck' },
    { name: 'Demo', href: '#demo', id: 'demo' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Packages', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Audit', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
      isScrolled ? "bg-background/80 py-3 shadow-md" : "bg-transparent py-5"
    )}>
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
          onClick={closeMenu}
        >
          <Image src={"/logo.png"} height={30} width={30} alt='Exorous' />
          <span className="gradient-text mt-3">Exorous</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <ul className="flex gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm lg:text-base transition-colors relative group",
                    activeSection === link.id ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                  )}
                  onClick={closeMenu}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Link
            href={config.calendly.mainBooking}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="rounded-full text-sm"
              onClick={() => trackButtonClick('Book a Meeting', 'desktop-nav')}
            >
              Book a Meeting
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-foreground p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          >
            <ul className="flex flex-col py-4 px-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-base block py-2 transition-colors",
                      activeSection === link.id ? "text-primary font-medium" : "hover:text-primary"
                    )}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href={config.calendly.mainBooking}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="w-full rounded-full"
                    onClick={() => trackButtonClick('Book a Meeting', 'mobile-nav')}
                  >
                    Book a Meeting
                  </Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}