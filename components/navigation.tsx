"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { trackButtonClick } from '@/lib/gtag';
import { calendlyUrl } from '@/lib/config';

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
    const sections = ['hero', 'bottleneck', 'demo', 'services', 'faq', 'contact'];

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
    { name: 'Problem', href: '#bottleneck', id: 'bottleneck' },
    { name: 'Solution', href: '#services', id: 'services' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Guarantee', href: '#guarantee', id: 'guarantee' },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className={cn(
        "pointer-events-auto rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-lg transition-all duration-300",
        "flex items-center justify-between px-6 py-3 w-full max-w-5xl"
      )}>
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold mr-8"
          onClick={closeMenu}
        >
          <Image src={"/logo.png"} height={28} width={28} alt='Exorous' />
          <span className="gradient-text text-lg mt-1">Exorous</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-xs lg:text-sm font-medium transition-colors relative group py-1",
                    activeSection === link.id ? "text-primary" : "text-zinc-400 hover:text-white"
                  )}
                  onClick={closeMenu}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <Link
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/workflow-audit'}
              target="_blank"
            >
              <Button
                size="sm"
                className="rounded-full text-xs font-bold px-4 h-9 bg-primary text-black hover:bg-primary/90"
                onClick={() => trackButtonClick('Book Call', 'desktop-nav')}
              >
                Book a Call
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white p-1 focus:outline-none bg-white/5 rounded-full border border-white/10 h-9 w-9 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full left-4 right-4 mt-2 bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl p-4 md:hidden flex flex-col gap-2"
          >
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl transition-colors text-sm font-medium",
                      activeSection === link.id
                        ? "bg-primary/10 text-primary"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-px bg-white/5 my-2" />

            <Link
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/riaz37-ipe/workflow-audit'}
              target="_blank"
              className="px-2"
              onClick={() => closeMenu()}
            >
              <Button
                className="w-full rounded-xl bg-primary text-black hover:bg-primary/90 font-bold"
                onClick={() => trackButtonClick('Book Call', 'mobile-nav')}
              >
                Book a Call
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}