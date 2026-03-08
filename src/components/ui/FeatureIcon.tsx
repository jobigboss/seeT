"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureIconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
}

export function FeatureIcon({ icon: Icon, className, size = 24 }: FeatureIconProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={cn(
        "relative flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 border border-primary/30",
        className
      )}
    >
      <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl" />
      <Icon size={size} className="text-accent relative z-10" />
    </motion.div>
  );
}
