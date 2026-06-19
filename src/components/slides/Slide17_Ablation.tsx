import { motion } from 'motion/react';
import { Layers, ArrowDownRight, Activity } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, useEffect } from 'react';

export function Slide17_Ablation() {
  const { t } = useLanguage();
  const st = t.slide17;

  const [activeState, setActiveState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveState((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Custom Vertical/Horizontal Bar Chart */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:w-1/2 w-full max-w-xl z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          17 / 17 · APPENDIX
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 text-center lg:text-left">
          {st.title}
        </h2>
        <p className="text-zinc-550 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6 text-center lg:text-left">
          {st.subtitle}
        </p>

        {/* Custom Bar Chart Card */}
        <div 
          className="border rounded-3xl p-6 shadow-inner flex flex-col gap-6"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            color: 'var(--text-color)'
          }}
        >
          <div className="flex justify-between items-center border-b border-zinc-200 dark:border-white/5 pb-4">
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Activity size={14} className="text-cyber-cyan" /> {st.descTitle}
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {st.data.map((item, idx) => {
              // Convert width percentage relative to max value (68.3%)
              const percentageWidth = `${(item.val / 68.3) * 100}%`;
              return (
                <div key={idx}>
                  <div className="flex justify-between items-center text-xs font-mono text-zinc-500 dark:text-zinc-455 mb-1.5">
                    <span className={`font-bold ${idx === 0 ? "text-cyber-cyan" : "text-zinc-800 dark:text-zinc-300"}`}>
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-900 dark:text-white font-extrabold">{item.val}%</span>
                      {item.diff && (
                        <span className="text-rose-500 flex items-center text-[10px] font-bold">
                          <ArrowDownRight size={10} /> {item.diff}%
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-900/60 rounded-full h-4 overflow-hidden p-0.5 border border-zinc-200 dark:border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: percentageWidth }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full ${idx === 0 ? "bg-cyber-cyan shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "bg-zinc-400 dark:bg-zinc-650"}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Right side: Detailed Analysis */}
      <div className="flex flex-col lg:w-1/2 w-full max-w-xl z-10 text-left">
        
        {/* Analysis Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border rounded-3xl p-6 shadow-inner flex flex-col h-full relative overflow-hidden group"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            color: 'var(--text-color)'
          }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-4">
            <Layers className="text-cyber-purple w-5 h-5" />
            <h4 className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              ABLATION ANALYSIS
            </h4>
          </div>

          <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-light first-letter:text-2xl first-letter:font-bold first-letter:text-cyber-cyan first-letter:mr-1">
            {st.desc}
          </p>

          {/* Ablation Study Dynamic Loop Visualizer */}
          <div className="mt-6 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/20 relative overflow-hidden flex flex-col items-center">
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Live Ablation Simulation</span>
            
            <div className="flex justify-between items-center w-full gap-4 relative py-2">
              {/* Modules column */}
              <div className="flex flex-col gap-3 z-10 w-[55%]">
                {/* Planner */}
                <div className={`p-2 rounded-xl border text-[10px] font-mono font-bold flex items-center justify-between transition-colors duration-300 ${
                  activeState === 1 
                    ? "bg-rose-500/10 border-rose-500/40 text-rose-500" 
                    : "bg-cyber-cyan/10 border-cyber-cyan/30 text-cyber-cyan"
                }`}>
                  <span>Planner</span>
                  <span>{activeState === 1 ? "Disabled (✕)" : "Active (✓)"}</span>
                </div>
                
                {/* Memory */}
                <div className={`p-2 rounded-xl border text-[10px] font-mono font-bold flex items-center justify-between transition-colors duration-300 ${
                  activeState === 2 
                    ? "bg-rose-500/10 border-rose-500/40 text-rose-500" 
                    : "bg-cyber-purple/10 border-cyber-purple/30 text-cyber-purple"
                }`}>
                  <span>Memory</span>
                  <span>{activeState === 2 ? "Disabled (✕)" : "Active (✓)"}</span>
                </div>

                {/* Retry Loop */}
                <div className={`p-2 rounded-xl border text-[10px] font-mono font-bold flex items-center justify-between transition-colors duration-300 ${
                  activeState === 3 
                    ? "bg-rose-500/10 border-rose-500/40 text-rose-500" 
                    : "bg-amber-500/10 border-amber-500/30 text-amber-500"
                }`}>
                  <span>Retry Loop</span>
                  <span>{activeState === 3 ? "Disabled (✕)" : "Active (✓)"}</span>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden sm:block" overflow="visible">
                {/* Line to Planner */}
                <motion.line
                  x1="55%" y1="20" x2="80%" y2="55"
                  stroke={activeState === 1 ? "#EF4444" : "#06B6D4"}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  animate={activeState === 1 ? {} : { strokeDashoffset: [0, -10] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  opacity={activeState === 1 ? 0.2 : 0.6}
                />
                {/* Line to Memory */}
                <motion.line
                  x1="55%" y1="55" x2="80%" y2="55"
                  stroke={activeState === 2 ? "#EF4444" : "#8B5CF6"}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  animate={activeState === 2 ? {} : { strokeDashoffset: [0, -10] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  opacity={activeState === 2 ? 0.2 : 0.6}
                />
                {/* Line to Retry */}
                <motion.line
                  x1="55%" y1="90" x2="80%" y2="55"
                  stroke={activeState === 3 ? "#EF4444" : "#F59E0B"}
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  animate={activeState === 3 ? {} : { strokeDashoffset: [0, -10] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  opacity={activeState === 3 ? 0.2 : 0.6}
                />
              </svg>

              {/* Accuracy Core */}
              <div className="flex flex-col items-center justify-center w-[35%] z-10">
                <motion.div 
                  animate={{ 
                    scale: activeState === 0 ? [1, 1.05, 1] : 1,
                    borderColor: 
                      activeState === 0 ? "rgba(16, 185, 129, 0.5)" :
                      activeState === 1 ? "rgba(239, 68, 68, 0.5)" :
                      "rgba(245, 158, 11, 0.5)"
                  }}
                  className={`w-16 h-16 rounded-full border-2 bg-white dark:bg-[#070708] flex flex-col items-center justify-center shadow-lg transition-colors duration-300`}
                >
                  <span className={`text-xs font-mono font-black transition-colors duration-300 ${
                    activeState === 0 ? "text-emerald-500" :
                    activeState === 1 ? "text-rose-500" :
                    "text-amber-500"
                  }`}>
                    {
                      activeState === 0 ? "68.3%" :
                      activeState === 1 ? "41.5%" :
                      activeState === 2 ? "52.0%" :
                      "55.7%"
                    }
                  </span>
                  <span className="text-[6px] font-mono uppercase tracking-widest text-zinc-500">Accuracy</span>
                </motion.div>
              </div>
            </div>
            
            <div className="text-[9px] font-mono text-zinc-500 mt-2 text-center h-4 flex items-center justify-center">
              {
                activeState === 0 ? "Full system performance is optimal at 68.3%" :
                activeState === 1 ? "Planner disabled: accuracy drops by 26.8%!" :
                activeState === 2 ? "Memory disabled: accuracy drops by 16.3%!" :
                "Retry loop disabled: accuracy drops by 12.6%!"
              }
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
