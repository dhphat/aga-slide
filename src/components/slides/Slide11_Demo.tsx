import { motion } from 'motion/react';
import { Play, Sparkles, Terminal, BarChart2, Lightbulb } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide11_Demo() {
  const { t } = useLanguage();
  const st = t.slide11;

  // Icons for steps
  const stepIcons = [
    <Sparkles size={14} className="text-pink-400" />,
    <Play size={14} className="text-cyber-cyan" />,
    <Terminal size={14} className="text-cyber-purple" />,
    <BarChart2 size={14} className="text-amber-500" />,
    <Lightbulb size={14} className="text-emerald-400" />
  ];

  const stepGlows = [
    "border-pink-500/10 hover:border-pink-500/20",
    "border-cyber-cyan/10 hover:border-cyber-cyan/20",
    "border-cyber-purple/10 hover:border-cyber-purple/20",
    "border-amber-500/10 hover:border-amber-500/20",
    "border-emerald-400/10 hover:border-emerald-400/20"
  ];

  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Interactive Mock Chat Workspace */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:w-1/2 w-full max-w-xl z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          11 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 text-center lg:text-left">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6 text-center lg:text-left">
          {st.subtitle}
        </p>

        {/* Mock Live Demo Screen */}
        <div 
          className="border rounded-3xl p-5 shadow-2xl relative flex flex-col gap-4 overflow-hidden h-[420px]"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 dark:border-zinc-800/10 pb-3">
            <span className="text-[10px] font-mono text-zinc-550 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {st.demoTitle}
            </span>
            <span className="text-[9px] font-mono text-zinc-500">PROJECT: olist</span>
          </div>

          {/* Chat Stream */}
          <div className="flex-grow overflow-y-auto flex flex-col gap-3 font-mono text-[10px] pr-1">
            {/* User message */}
            <div 
              className="p-3 rounded-2xl border self-end max-w-[85%] text-right"
              style={{
                backgroundColor: 'var(--bg-color)',
                borderColor: 'var(--card-border)',
                color: 'var(--text-color)'
              }}
            >
              <p className="text-zinc-550 dark:text-zinc-500 text-[8px] uppercase tracking-wider mb-1">USER QUERY</p>
              <p className="text-xs font-semibold">{st.steps[0].desc}</p>
            </div>

            {/* Plan step */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-3 rounded-2xl bg-[#09090b] border border-[#06B6D4]/25 self-start max-w-[85%] text-left"
            >
              <p className="text-[#06B6D4] text-[8px] uppercase tracking-widest mb-1 font-bold">📝 PLANNER AGENT</p>
              <p className="text-zinc-300">join • aggregate • rank • visualise</p>
            </motion.div>

            {/* SQL Step */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="p-3 rounded-2xl bg-[#09090b] border border-[#8B5CF6]/25 self-start max-w-[85%] w-full text-left"
            >
              <p className="text-[#8B5CF6] text-[8px] uppercase tracking-widest mb-1 font-bold">💾 DATA SQL AGENT</p>
              <div className="bg-[#030303] p-2 rounded-lg border border-white/5 text-[9px] text-zinc-400 overflow-x-auto whitespace-pre">
                {`SELECT p.category_name, SUM(oi.price) as rev\nFROM order_items oi\nJOIN products p ON oi.product_id = p.product_id\nGROUP BY 1 ORDER BY 2 DESC LIMIT 5;`}
              </div>
            </motion.div>

            {/* Insight step */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="p-3 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/25 self-start max-w-[85%] text-left"
            >
              <p className="text-emerald-800 dark:text-emerald-400 text-[8px] uppercase tracking-widest mb-1 font-bold">💡 INSIGHT AGENT</p>
              <p className="text-zinc-900 dark:text-zinc-300 font-medium">“Health & Beauty leads, 22% of total”</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Right side: 5 Steps details */}
      <div className="flex flex-col lg:w-1/2 w-full max-w-xl z-10 gap-4 text-left">
        {st.steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className={`p-4 rounded-xl border transition-all flex items-start gap-4 ${stepGlows[idx]}`}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <div className="flex-shrink-0 flex items-center justify-center p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 font-mono text-xs font-bold text-zinc-800 dark:text-white">
              {idx + 1}
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                {stepIcons[idx]}
                <h4 className="font-display font-bold text-zinc-900 dark:text-white text-xs md:text-sm tracking-wide">
                  {step.title}
                </h4>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs font-mono font-light">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
