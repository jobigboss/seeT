"use client";

import { motion } from "framer-motion";
import { Database, Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  { icon: Database, label: "Data Intelligence" },
  { icon: Zap, label: "Real Time Analytics" },
  { icon: BarChart3, label: "AI Driven Insights" },
  { icon: Shield, label: "Scalable Data Platform" },
];

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 group cursor-default"
            >
              <feature.icon className="text-secondary group-hover:text-accent transition-colors" size={24} />
              <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
