"use client";

import { motion } from "framer-motion";
import { Container } from "lucide-react"; // Wait, replace with icons below
import { Database, LineChart, BrainCircuit } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { FeatureIcon } from "@/components/ui/FeatureIcon";

const services = [
  {
    title: "Data Engineering",
    description: "Build reliable pipelines and modern data infrastructure.",
    icon: Database,
  },
  {
    title: "Data Analytics",
    description: "Unlock insights from your business data.",
    icon: LineChart,
  },
  {
    title: "AI & Machine Learning",
    description: "Predict outcomes with intelligent models.",
    icon: BrainCircuit,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ServicesSection() {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Intelligent Solutions</h2>
          <p className="text-gray-400 text-lg">
            Empower your organization with modern data infrastructure and AI capabilities.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full flex flex-col items-center text-center group cursor-pointer">
                <FeatureIcon icon={service.icon} className="mb-6 scale-125" />
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
