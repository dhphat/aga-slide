import { motion } from 'motion/react';
import { Layers, Eye, Compass, Info, XCircle } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide4_PriorArt() {
  const { t } = useLanguage();
  const st = t.slide4;

  const icons = [
    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
      <Eye className="w-5 h-5 text-sky-400" />
    </motion.div>,
    <motion.div animate={{ rotate: [-20, 20, -20] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
      <Compass className="w-5 h-5 text-indigo-400" />
    </motion.div>,
    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
      <Layers className="w-5 h-5 text-amber-400" />
    </motion.div>,
    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
      <Info className="w-5 h-5 text-rose-400" />
    </motion.div>
  ];

  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Header, Intro, and Conclusion */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col max-w-xl lg:w-2/5 text-center lg:text-left z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          04 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6">
          {st.subtitle}
        </p>
        <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
          {st.intro}
        </p>

        {/* Intersection Conclusion */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl bg-cyber-cyan/5 border border-cyber-cyan/30 shadow-[0_0_40px_rgba(6,182,212,0.08)] relative overflow-hidden group text-center lg:text-left"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-cyan/10 rounded-full blur-2xl pointer-events-none" />
          <h4 className="font-display font-black text-sm md:text-base text-cyber-cyan tracking-wider uppercase leading-snug">
            {st.conclusion}
          </h4>
        </motion.div>
      </motion.div>

      {/* Right side: 4 items vertical list */}
      <div className="flex flex-col gap-4 w-full lg:w-3/5 max-w-2xl z-10">
        {st.items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ x: 6 }}
            className="p-5 rounded-2xl border transition-all flex items-start gap-4 shadow-md relative overflow-hidden group text-left"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <div className="flex-shrink-0 p-2.5 rounded-xl bg-white/[0.04] dark:bg-white/[0.02] border border-white/10 dark:border-white/5 mt-1">
              {icons[idx]}
            </div>
            <div className="flex-grow">
              <h3 className="font-display font-bold text-zinc-900 dark:text-white text-sm md:text-base mb-1 tracking-tight group-hover:text-cyber-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed mb-2 font-light">
                {item.desc}
              </p>
              
              {/* Missing piece highlight */}
              <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400 text-xs font-mono font-medium bg-rose-500/10 dark:bg-rose-500/5 border border-rose-500/30 dark:border-rose-500/20 py-1 px-3 rounded-lg w-fit">
                <XCircle size={12} className="text-rose-600 dark:text-rose-500 flex-shrink-0" />
                <span>{item.missing}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
