import { motion } from 'motion/react';
import { AlertOctagon, Rocket, ChevronRight, AlertTriangle } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide13_Edges() {
  const { t } = useLanguage();
  const st = t.slide13;

  return (
    <Slide className="gap-8 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center w-full max-w-4xl"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-rose-500 bg-rose-500/10 border border-rose-500/30 px-3 py-1 rounded-full mb-4 inline-block">
          13 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1 flex justify-center items-center gap-2">
          <AlertTriangle className="text-amber-500 w-6 h-6 md:w-10 md:h-10 animate-pulse" />
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mt-2">
          {st.subtitle}
        </p>
      </motion.div>

      {/* Intro text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm max-w-3xl text-center leading-relaxed font-light"
      >
        {st.desc}
      </motion.p>

      {/* Two columns split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mt-4 z-10">
        
        {/* Unsolved Yet: Red/Gold vibe */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl border transition-all shadow-[0_0_30px_rgba(244,63,94,0.01)] flex flex-col gap-6 text-left"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            color: 'var(--text-color)'
          }}
        >
          <div className="flex items-center gap-3 border-b border-rose-500/10 dark:border-zinc-800/10 pb-4">
            <div className="p-2 bg-rose-500/10 border border-rose-500/20 rounded-xl">
              <motion.div animate={{ scale: [1, 1.1, 1], rotate: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                <AlertOctagon className="w-5 h-5 text-rose-400" />
              </motion.div>
            </div>
            <h3 className="font-display font-bold text-zinc-900 dark:text-white text-base md:text-lg">
              {st.unsolvedTitle}
            </h3>
          </div>

          <ul className="flex flex-col gap-4">
            {st.unsolved.map((item, idx) => (
              <li key={idx} className="flex gap-2 text-xs md:text-sm text-zinc-850 dark:text-zinc-400 leading-relaxed font-light">
                <span className="text-rose-500 flex-shrink-0 mt-1 font-bold">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* What comes next: Cyan/Emerald vibe */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl border transition-all shadow-[0_0_30px_rgba(6,182,212,0.01)] flex flex-col gap-6 text-left"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            color: 'var(--text-color)'
          }}
        >
          <div className="flex items-center gap-3 border-b border-cyber-cyan/10 dark:border-zinc-800/10 pb-4">
            <div className="p-2 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-xl">
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
                <Rocket className="w-5 h-5 text-cyber-cyan" />
              </motion.div>
            </div>
            <h3 className="font-display font-bold text-zinc-900 dark:text-white text-base md:text-lg">
              {st.nextTitle}
            </h3>
          </div>

          <ul className="flex flex-col gap-4">
            {st.next.map((item, idx) => (
              <li key={idx} className="flex gap-2 text-xs md:text-sm text-zinc-850 dark:text-zinc-400 leading-relaxed font-light">
                <ChevronRight className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </Slide>
  );
}
