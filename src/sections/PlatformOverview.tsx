"use client";

import { motion } from "framer-motion";
import { Workflow, Zap, Network, Brain, LayoutDashboard, CodeSquare } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
  { icon: Network, title: "Data Integration", desc: "Connect all your data sources effortlessly." },
  { icon: Workflow, title: "Data Pipeline Automation", desc: "Automate complex data transformations." },
  { icon: Zap, title: "Real Time Analytics", desc: "Analyze streaming data in milliseconds." },
  { icon: Brain, title: "AI Insight Engine", desc: "Generate predictive insights automatically." },
  { icon: LayoutDashboard, title: "Visualization Dashboard", desc: "Build interactive reports for stakeholders." },
  { icon: CodeSquare, title: "API Integration", desc: "Embed insights directly into your apps." },
];

export function PlatformOverview() {
  return (
    <section id="platform" className="py-24 relative bg-black/20">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">See Tree Platform</h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Our unified platform combines data engineering, analytics, and artificial intelligence into a single intuitive interface. Break down silos and turn raw data into a structured tree of knowledge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <feature.icon className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl transform rotate-3" />
            <Card className="relative p-2 bg-[#0A0F1C]/90 border-white/10 shadow-2xl overflow-hidden aspect-[4/3]">
              {/* Mock UI Dashboard Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="w-32 h-2 bg-white/10 rounded-full" />
              </div>
              
              {/* Mock UI Grid */}
              <div className="px-4 grid grid-cols-3 gap-4 h-[calc(100%-4rem)]">
                <div className="col-span-2 space-y-4">
                  <div className="h-32 bg-white/5 rounded-xl border border-white/5 p-4 relative overflow-hidden">
                    <div className="w-24 h-4 bg-white/10 rounded mb-4" />
                    {/* Mock Graph */}
                    <svg className="w-full h-16 text-accent" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M0 30 Q 10 20 20 25 T 40 15 T 60 20 T 80 5 T 100 10 L 100 30 Z" fill="currentColor" fillOpacity="0.2" />
                      <path d="M0 30 Q 10 20 20 25 T 40 15 T 60 20 T 80 5 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="grid grid-cols-2 gap-4 h-[calc(100%-9rem)]">
                    <div className="bg-white/5 rounded-xl border border-white/5" />
                    <div className="bg-white/5 rounded-xl border border-white/5" />
                  </div>
                </div>
                <div className="col-span-1 space-y-4">
                  <div className="h-20 bg-primary/20 rounded-xl border border-primary/30 p-3">
                    <div className="w-16 h-3 bg-white/20 rounded mb-2" />
                    <div className="w-full h-8 bg-white/10 rounded" />
                  </div>
                  <div className="h-40 bg-white/5 rounded-xl border border-white/5 px-3 py-4 flex flex-col gap-3">
                    <div className="w-20 h-3 bg-white/10 rounded mb-1" />
                    <div className="flex gap-2 items-center"><div className="w-4 h-4 rounded-full bg-accent/50" /><div className="w-full h-2 bg-white/10 rounded" /></div>
                    <div className="flex gap-2 items-center"><div className="w-4 h-4 rounded-full bg-secondary/50" /><div className="w-full h-2 bg-white/10 rounded" /></div>
                    <div className="flex gap-2 items-center"><div className="w-4 h-4 rounded-full bg-primary/50" /><div className="w-full h-2 bg-white/10 rounded" /></div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
