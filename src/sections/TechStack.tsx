"use client";

import { motion } from "framer-motion";
import { Cloud, Cpu, DatabaseZap, GitMerge, FastForward, Server } from "lucide-react";

const technologies = [
  { name: "Cloud Infrastructure", icon: Cloud },
  { name: "Artificial Intelligence", icon: Cpu },
  { name: "Machine Learning", icon: Server },
  { name: "Big Data Storage", icon: DatabaseZap },
  { name: "Data Processing pipeline", icon: GitMerge },
  { name: "Real-Time Streaming", icon: FastForward },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for the Future</h2>
          <p className="text-gray-400 text-lg">
            See Tree leverages cutting-edge technology to process massive datasets in milliseconds.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/10 transition-all group"
            >
              {/* Glowing Icon Container */}
              <div className="relative mb-4 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-accent/30 transition-colors" />
                <tech.icon className="w-8 h-8 text-secondary group-hover:text-accent relative z-10 transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white text-center transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
