import { motion } from 'motion/react';
import { Award, Clock, ArrowRightLeft } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide10_Comparison() {
  const { t } = useLanguage();
  const st = t.slide10;

  // Let's model latency stages
  const latencyStages = [
    { label: "PLAN", val: "4.0 s", percent: "32%", color: "bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.4)]" },
    { label: "SQL", val: "5.0 s", percent: "40%", color: "bg-cyber-purple shadow-[0_0_10px_rgba(139,92,246,0.4)]" },
    { label: "CHART", val: "2.0 s", percent: "16%", color: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]" },
    { label: "INSIGHT", val: "1.4 s", percent: "12%", color: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.4)]" }
  ];

  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Latency visualization */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:w-1/2 w-full max-w-xl z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          10 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 text-center lg:text-left">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-8 text-center lg:text-left">
          {st.subtitle}
        </p>

        {/* Sequencing Tax Card */}
        <div 
          className="border rounded-3xl p-6 shadow-inner flex flex-col gap-6"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          <div className="flex justify-between items-center border-b border-white/5 dark:border-zinc-800/10 pb-4">
            <span className="text-[10px] font-mono text-zinc-550 dark:text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
              <Clock size={14} className="text-cyber-cyan" /> {st.chartTitle.split('-')[0].trim()}
            </span>
            <span className="text-[10px] font-mono text-cyber-cyan font-bold">12.4 s vs 2.6 s</span>
          </div>

          <div className="flex flex-col gap-5">
            {/* Multi-Agent Latency Details */}
            <div>
              <span className="text-[10px] font-mono text-zinc-550 dark:text-zinc-500 uppercase tracking-widest block mb-2 text-left">MULTI-AGENT TIMELINE (12.4s p95 TAX)</span>
              
              {/* Sequential Stack Bar */}
              <div className="w-full h-8 rounded-xl bg-zinc-200 dark:bg-zinc-900/60 overflow-hidden p-1 flex gap-1 border border-zinc-200 dark:border-zinc-800/10">
                {latencyStages.map((stage, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ width: 0 }}
                    animate={{ width: ["0%", stage.percent] }}
                    transition={{ duration: 1.2, delay: idx * 0.1, repeat: Infinity, repeatDelay: 4, ease: "easeOut" }}
                    className={`h-full rounded-lg ${stage.color} flex items-center justify-center text-[9px] font-mono font-bold text-white overflow-hidden`}
                  >
                    <span>{stage.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Time stamps */}
              <div className="grid grid-cols-4 gap-2 text-center text-[9px] font-mono text-zinc-500 dark:text-zinc-400 mt-2">
                {latencyStages.map((stage, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-zinc-650 dark:text-zinc-350 font-bold">{stage.val}</span>
                    <span>{stage.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Single-Agent Latency */}
            <div className="border-t border-zinc-200 dark:border-zinc-800/10 pt-4">
              <span className="text-[10px] font-mono text-zinc-550 dark:text-zinc-500 uppercase tracking-widest block mb-2 text-left">SINGLE-AGENT BASELINE (2.6s FAST & SHUT)</span>
              <div className="w-full h-8 rounded-xl bg-zinc-200 dark:bg-zinc-900/60 overflow-hidden p-1 flex border border-zinc-200 dark:border-zinc-800/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: ["0%", "21%"] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4.4, ease: "easeOut" }}
                  className="h-full rounded-lg bg-zinc-400 dark:bg-zinc-600 flex items-center justify-center text-[9px] font-mono font-bold text-white overflow-hidden"
                >
                  SQL (2.6s)
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right side: Glowing Table & Description */}
      <div className="flex flex-col lg:w-1/2 w-full max-w-xl z-10 text-left">
        
        {/* Table comparison */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="border rounded-3xl p-6 shadow-inner flex flex-col h-full"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <ArrowRightLeft className="text-cyber-purple w-5 h-5" />
            <h4 className="text-xs font-mono font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              {st.tableTitle}
            </h4>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 dark:border-zinc-800/20 text-zinc-550 dark:text-zinc-500 font-bold">
                  <th className="py-2.5">{st.headers[0]}</th>
                  <th className="py-2.5 text-right text-cyber-cyan">{st.headers[1]}</th>
                  <th className="py-2.5 text-right text-zinc-500 dark:text-zinc-400">{st.headers[2]}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 dark:divide-zinc-800/10 text-zinc-650 dark:text-zinc-300">
                {st.rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                    <td className="py-2.5 font-sans font-medium text-zinc-800 dark:text-white">{row[0]}</td>
                    <td className="py-2.5 text-right font-extrabold text-cyber-cyan text-sm">{row[1]}</td>
                    <td className="py-2.5 text-right text-zinc-500 dark:text-zinc-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed mt-6 border-t border-white/5 dark:border-zinc-800/10 pt-4 font-light">
            {st.desc}
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
