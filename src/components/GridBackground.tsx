import { motion } from 'motion/react';
import React from 'react';

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-cyber-bg overflow-hidden">
      {/* Infinite Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-cyber-purple/10 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 80, -80, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] bg-cyber-cyan/10 rounded-full blur-[120px]"
      />

      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255, 1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255, 1) 1px, transparent 1px)
          `,
          backgroundSize: '3rem 3rem',
        }}
      />
      {/* Deep vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_90%)]" />
    </div>
  );
}
