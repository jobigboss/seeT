"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with multiple gradient orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-dark-navy/60 backdrop-blur-2xl border border-white/10 p-12 md:p-20 rounded-3xl text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden"
        >
          {/* subtle inner pattern or glow could be here */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Turn Your Data Into <span className="text-gradient hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">Intelligence.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the most innovative companies building their data infrastructure on See Tree. Try it free today.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button size="lg" className="w-full sm:w-auto px-10 rounded-full">
              Start With See Tree
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
