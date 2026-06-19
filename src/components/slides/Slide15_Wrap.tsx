import { motion } from 'motion/react';
import { HelpCircle, ChevronDown, Award, RefreshCw, KeyRound } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';

export function Slide15_Wrap() {
  const { t } = useLanguage();
  const st = t.slide15;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const icons = [
    <Award className="w-5 h-5 text-cyber-cyan" />,
    <RefreshCw className="w-5 h-5 text-cyber-purple" />,
    <KeyRound className="w-5 h-5 text-amber-500" />
  ];

  const highlights = [
    "hover:border-cyber-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.01)]",
    "hover:border-cyber-purple/30 shadow-[0_0_20px_rgba(139,92,246,0.01)]",
    "hover:border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.01)]"
  ];

  const headerColors = [
    "bg-cyber-cyan/5 border-cyber-cyan/20 text-cyber-cyan",
    "bg-cyber-purple/5 border-cyber-purple/20 text-cyber-purple",
    "bg-amber-500/5 border-amber-500/20 text-amber-500"
  ];

  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Takeaways */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:w-1/2 w-full max-w-xl z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          15 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 text-center lg:text-left">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6 text-center lg:text-left">
          {st.subtitle}
        </p>

        {/* Takeaway Cards Stack */}
        <div className="flex flex-col gap-4">
          {st.takeaways.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ x: 4 }}
              className={`p-4 rounded-2xl border transition-all flex items-start gap-4 text-left ${highlights[idx]}`}
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
                color: 'var(--text-color)'
              }}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-xl border flex items-center justify-center ${headerColors[idx]}`}>
                {icons[idx]}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[9px] font-bold text-zinc-550 dark:text-zinc-500">
                    {item.num}
                  </span>
                  <h4 className="font-display font-bold text-zinc-900 dark:text-white text-xs md:text-sm tracking-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right side: Likely Questions (Stateful Accordion) */}
      <div className="flex flex-col lg:w-1/2 w-full max-w-xl z-10 text-left">
        <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-550 dark:text-zinc-400 uppercase mb-4 flex items-center gap-1.5 self-center lg:self-start">
          <HelpCircle size={14} className="text-cyber-cyan animate-pulse" /> {st.qaTitle}
        </h3>

        {/* Accordion container */}
        <div className="flex flex-col gap-3">
          {st.qa.map((qaItem, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen 
                    ? "shadow-[0_0_20px_rgba(6,182,212,0.05)]" 
                    : "hover:border-zinc-300 dark:hover:border-zinc-800"
                }`}
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: isOpen ? 'rgba(6,182,212,0.4)' : 'var(--card-border)',
                  color: 'var(--text-color)'
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 flex justify-between items-center text-left font-display font-bold text-zinc-900 dark:text-white text-xs md:text-sm tracking-tight focus:outline-none transition-colors group cursor-pointer"
                >
                  <span className="group-hover:text-cyber-cyan transition-colors pr-4">{qaItem.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 p-1 rounded-lg bg-white/[0.04] dark:bg-white/[0.02] border border-white/10 dark:border-white/5 ${isOpen ? "text-cyber-cyan" : "text-zinc-550 dark:text-zinc-500"}`}
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                </button>

                {/* Accordion Body */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div 
                    className="p-4 pt-0 text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-light border-t border-white/5 dark:border-zinc-800/10"
                    style={{ backgroundColor: 'var(--bg-color)' }}
                  >
                    {qaItem.a}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
