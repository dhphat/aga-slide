import { motion } from 'motion/react';
import { Database, LineChart, Lightbulb, Sparkles } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function ArchitectureSlide() {
  const { t } = useLanguage();

  return (
    <Slide className="justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center mb-16 md:mb-24 relative z-10 w-full max-w-4xl px-4"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          {t.orchestration.title}
        </h2>
        <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
          {t.orchestration.subtitle}
        </p>
      </motion.div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
        
        {/* Orbital System */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          
          {/* Orbital Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] rounded-full border border-white/10 border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px] rounded-full border border-cyber-cyan/20 border-dotted opacity-50"
          />

          {/* Core LLM */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 40px rgba(139,92,246,0.4)", "0px 0px 80px rgba(139,92,246,0.8)", "0px 0px 40px rgba(139,92,246,0.4)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-32 h-32 bg-cyber-purple/20 border border-cyber-purple/50 backdrop-blur-xl rounded-full flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(139,92,246,0.5)]"
          >
            <Sparkles className="w-8 h-8 text-white mb-2" />
            <span className="text-xs font-mono font-bold text-white tracking-widest uppercase">{t.orchestration.core}</span>
          </motion.div>

          {/* Orbiting Nodes */}
          {/* SQL Node */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px]"
          >
            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-28 h-28 p-3 bg-zinc-900 border border-white/20 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg gap-2"
              >
                <Database className="w-6 h-6 text-cyber-cyan" />
                <span className="text-[11px] font-mono text-zinc-300 break-words whitespace-pre-wrap">{t.orchestration.agents.sql}</span>
              </motion.div>
            </div>
          </motion.div>

           {/* Viz Node */}
           <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[380px] h-[380px]"
          >
            <div className="absolute top-3/4 -right-10">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="w-28 h-28 p-3 bg-zinc-900 border border-white/20 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg gap-2"
              >
                <LineChart className="w-6 h-6 text-cyber-orange" />
                <span className="text-[11px] font-mono text-zinc-300 break-words whitespace-pre-wrap">{t.orchestration.agents.viz}</span>
              </motion.div>
            </div>
          </motion.div>

           {/* Insight Node */}
           <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px]"
          >
            <div className="absolute bottom-0 -left-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="w-28 h-28 p-3 bg-zinc-900 border border-white/20 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg gap-2"
              >
                <Lightbulb className="w-6 h-6 text-yellow-400" />
                <span className="text-[11px] font-mono text-zinc-300 break-words whitespace-pre-wrap">{t.orchestration.agents.insight}</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Text Details */}
        <div className="max-w-md bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 rounded-3xl relative overflow-hidden group mt-12 md:mt-0 z-10">
           <div className="absolute inset-0 bg-cyber-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full text-xs font-mono text-cyber-cyan mb-6">
              <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
              {t.orchestration.fallbackText}
           </div>
           <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
             {t.orchestration.fallbackDesc}
           </p>
        </div>

      </div>
    </Slide>
  );
}
