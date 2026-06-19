import { motion } from 'motion/react';
import { HelpCircle, FileText, CheckCircle, Monitor, Shield, Sparkles, Database } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide12_Runtime() {
  const { t } = useLanguage();
  const st = t.slide12;

  const icons = [
    <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
      <HelpCircle className="w-8 h-8 text-sky-400" />
    </motion.div>,
    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
      <FileText className="w-8 h-8 text-amber-500" />
    </motion.div>,
    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
      <CheckCircle className="w-8 h-8 text-emerald-400" />
    </motion.div>
  ];

  const highlights = [
    "hover:border-sky-500/30 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]",
    "hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
  ];

  const timelineColors = [
    "text-sky-400 border-sky-500/20 bg-sky-500/5",
    "text-amber-500 border-amber-500/20 bg-amber-500/5",
    "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
  ];

  return (
    <Slide className="gap-8 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center w-full max-w-4xl"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/35 px-3 py-1 rounded-full mb-4 inline-block">
          12 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mt-2">
          {st.subtitle}
        </p>
      </motion.div>

      {/* Metadata tags */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 w-full max-w-4xl font-mono text-[9px] sm:text-xs text-zinc-800 dark:text-zinc-300 font-semibold"
      >
        <span className="px-3 py-1 bg-white/85 dark:bg-zinc-900/30 border border-zinc-300/80 dark:border-zinc-800 rounded-full flex items-center gap-1.5 shadow-sm"><Sparkles size={12} className="text-cyber-cyan" /> {st.meta.model}</span>
        <span className="px-3 py-1 bg-white/85 dark:bg-zinc-900/30 border border-zinc-300/80 dark:border-zinc-800 rounded-full flex items-center gap-1.5 shadow-sm"><Monitor size={12} className="text-cyber-purple" /> {st.meta.env}</span>
        <span className="px-3 py-1 bg-white/85 dark:bg-zinc-900/30 border border-zinc-300/80 dark:border-zinc-800 rounded-full flex items-center gap-1.5 shadow-sm"><Shield size={12} className="text-amber-500" /> {st.meta.device}</span>
        <span className="px-3 py-1 bg-white/85 dark:bg-zinc-900/30 border border-zinc-300/80 dark:border-zinc-800 rounded-full flex items-center gap-1.5 shadow-sm"><Database size={12} className="text-emerald-400" /> {st.meta.dataset}</span>
      </motion.div>

      {/* Horizontal timeline */}
      <div className="relative w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 z-10">
        {/* Connecting timeline path */}
        <div className="absolute top-[35%] left-[10%] w-[80%] h-1 bg-zinc-200 dark:bg-white/5 hidden md:block z-0 pointer-events-none">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-sky-400 via-amber-500 to-emerald-400"
          />
        </div>

        {st.timeline.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ y: -4 }}
            className={`z-10 border backdrop-blur-xl p-6 rounded-3xl flex flex-col justify-between min-h-[300px] pb-6 transition-all group text-left ${highlights[idx]}`}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <div className="absolute inset-0 bg-white/[0.005] rounded-3xl pointer-events-none" />
            
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-xs font-bold text-zinc-500">STAGE 0{step.step}</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${timelineColors[idx]}`}>{step.time}</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-white/[0.04] dark:bg-white/[0.02] border border-white/10 dark:border-white/5">
                  {icons[idx]}
                </div>
                <h3 className="font-display font-bold text-zinc-900 dark:text-white text-base md:text-lg">
                  {step.title}
                </h3>
              </div>

              <p className="text-zinc-650 dark:text-zinc-400 text-xs leading-relaxed font-light line-clamp-4">
                {step.desc}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/10 text-[9px] font-mono text-zinc-500">
              {step.range}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total time summary footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.01 }}
        className="w-full max-w-5xl mt-2 p-5 rounded-2xl border text-center relative overflow-hidden group shadow-[0_0_30px_rgba(139,92,246,0.1)]"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--card-border)',
          color: 'var(--text-color)'
        }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/10 rounded-full blur-3xl pointer-events-none" />
        <p className="font-display font-medium text-sm md:text-base text-zinc-700 dark:text-zinc-300">
          ⏱️ {st.footer} 
          <span className="text-cyber-purple font-extrabold text-lg md:text-xl ml-2 group-hover:text-cyber-cyan transition-colors">{st.footerValue}</span>
          <span className="text-[10px] font-mono text-zinc-550 dark:text-zinc-500 uppercase tracking-widest ml-3 border-l border-zinc-200 dark:border-white/10 pl-3">{st.footerDesc}</span>
        </p>
      </motion.div>
    </Slide>
  );
}
