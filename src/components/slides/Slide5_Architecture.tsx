import { motion } from 'motion/react';
import { Monitor, ShieldCheck, Cpu, Wrench, Database, HelpCircle } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide5_Architecture() {
  const { t } = useLanguage();
  const st = t.slide5;

  const icons = [
    <motion.div animate={{ opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
      <Monitor className="w-5 h-5 text-pink-400" />
    </motion.div>,
    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
      <ShieldCheck className="w-5 h-5 text-emerald-400" />
    </motion.div>,
    <motion.div animate={{ scale: [0.95, 1.05, 0.95] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
      <Cpu className="w-5 h-5 text-cyber-purple" />
    </motion.div>,
    <motion.div animate={{ rotate: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}>
      <Wrench className="w-5 h-5 text-cyber-cyan" />
    </motion.div>,
    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
      <Database className="w-5 h-5 text-amber-400" />
    </motion.div>
  ];

  const glows = [
    "hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
    "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    "hover:border-cyber-purple/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    "hover:border-cyber-cyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    "hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
  ];

  const badgeColors = [
    "text-pink-400 bg-pink-500/10 border-pink-500/30",
    "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    "text-cyber-purple bg-cyber-purple/10 border-cyber-purple/30",
    "text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30",
    "text-amber-400 bg-amber-500/10 border-amber-500/30"
  ];

  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Context details */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col max-w-xl lg:w-2/5 text-center lg:text-left z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          05 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6">
          {st.subtitle}
        </p>
        <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
          {st.desc}
        </p>

        {/* Why card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-2xl border shadow-md relative overflow-hidden text-center lg:text-left"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            color: 'var(--text-color)'
          }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />
          <p className="font-mono text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <span className="text-cyber-cyan font-bold block mb-2">📌 {st.why.split(":")[0]}:</span>
            {st.why.split(":")[1]}
          </p>
        </motion.div>
      </motion.div>

      {/* Right side: 5 layers vertical stack */}
      <div className="flex flex-col gap-3 w-full lg:w-3/5 max-w-2xl z-10">
        {st.layers.map((layer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-xl border transition-all flex items-center gap-4 shadow-sm relative overflow-hidden group text-left ${glows[idx]}`}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <div className={`flex-shrink-0 p-2.5 rounded-lg border flex items-center justify-center ${badgeColors[idx]}`}>
              {icons[idx]}
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-500">
                  {layer.num}
                </span>
                <h3 className="font-display font-bold text-zinc-900 dark:text-white text-xs md:text-sm tracking-wide">
                  {layer.name}
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-[11px] md:text-xs leading-relaxed font-light">
                {layer.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
