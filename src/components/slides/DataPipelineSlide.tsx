import { motion } from 'motion/react';
import { Cloud, TableProperties, DatabaseZap } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function DataPipelineSlide() {
  const { t } = useLanguage();

  return (
    <Slide className="gap-12 px-6 md:px-24 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center w-full max-w-4xl"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
          {t.pipeline.title}
        </h2>
        <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-12">
          {t.pipeline.subtitle}
        </p>
      </motion.div>

      <div className="relative w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 mt-8">
        
        {/* Animated Connecting Path Container */}
        <div className="absolute top-1/2 left-[10%] w-[80%] h-24 -translate-y-1/2 hidden md:block pointer-events-none z-0">
          <svg className="w-full h-full" overflow="visible">
             <defs>
              <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Base line */}
             <path
              d="M 0 48 L 800 48"
              fill="transparent"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
            />
            {/* Animated flowing line */}
            <motion.path
              d="M 0 48 L 800 48"
              fill="transparent"
              stroke="url(#flow-gradient)"
              strokeWidth="3"
              strokeDasharray="150 150"
              initial={{ strokeDashoffset: 300 }}
              animate={{ strokeDashoffset: -300 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0px 0px 8px rgba(139,92,246,0.8))" }}
            />
            {/* Data packets flowing */}
            {Array.from({ length: 3 }).map((_, i) => (
               <motion.circle
                  key={i}
                  cx="0"
                  cy="48"
                  r="4"
                  fill="#fff"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ 
                    x: [0, 800], 
                    opacity: [0, 1, 1, 0] 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 0.8
                  }}
                  style={{ filter: "drop-shadow(0px 0px 5px #fff)" }}
               />
            ))}
          </svg>
        </div>

        {/* Nodes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="z-10 bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl w-64 aspect-square flex flex-col items-center justify-center text-center shadow-lg relative group"
        >
          <div className="absolute inset-0 bg-cyber-cyan/0 group-hover:bg-cyber-cyan/5 transition-colors rounded-3xl" />
          <Cloud className="w-12 h-12 text-cyber-cyan mb-4 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
          <h3 className="text-lg font-display font-semibold text-white">{t.pipeline.nodes.cloud}</h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="z-10 bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl w-64 aspect-square flex flex-col items-center justify-center text-center shadow-lg relative group"
        >
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-3xl" />
          <TableProperties className="w-12 h-12 text-zinc-300 mb-4" />
          <h3 className="text-lg font-display font-semibold text-white">{t.pipeline.nodes.pandas}</h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
          className="z-10 bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-3xl w-64 aspect-square flex flex-col items-center justify-center text-center shadow-[0_0_50px_-15px_rgba(139,92,246,0.3)] relative group"
        >
          <div className="absolute inset-0 bg-cyber-purple/0 group-hover:bg-cyber-purple/5 transition-colors rounded-3xl" />
          <DatabaseZap className="w-12 h-12 text-cyber-purple mb-4 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
          <h3 className="text-lg font-display font-semibold text-white">{t.pipeline.nodes.duckdb}</h3>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-4xl mt-12 text-center"
      >
        <p className="text-zinc-400 leading-relaxed md:text-lg">
          {t.pipeline.desc}
        </p>
      </motion.div>
    </Slide>
  );
}
