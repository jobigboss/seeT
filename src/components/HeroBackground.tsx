"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-dark-navy/80 z-10" />
      
      {/* Animated Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-accent/20 rounded-full blur-[150px]"
      />

      {/* Digital Tree Network SVG */}
      <div className="absolute inset-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Tree Structure Lines */}
          <g stroke="url(#glowGradient)" strokeWidth="0.5" fill="none" opacity="0.6">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M 50 100 C 50 80, 50 60, 50 40" 
            />
            {/* Left Branches */}
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }} d="M 50 60 C 40 50, 30 40, 20 30" />
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }} d="M 40 50 C 35 40, 25 35, 15 45" />
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.1 }} d="M 50 40 C 45 20, 35 15, 25 10" />
            
            {/* Right Branches */}
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.6 }} d="M 50 60 C 60 50, 70 40, 80 30" />
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.9 }} d="M 60 50 C 65 40, 75 35, 85 45" />
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1.2 }} d="M 50 40 C 55 20, 65 15, 75 10" />
          </g>

          {/* Nodes (Circles) */}
          <g fill="#06B6D4" filter="url(#glow)">
            {[
              {x: 50, y: 40}, {x: 20, y: 30}, {x: 15, y: 45},
              {x: 25, y: 10}, {x: 80, y: 30}, {x: 85, y: 45},
              {x: 75, y: 10}, {x: 40, y: 50}, {x: 60, y: 50},
              {x: 50, y: 60}
            ].map((node, i) => (
              <motion.circle 
                key={i}
                cx={node.x} cy={node.y} r="0.8"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
              />
            ))}
          </g>

          {/* Data Particles flowing along branches */}
          <g fill="#FFFFFF" filter="url(#glow)">
            {[
               { id: 1, path: "M 50 100 C 50 80, 50 60, 50 40", delay: 0 },
               { id: 2, path: "M 50 60 C 40 50, 30 40, 20 30", delay: 2 },
               { id: 3, path: "M 50 60 C 60 50, 70 40, 80 30", delay: 2.5 },
               { id: 4, path: "M 40 50 C 35 40, 25 35, 15 45", delay: 3.5 },
            ].map((particle) => (
              <motion.circle key={`particle-${particle.id}`} r="0.4">
                <animateMotion 
                  dur="4s" 
                  repeatCount="indefinite" 
                  path={particle.path}
                  begin={`${particle.delay}s`}
                />
              </motion.circle>
            ))}
          </g>
        </svg>
      </div>

      {/* Floating particles background effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`float-${i}`}
            className="absolute rounded-full bg-secondary/50 blur-[2px]"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
