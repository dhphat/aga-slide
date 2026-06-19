import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function Slide16_End() {
  const { t } = useLanguage();
  const st = t.slide16;

  return (
    <Slide className="justify-center items-center text-center px-8 relative overflow-hidden py-12">
      
      {/* Background Radial Glow */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-cyber-cyan/20 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className="flex flex-col items-center max-w-2xl z-10"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/35 px-4 py-1.5 rounded-full mb-6 uppercase">
          16 / 17 · END OF PRESENTATION
        </span>

        {/* Big Thank You Title */}
        <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-cyber-cyan to-cyber-purple dark:from-white leading-tight mb-6">
          {st.title}
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg leading-relaxed font-light tracking-wide max-w-xl mb-12">
          {st.subtitle}
        </p>

        {/* Bouncing Questions Indicator */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 py-2.5 px-5 rounded-full mb-12 group hover:border-cyber-cyan/30 transition-colors shadow-sm cursor-pointer"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          <MessageCircle size={14} className="text-cyber-cyan animate-pulse" />
          <span className="tracking-widest uppercase group-hover:text-cyber-cyan transition-colors">{st.footer}</span>
        </motion.div>

        {/* Bottom Project Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md pt-6 border-t border-zinc-200 dark:border-white/5 font-mono text-[10px] sm:text-xs text-zinc-500">
          <div className="flex flex-col items-center sm:items-start border-b sm:border-b-0 sm:border-r border-zinc-200 dark:border-white/5 pb-4 sm:pb-0 pr-4">
            <span className="text-zinc-500 dark:text-zinc-400 font-bold mb-1 uppercase tracking-widest">{st.projectLabel}</span>
            <span className="font-light text-zinc-700 dark:text-zinc-300">{st.projectValue}</span>
          </div>
          <div className="flex flex-col items-center sm:items-start pl-4">
            <span className="text-zinc-500 dark:text-zinc-400 font-bold mb-1 uppercase tracking-widest">{st.docLabel.split('•')[0].trim()}</span>
            <span className="font-light text-zinc-700 dark:text-zinc-300">{st.docValue}</span>
          </div>
        </div>
      </motion.div>
    </Slide>
  );
}
