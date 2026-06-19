import { motion } from 'motion/react';
import { Target, TrendingUp, Award } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide9_Accuracy() {
  const { t } = useLanguage();
  const st = t.slide9;

  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Custom Horizontal Bar Chart */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:w-1/2 w-full max-w-xl z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          09 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 text-center lg:text-left">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6 text-center lg:text-left">
          {st.subtitle}
        </p>

        {/* Custom Bar Chart Card */}
        <div 
          className="border rounded-3xl p-6 shadow-inner flex flex-col gap-6"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          <span className="text-[10px] font-mono text-zinc-550 dark:text-zinc-500 uppercase tracking-wider leading-snug">
            📊 {st.chartTitle}
          </span>
          
          <div className="flex flex-col gap-5 mt-2">
            {/* Single Table Category */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5">
                <span className="font-bold text-zinc-900 dark:text-white uppercase">{st.chartData.labels[0]}</span>
                <span>Multi: 95% vs Single: 53%</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {/* Multi-Agent */}
                <div className="w-full bg-zinc-200 dark:bg-zinc-900/60 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-cyber-cyan h-full rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  />
                </div>
                {/* Single-Agent */}
                <div className="w-full bg-zinc-200 dark:bg-zinc-900/60 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "53%" }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="bg-zinc-400 dark:bg-zinc-650 h-full rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Join Category */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-zinc-550 dark:text-zinc-400 mb-1.5">
                <span className="font-bold text-zinc-900 dark:text-white uppercase">{st.chartData.labels[1]}</span>
                <span>Multi: 60% vs Single: 7%</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="w-full bg-zinc-200 dark:bg-zinc-900/60 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-cyber-cyan h-full rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  />
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-900/60 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "7%" }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="bg-zinc-400 dark:bg-zinc-650 h-full rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Anomaly Category */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono text-zinc-550 dark:text-zinc-400 mb-1.5">
                <span className="font-bold text-zinc-900 dark:text-white uppercase">{st.chartData.labels[2]}</span>
                <span>Multi: 40% vs Single: 0%</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="w-full bg-zinc-200 dark:bg-zinc-900/60 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-cyber-cyan h-full rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                  />
                </div>
                <div className="w-full bg-zinc-200 dark:bg-zinc-900/60 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "0%" }}
                    transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    className="bg-zinc-400 dark:bg-zinc-650 h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed mt-2 font-light border-t border-white/5 dark:border-zinc-800/10 pt-4">
            {st.chartDesc}
          </p>
        </div>
      </motion.div>

      {/* Right side: Confusion Matrix Dashboard */}
      <div className="flex flex-col lg:w-1/2 w-full max-w-xl z-10 text-left">
        
        {/* Confusion Matrix Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border rounded-3xl p-6 shadow-inner flex flex-col h-full relative overflow-hidden"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          {/* Loop Scanning Sweep Line */}
          <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-transparent via-cyber-purple to-transparent pointer-events-none z-10 animate-sweep opacity-50 dark:opacity-30" />

          <div className="flex items-center gap-2 mb-6">
            <Target className="text-cyber-purple w-5 h-5" />
            <h4 className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              CONFUSION MATRIX
            </h4>
          </div>

          {/* Matrix Header Badge */}
          <div className="px-4 py-2 border border-cyber-purple/35 bg-cyber-purple/5 rounded-xl flex justify-between items-center mb-6">
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <Award size={14} className="text-cyber-purple" />
              <span className="font-bold text-zinc-800 dark:text-white">{st.matrixTitle.split('.')[0]}.</span>
            </div>
            <span className="font-mono text-[10px] text-cyber-purple font-bold">
              {st.matrixTitle.split('.').slice(1).join('.').trim()}
            </span>
          </div>

          {/* Table Matrix */}
          <div className="flex flex-col w-full max-w-md mx-auto">
            {/* Column Headers */}
            <div className="grid grid-cols-3 text-center mb-2">
              <div />
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{st.matrixHeaders[0]}</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{st.matrixHeaders[1]}</div>
            </div>

            {/* Row 1: Actual Yes */}
            <div className="grid grid-cols-3 gap-2 items-center text-center mb-2">
              <div className="text-right text-[10px] font-mono text-zinc-550 dark:text-zinc-500 uppercase pr-3 font-bold">{st.matrixRows[0].label}</div>
              
              {/* Hit: 13 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex flex-col justify-center items-center shadow-[0_0_15px_rgba(16,185,129,0.05)]"
              >
                <span className="text-2xl font-display font-extrabold text-emerald-600 dark:text-emerald-400">
                  {st.matrixRows[0].values[0]}
                </span>
                <span className="text-[8px] font-mono text-emerald-500 tracking-widest mt-1">TRUE POSITIVE</span>
              </motion.div>

              {/* Miss: 2 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/5 flex flex-col justify-center items-center"
              >
                <span className="text-2xl font-display font-extrabold text-rose-500 dark:text-rose-400">
                  {st.matrixRows[0].values[1]}
                </span>
                <span className="text-[8px] font-mono text-rose-500 tracking-widest mt-1">FALSE NEGATIVE</span>
              </motion.div>
            </div>

            {/* Row 2: Actual No */}
            <div className="grid grid-cols-3 gap-2 items-center text-center">
              <div className="text-right text-[10px] font-mono text-zinc-550 dark:text-zinc-500 uppercase pr-3 font-bold">{st.matrixRows[1].label}</div>
              
              {/* False Alarm: 5 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/5 flex flex-col justify-center items-center"
              >
                <span className="text-2xl font-display font-extrabold text-rose-500 dark:text-rose-400">
                  {st.matrixRows[1].values[0]}
                </span>
                <span className="text-[8px] font-mono text-rose-500 tracking-widest mt-1">FALSE POSITIVE</span>
              </motion.div>

              {/* Correct Reject: 10 */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 flex flex-col justify-center items-center shadow-[0_0_15px_rgba(16,185,129,0.05)]"
              >
                <span className="text-2xl font-display font-extrabold text-emerald-600 dark:text-emerald-400">
                  {st.matrixRows[1].values[1]}
                </span>
                <span className="text-[8px] font-mono text-emerald-500 tracking-widest mt-1">TRUE NEGATIVE</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Slide>
  );
}
