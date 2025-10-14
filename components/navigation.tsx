"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/theme-toggle';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
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
          {/* <Sparkles className="h-6 w-6 text-primary" /> */}
          <Image src={"/logo.png"} height={30} width={30} alt='Exorous' />
          <span className="gradient-text mt-3">Exorous</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors relative group"
                  onClick={closeMenu}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <Link href={"/#projects"}>
          <Button className="rounded-full">
            Start a Project
          </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-foreground p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          >
            <ul className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <Link 
                    href={link.href}
                    className="text-lg block py-2 hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
               
                  <Link href={"/#projects"}>
          <Button className="w-full rounded-full">
                  Start a Project
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