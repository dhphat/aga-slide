import { motion } from 'motion/react';
import { ShieldCheck, Server, HelpCircle, ArrowRight, Table } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide8_Measurement() {
  const { t } = useLanguage();
  const st = t.slide8;

  // Split baseline text into smaller paragraphs or display it elegantly
  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Olist Database Schema */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:w-1/2 w-full max-w-xl z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-purple bg-cyber-purple/10 border border-cyber-purple/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          08 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 text-center lg:text-left">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-6 text-center lg:text-left">
          {st.subtitle}
        </p>

        {/* Database Schema Visualizer */}
        {/* Database Schema Visualizer */}
        <div 
          className="relative border rounded-3xl p-6 min-h-[380px] flex flex-col justify-between overflow-hidden shadow-inner"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            color: 'var(--text-color)'
          }}
        >
          <div className="absolute top-0 left-0 p-3 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest border-b border-r border-zinc-200 dark:border-zinc-800/10 bg-white/[0.01] rounded-br-2xl">
            {st.schemaTitle}
          </div>

          {/* Relational Database Schema Canvas */}
          <div className="relative w-full h-[220px] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-zinc-950/20 overflow-hidden mt-6">
            
            {/* SVG Relationship Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
              <defs>
                <linearGradient id="db-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              {/* Hub to Customers */}
              <motion.line
                x1="50%" y1="20%" x2="20%" y2="20%"
                stroke="url(#db-grad)" strokeWidth="1.5" strokeDasharray="3 5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                opacity="0.4"
              />
              {/* Hub to Items */}
              <motion.line
                x1="50%" y1="20%" x2="80%" y2="20%"
                stroke="url(#db-grad)" strokeWidth="1.5" strokeDasharray="3 5"
                animate={{ strokeDashoffset: [0, 20] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                opacity="0.4"
              />
              {/* Hub to Payments */}
              <motion.line
                x1="50%" y1="20%" x2="20%" y2="70%"
                stroke="url(#db-grad)" strokeWidth="1.5" strokeDasharray="3 5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                opacity="0.4"
              />
              {/* Hub to Reviews */}
              <motion.line
                x1="50%" y1="20%" x2="50%" y2="70%"
                stroke="url(#db-grad)" strokeWidth="1.5" strokeDasharray="3 5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                opacity="0.4"
              />
              {/* Hub to Products */}
              <motion.line
                x1="50%" y1="20%" x2="80%" y2="70%"
                stroke="url(#db-grad)" strokeWidth="1.5" strokeDasharray="3 5"
                animate={{ strokeDashoffset: [0, 20] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                opacity="0.4"
              />
            </svg>

            {/* Customers */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="absolute left-[5%] top-[10%] px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 shadow-sm z-10 text-zinc-800 dark:text-zinc-200"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <Table size={12} className="text-sky-400 animate-pulse" />
              <span className="font-mono text-[9px] font-bold">CUSTOMERS</span>
            </motion.div>

            {/* Orders Hub */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="absolute left-1/2 top-[10%] -translate-x-1/2 px-3 py-2 rounded-xl border flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.15)] z-10 text-zinc-900 dark:text-white"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'rgba(139, 92, 246, 0.4)' }}
            >
              <Table size={14} className="text-cyber-purple" />
              <span className="font-mono text-[10px] font-extrabold uppercase">ORDERS (HUB)</span>
            </motion.div>

            {/* Items */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="absolute right-[5%] top-[10%] px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 shadow-sm z-10 text-zinc-800 dark:text-zinc-200"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <Table size={12} className="text-amber-500 animate-pulse" />
              <span className="font-mono text-[9px] font-bold">ORDER_ITEMS</span>
            </motion.div>

            {/* Payments */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="absolute left-[5%] top-[60%] px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 shadow-sm z-10 text-zinc-700 dark:text-zinc-400"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <Table size={11} className="text-zinc-500" />
              <span className="font-mono text-[9px]">PAYMENTS</span>
            </motion.div>

            {/* Reviews */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="absolute left-1/2 top-[60%] -translate-x-1/2 px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 shadow-sm z-10 text-zinc-700 dark:text-zinc-400"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <Table size={11} className="text-zinc-500" />
              <span className="font-mono text-[9px]">REVIEWS</span>
            </motion.div>

            {/* Products */}
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="absolute right-[5%] top-[60%] px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 shadow-sm z-10 text-zinc-800 dark:text-zinc-200"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <Table size={11} className="text-emerald-400 animate-pulse" />
              <span className="font-mono text-[9px] font-bold">PRODUCTS</span>
            </motion.div>
          </div>

          {/* Metrics summary grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800/10 text-center z-10">
            <div 
              className="p-2 rounded-xl border text-center"
              style={{
                backgroundColor: 'var(--bg-color)',
                borderColor: 'var(--card-border)'
              }}
            >
              <span className="block text-xs font-mono font-bold text-zinc-800 dark:text-white">30 Q</span>
              <span className="text-[9px] font-mono text-zinc-500">PROMPTS</span>
            </div>
            <div 
              className="p-2 rounded-xl border text-center"
              style={{
                backgroundColor: 'var(--bg-color)',
                borderColor: 'var(--card-border)'
              }}
            >
              <span className="block text-xs font-mono font-bold text-zinc-800 dark:text-white">9 Tables</span>
              <span className="text-[9px] font-mono text-zinc-500">UNDER TEST</span>
            </div>
            <div 
              className="p-2 rounded-xl border text-center col-span-2 md:col-span-1"
              style={{
                backgroundColor: 'var(--bg-color)',
                borderColor: 'var(--card-border)'
              }}
            >
              <span className="block text-xs font-mono font-bold text-zinc-800 dark:text-white">100K</span>
              <span className="text-[9px] font-mono text-zinc-500">ORDERS</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right side: Questions, Runtime, and Baseline */}
      <div className="flex flex-col gap-4 lg:w-1/2 w-full max-w-xl z-10 text-left">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Question Mix */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-5 rounded-2xl border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <h4 className="text-xs font-mono font-bold text-cyber-cyan uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <HelpCircle size={14} /> {st.mixTitle}
            </h4>
            <ul className="flex flex-col gap-2">
              {st.mix.map((m, idx) => (
                <li key={idx} className="font-mono text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan" />
                  {m}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Runtime */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-5 rounded-2xl border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
              color: 'var(--text-color)'
            }}
          >
            <h4 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Server size={14} /> {st.runtimeTitle}
            </h4>
            <ul className="flex flex-col gap-1.5">
              {st.runtime.map((r, idx) => (
                <li key={idx} className="text-[10px] font-mono text-zinc-650 dark:text-zinc-400 flex items-start gap-1">
                  <span className="text-amber-500/80">›</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Baseline Definition */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="p-5 rounded-2xl border shadow-md relative overflow-hidden"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            color: 'var(--text-color)'
          }}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 rounded-full blur-2xl pointer-events-none" />
          <h4 className="text-xs font-mono font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <ShieldCheck size={14} /> {st.baselineTitle}
          </h4>
          <p className="text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            {st.baselineDesc}
          </p>
        </motion.div>
      </div>
    </Slide>
  );
}
