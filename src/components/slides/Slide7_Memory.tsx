import { motion } from 'motion/react';
import { Database, FilePieChart, Activity, MessageSquare, ArrowRight } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide7_Memory() {
  const { t } = useLanguage();
  const st = t.slide7;

  const icons = [
    <Database size={16} className="text-cyber-cyan" />,
    <FilePieChart size={16} className="text-amber-500" />,
    <Activity size={16} className="text-cyber-purple" />,
    <MessageSquare size={16} className="text-emerald-400" />
  ];

  const highlights = [
    "hover:border-cyber-cyan/35 shadow-[0_0_30px_rgba(6,182,212,0.03)]",
    "hover:border-amber-500/35 shadow-[0_0_30px_rgba(245,158,11,0.03)]",
    "hover:border-cyber-purple/35 shadow-[0_0_30px_rgba(139,92,246,0.03)]",
    "hover:border-emerald-400/35 shadow-[0_0_30px_rgba(52,211,153,0.03)]"
  ];

  const borderColors = [
    "border-cyber-cyan/20",
    "border-amber-500/20",
    "border-cyber-purple/20",
    "border-emerald-400/20"
  ];

  return (
    <Slide className="flex-col lg:flex-row gap-12 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Left side: Relational Schema Diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:w-1/2 w-full max-w-xl z-10 font-sans"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/35 px-3 py-1 rounded-full mb-4 self-center lg:self-start">
          07 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2 text-center lg:text-left">
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-8 text-center lg:text-left">
          {st.subtitle}
        </p>

        {/* Interactive Schema Board */}
        {/* Interactive Schema Board */}
        <div 
          className="relative border rounded-3xl p-6 min-h-[380px] flex flex-col justify-between overflow-hidden shadow-inner"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)'
          }}
        >
          {/* Responsive connection lines radiating from the center */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
            {/* Project link */}
            <motion.line
              x1="50%" y1="52%" x2="25%" y2="28%"
              stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 6"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              opacity="0.4"
            />
            {/* Conversation link */}
            <motion.line
              x1="50%" y1="52%" x2="75%" y2="28%"
              stroke="#8B5CF6" strokeWidth="1.5" strokeDasharray="4 6"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              opacity="0.4"
            />
            {/* Dataset link */}
            <motion.line
              x1="50%" y1="52%" x2="25%" y2="72%"
              stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 6"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              opacity="0.4"
            />
            {/* Artifact link */}
            <motion.line
              x1="50%" y1="52%" x2="75%" y2="72%"
              stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 6"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              opacity="0.4"
            />
          </svg>

          {/* Central Pulsing Network Hub */}
          <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.25)] z-20 animate-pulse">
            <Activity size={16} className="text-cyber-cyan animate-spin" style={{ animationDuration: '10s' }} />
          </div>

          <div className="absolute top-0 left-0 p-3 text-[10px] font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest border-b border-r border-zinc-200 dark:border-zinc-800/10 bg-white/[0.01] rounded-br-2xl">
            {st.coreTitle}
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 z-10">
            {/* Project Box */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-2xl border shadow-md text-left"
              style={{
                backgroundColor: 'var(--bg-color)',
                borderColor: 'var(--card-border)'
              }}
            >
              <h4 className="text-xs font-mono font-bold text-cyber-cyan uppercase tracking-wider mb-2">PROJECT</h4>
              <p className="text-[10px] font-mono text-zinc-650 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                {st.schema.project.split('\n').slice(1).join('\n')}
              </p>
            </motion.div>

            {/* Conversation Box */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-2xl border shadow-md text-left"
              style={{
                backgroundColor: 'var(--bg-color)',
                borderColor: 'var(--card-border)'
              }}
            >
              <h4 className="text-xs font-mono font-bold text-cyber-purple uppercase tracking-wider mb-2">CONVERSATION</h4>
              <p className="text-[10px] font-mono text-zinc-650 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                {st.schema.conversation.split('\n').slice(1).join('\n')}
              </p>
            </motion.div>

            {/* Dataset Box */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-2xl border shadow-md text-left"
              style={{
                backgroundColor: 'var(--bg-color)',
                borderColor: 'var(--card-border)'
              }}
            >
              <h4 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider mb-2">DATASET</h4>
              <p className="text-[10px] font-mono text-zinc-650 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                {st.schema.dataset.split('\n').slice(1).join('\n')}
              </p>
            </motion.div>

            {/* Artifact Box */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-2xl border shadow-md text-left"
              style={{
                backgroundColor: 'var(--bg-color)',
                borderColor: 'var(--card-border)'
              }}
            >
              <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">ARTIFACT</h4>
              <p className="text-[10px] font-mono text-zinc-650 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                {st.schema.artifact.split('\n').slice(1).join('\n')}
              </p>
            </motion.div>
          </div>

          {/* Connectors label footer */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center text-[10px] font-mono text-zinc-500 pt-4 border-t border-zinc-200 dark:border-zinc-800/10 z-10">
            <span className="flex items-center gap-1"><ArrowRight size={10} className="text-cyber-cyan" /> {st.schemaRelations.owns}</span>
            <span className="flex items-center gap-1"><ArrowRight size={10} className="text-cyber-purple" /> {st.schemaRelations.produces}</span>
            <span className="flex items-center gap-1"><ArrowRight size={10} className="text-amber-500" /> {st.schemaRelations.holds}</span>
            <span className="flex items-center gap-1"><ArrowRight size={10} className="text-emerald-400" /> {st.schemaRelations.feeds}</span>
          </div>
        </div>
      </motion.div>

      {/* Right side: 4 layers of agent recall */}
      <div className="flex flex-col gap-4 lg:w-1/2 w-full max-w-xl z-10">
        <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-2 text-center lg:text-left">
          {st.agentsRecallTitle}
        </h3>
        
        {st.layers.map((layer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className={`p-4 rounded-2xl border transition-all flex items-start gap-4 shadow-sm relative overflow-hidden group text-left ${highlights[idx]}`}
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)'
            }}
          >
            <div className="absolute inset-0 bg-white/[0.005] pointer-events-none" />
            <div className={`flex-shrink-0 p-2 rounded-xl bg-white/[0.02] border flex items-center justify-center ${borderColors[idx]}`}>
              {icons[idx]}
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[9px] font-bold text-zinc-500">
                  {layer.layer}
                </span>
                <h4 className="font-display font-bold text-zinc-900 dark:text-white text-xs md:text-sm tracking-wide">
                  {layer.name}
                </h4>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-light">
                {layer.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
