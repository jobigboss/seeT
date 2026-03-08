"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { CircleDollarSign, ShoppingCart, Activity, Brain } from "lucide-react";

const useCases = [
  {
    icon: CircleDollarSign,
    title: "Finance Analytics",
    desc: "Detect fraud instantly and automate financial reporting.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: ShoppingCart,
    title: "Retail Intelligence",
    desc: "Predict customer churn and optimize supply chains.",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    icon: Activity,
    title: "Operational Monitoring",
    desc: "Prevent downtime with AI-driven anomaly detection.",
    color: "from-teal-500/20 to-emerald-500/20"
  },
  {
    icon: Brain,
    title: "AI Forecasting",
    desc: "Forecast market trends using predictive machine learning.",
    color: "from-cyan-500/20 to-indigo-500/20"
  }
];

export function UseCases() {
  return (
    <section id="resources" className="py-24 bg-[#0A0F1C]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Proven Use Cases</h2>
          <p className="text-gray-400 text-lg">
            See how See Tree powers insights across every industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card glass={false} className="h-full group hover:border-primary/50 relative overflow-hidden transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                    <useCase.icon className="w-8 h-8 text-secondary group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{useCase.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
