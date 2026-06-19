import { motion } from 'motion/react';
import { Database, GitBranch, FileCode, FileImage, AlertTriangle } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide2_Problem() {
  const { t } = useLanguage();
  const st = t.slide2;

  const icons = [
    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
      <Database className="w-8 h-8 text-cyber-cyan mb-4" />
    </motion.div>,
    <motion.div animate={{ rotate: [-6, 6, -6] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
      <GitBranch className="w-8 h-8 text-cyber-purple mb-4" />
    </motion.div>,
    <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
      <FileCode className="w-8 h-8 text-amber-500 mb-4" />
    </motion.div>,
    <motion.div animate={{ x: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}>
      <FileImage className="w-8 h-8 text-rose-500 mb-4" />
    </motion.div>
  ];

  return (
    <Slide className="gap-8 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center w-full max-w-4xl"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white flex justify-center items-center gap-3">
          <AlertTriangle className="text-red-500 w-8 h-8 md:w-12 md:h-12 animate-pulse" />
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mt-2">
          {st.subtitle}
        </p>
      </motion.div>

      {/* Grid of 4 challenges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-4">
        {st.points.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-2xl border transition-all flex gap-5 shadow-lg group relative overflow-hidden text-left"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
            <div className="flex-shrink-0 flex items-center justify-center p-3 rounded-xl bg-white/[0.04] dark:bg-white/[0.02] border border-white/10 dark:border-white/5 group-hover:bg-white/[0.08] dark:group-hover:bg-white/[0.04] transition-colors">
              {icons[idx]}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover:text-cyber-cyan transition-colors">
                  {p.num}
                </span>
                <h3 className="font-display font-bold text-zinc-900 dark:text-white text-base md:text-lg">
                  {p.title}
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom neon callout question */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-5xl mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center relative overflow-hidden group shadow-[0_0_30px_rgba(16,185,129,0.1)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 group-hover:translate-x-full duration-1000 transition-transform pointer-events-none" />
        <p className="text-emerald-800 dark:text-emerald-400 font-display font-semibold text-sm md:text-lg tracking-wide uppercase">
          💡 {st.question}
        </p>
      </motion.div>
    </Slide>
  );
}
