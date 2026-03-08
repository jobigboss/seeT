import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glass?: boolean;
}

export function Card({ children, className, glass = true, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        glass ? "glass hover:bg-white/5 hover:border-white/20" : "bg-dark-navy border border-white/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
