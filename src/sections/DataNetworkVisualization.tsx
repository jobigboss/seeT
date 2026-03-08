"use client";

import { motion } from "framer-motion";

export function DataNetworkVisualization() {
  return (
    <section className="py-24 bg-dark-navy relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative aspect-square max-h-[600px] w-full"
          >
            {/* Pulsing background glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-accent/20 rounded-full blur-[100px]"
            />
            
            {/* The SVG Network */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
              <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Connecting lines */}
              <g stroke="#38BDF8" strokeWidth="0.5" strokeOpacity="0.4">
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} x1="50" y1="50" x2="20" y2="30" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} x1="50" y1="50" x2="80" y2="30" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} x1="50" y1="50" x2="20" y2="70" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5 }} x1="50" y1="50" x2="80" y2="70" />
                
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} x1="20" y1="30" x2="10" y2="15" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} x1="20" y1="30" x2="35" y2="10" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} x1="80" y1="30" x2="90" y2="15" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} x1="80" y1="70" x2="90" y2="85" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} x1="20" y1="70" x2="10" y2="85" />
                <motion.line initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} x1="80" y1="70" x2="65" y2="90" />
              </g>

              {/* Center Node */}
              <motion.circle 
                cx="50" cy="50" r="5" 
                fill="#1E3A8A" stroke="#06B6D4" strokeWidth="1" filter="url(#neon-glow)"
                animate={{ r: [4.5, 5.5, 4.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Data Packets flowing */}
              <g fill="#FFFFFF">
                {[
                  { start: "50,50", end: "20,30", delay: 0 },
                  { start: "50,50", end: "80,30", delay: 1 },
                  { start: "50,50", end: "80,70", delay: 2 },
                  { start: "50,50", end: "20,70", delay: 0.5 },
                  { start: "20,30", end: "10,15", delay: 1.5 },
                  { start: "80,30", end: "90,15", delay: 2.5 },
                ].map((packet, i) => (
                  <motion.circle key={i} r="0.8" filter="url(#neon-glow)">
                    <animateMotion
                      dur="2s"
                      repeatCount="indefinite"
                      path={`M ${packet.start} L ${packet.end}`}
                      begin={`${packet.delay}s`}
                    />
                  </motion.circle>
                ))}
              </g>

              {/* Peripheral Nodes */}
              {[
                {x: 20, y: 30}, {x: 80, y: 30}, {x: 20, y: 70}, {x: 80, y: 70},
                {x: 10, y: 15}, {x: 35, y: 10}, {x: 90, y: 15}, {x: 90, y: 85}, 
                {x: 10, y: 85}, {x: 65, y: 90}
              ].map((node, i) => (
                <motion.circle 
                  key={`node-${i}`}
                  cx={node.x} cy={node.y} r={i < 4 ? "3" : "1.5"}
                  fill="#0A0F1C" stroke="#38BDF8" strokeWidth={i < 4 ? "0.8" : "0.5"}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.5, fill: "#06B6D4" }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  className="cursor-pointer"
                />
              ))}
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Live Data Network</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Watch as See Tree instantly processes complex data streams into unified intelligence. The platform visually maps relationships to identify bottlenecks and unlock hidden value across your organization.
            </p>
            
            <ul className="space-y-4">
              {[
                "Visualize structured and unstructured data flows.",
                "Identify real-time analytics opportunities instantly.",
                "Map dependencies to build fault-tolerant pipelines.",
                "Trace AI inference predictions to root data sources."
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
