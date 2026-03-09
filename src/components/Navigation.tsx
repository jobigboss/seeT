"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#tech" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(links[0].href);

  useEffect(() => {
    // client-event-listeners: passive scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-dark-navy/80 backdrop-blur-md border-white/10 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8 rounded bg-primary flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-accent/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors">See Tree</span>
        </Link>

        {/* Desktop Nav Box */}
        <div className="hidden md:flex items-center h-[52px] bg-white/[0.03] border border-white/10 rounded-xl pl-4 pr-1.5 backdrop-blur-md shadow-lg relative group/nav">
          <nav className="flex items-center gap-1 mr-6 h-full relative">
            {links.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setActiveLink(link.href)}
                  className="relative h-full flex items-center px-4 text-sm font-medium transition-colors whitespace-nowrap z-10"
                >
                  <span className={cn("relative z-10", isActive ? "text-white" : "text-gray-300 hover:text-white")}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-border"
                      className="absolute left-0 right-0 -bottom-[1px] h-[1px]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-80" />
                      <div className="absolute left-[10%] right-[10%] bottom-0 h-[8px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-[4px]" />
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="h-10">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="h-full">
              <Link
                href="#get-started"
                className="flex items-center justify-center h-full px-6 rounded-lg text-sm font-medium text-white bg-gradient-to-b from-white/10 to-transparent border border-white/20 hover:bg-white/15 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-navy border-b border-white/10 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="secondary" className="w-full mt-4">Get Started</Button>
        </motion.div>
      )}
    </motion.header>
  );
}
