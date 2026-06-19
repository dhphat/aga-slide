import { motion } from 'motion/react';
import { ClipboardList, Database, BarChart3, Lightbulb, RefreshCw } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide6_Agents() {
  const { t } = useLanguage();
  const st = t.slide6;

  const icons = [
    <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
      <ClipboardList className="w-8 h-8 text-cyber-cyan mb-3 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
    </motion.div>,
    <motion.div animate={{ scale: [1, 1.06, 1] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
      <Database className="w-8 h-8 text-cyber-purple mb-3 drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]" />
    </motion.div>,
    <motion.div animate={{ y: [0, -2, 0, 2, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
      <BarChart3 className="w-8 h-8 text-amber-500 mb-3 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]" />
    </motion.div>,
    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
      <Lightbulb className="w-8 h-8 text-emerald-400 mb-3 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]" />
    </motion.div>
  ];

  const colors = [
    "border-cyber-cyan/30 bg-cyber-cyan/10 text-cyan-900 dark:text-cyber-cyan dark:border-cyber-cyan/20 dark:bg-cyber-cyan/5",
    "border-cyber-purple/30 bg-cyber-purple/10 text-purple-900 dark:text-cyber-purple dark:border-cyber-purple/20 dark:bg-cyber-purple/5",
    "border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-400 dark:border-amber-500/20 dark:bg-amber-500/5",
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-400 dark:border-emerald-500/20 dark:bg-emerald-500/5"
  ];

  return (
    <Slide className="gap-8 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
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

      {/* SVG flow container for desktop */}
      <div className="relative w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 z-10">
        
        {/* Animated Connecting Line on Desktop */}
        <div className="absolute top-1/2 left-[12%] w-[76%] h-24 -translate-y-1/2 hidden lg:block pointer-events-none z-0">
          <svg className="w-full h-full" overflow="visible">
            <defs>
              <linearGradient id="flow-gradient-6" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="33%" stopColor="#8B5CF6" />
                <stop offset="66%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
            </defs>
            <path
              d="M 0 48 L 700 48"
              fill="transparent"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
            />
            <motion.path
              d="M 0 48 L 700 48"
              fill="transparent"
              stroke="url(#flow-gradient-6)"
              strokeWidth="3"
              strokeDasharray="100 150"
              initial={{ strokeDashoffset: 250 }}
              animate={{ strokeDashoffset: -250 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0px 0px 8px rgba(6,182,212,0.6))" }}
            />
          </svg>
        </div>

        {st.agents.map((agent, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: idx * 0.15 }}
            whileHover={{ y: -4 }}
            className="z-10 border backdrop-blur-xl p-6 rounded-3xl flex flex-col justify-between text-center relative group min-h-[300px] pb-6"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <div className="absolute inset-0 bg-white/[0.005] rounded-3xl pointer-events-none" />
            
            <div className="flex flex-col items-center">
              <div className="flex justify-between items-center w-full mb-4">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-900 text-zinc-550 dark:text-zinc-500">
                  AGENT 0{agent.num}
                </span>
              </div>
              
              <div className="p-3 rounded-2xl bg-white/[0.04] dark:bg-white/[0.02] border border-white/10 dark:border-white/5 mb-2 group-hover:bg-white/[0.08] dark:group-hover:bg-white/[0.04] transition-colors">
                {icons[idx]}
              </div>
              
              <h3 className="text-base md:text-lg font-display font-bold text-zinc-900 dark:text-white group-hover:text-cyber-cyan transition-colors">
                {agent.name}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-2 leading-relaxed font-light line-clamp-3">
                {agent.desc}
              </p>
            </div>
            
            <div className={`mt-4 py-1.5 px-3 rounded-lg border text-[9px] md:text-[10px] font-mono font-bold tracking-wider uppercase ${colors[idx]}`}>
              {agent.contract}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Failback message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-5xl mt-6 p-4 rounded-xl flex flex-col md:flex-row items-center gap-4 text-center md:text-left z-10 border"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--card-border)',
          color: 'var(--text-color)'
        }}
      >
        <div className="p-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-lg animate-spin" style={{ animationDuration: '4s' }}>
          <RefreshCw className="w-5 h-5 text-cyber-purple" />
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs md:text-sm font-light">
          <span className="text-cyber-purple font-bold">REPLANNING WATCHDOG: </span>
          {st.bottom}
        </p>
      </motion.div>
    </Slide>
  );
}
