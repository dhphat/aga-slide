import { motion } from 'motion/react';
import { MessageSquareCode, Network, BrainCircuit, ShieldAlert } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide3_Claims() {
  const { t } = useLanguage();
  const st = t.slide3;

  const icons = [
    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
      <MessageSquareCode className="w-10 h-10 text-cyber-cyan mb-4 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
    </motion.div>,
    <motion.div animate={{ rotate: [0, 360] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
      <Network className="w-10 h-10 text-cyber-purple mb-4 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]" />
    </motion.div>,
    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
      <BrainCircuit className="w-10 h-10 text-amber-500 mb-4 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]" />
    </motion.div>
  ];

  const borders = [
    "hover:border-cyber-cyan/30 shadow-[0_0_30px_rgba(6,182,212,0.02)]",
    "hover:border-cyber-purple/30 shadow-[0_0_30px_rgba(139,92,246,0.02)]",
    "hover:border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.02)]"
  ];

  return (
    <Slide className="gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center w-full max-w-4xl"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mt-2">
          {st.subtitle}
        </p>
      </motion.div>

      {/* 3 Column Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-4">
        {st.claims.map((claim, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 80 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`p-8 rounded-3xl border backdrop-blur-md flex flex-col justify-between h-full transition-all group ${borders[idx]}`}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-white/[0.04] dark:bg-white/[0.02] border border-white/10 dark:border-white/5 group-hover:bg-white/[0.08] dark:group-hover:bg-white/[0.04] transition-colors mb-6">
                  {icons[idx]}
                </div>
                <span className="font-display text-4xl font-extrabold text-zinc-900/10 dark:text-white/5 group-hover:text-zinc-900/20 dark:group-hover:text-white/10 transition-colors">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
                {claim.title}
              </h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                {claim.desc}
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-500 group-hover:text-zinc-400 dark:group-hover:text-zinc-300 transition-colors">
              <ShieldAlert size={14} className="opacity-60" />
              <span>GUARANTEED CONTRACT</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
