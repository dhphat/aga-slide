import { motion } from 'motion/react';
import { AlertOctagon, ServerCrash, ActivitySquare } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function AnomalySlide() {
  const { t } = useLanguage();

  return (
    <Slide className="gap-12 px-6 md:px-24 flex-col md:flex-row justify-center items-center">
      
      {/* Left Visual: System Dashboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,1)] relative">
          
          {/* Flashing Alert Line */}
          <motion.div 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1 bg-red-600"
          />

          <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
            <span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">{t.anomaly.systemHealth}</span>
            <ActivitySquare className="w-4 h-4 text-zinc-600" />
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4 mb-8 p-4 rounded-xl border border-red-500/20 bg-red-500/5 relative overflow-hidden">
               <motion.div 
                  animate={{ opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-red-500/10"
               />
               <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
               >
                 <AlertOctagon className="w-8 h-8 text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
               </motion.div>
               <div>
                  <h4 className="text-red-500 font-display font-bold text-sm">{t.anomaly.alertBadge}</h4>
                  <p className="text-xs text-red-400/80 font-mono mt-1">ERR_ECONOMY_IMBALANCE</p>
               </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-xs text-zinc-500 font-mono">1-Star Bug Reports / Hr</span>
                <span className="text-sm text-red-400 font-mono font-bold animate-pulse">42 (Threshold: 15)</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-xs text-zinc-500 font-mono">VIP Gold Rev</span>
                <span className="text-sm text-red-400 font-mono font-bold animate-pulse">$4,200</span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="text-xs text-zinc-500 font-mono">VIP Silver Rev</span>
                <span className="text-sm text-zinc-300 font-mono">$5,100</span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Right Text content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-full max-w-xl pl-0 md:pl-12 text-left z-10"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          {t.anomaly.title}
        </h2>
        <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-8">
          {t.anomaly.subtitle}
        </p>

        <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-8">
          {t.anomaly.desc}
        </p>

        {/* Triggers */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 border-l-2 border-l-cyber-orange">
          <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest block mb-4">{t.anomaly.triggers}</span>
          <div className="space-y-3">
             <div className="flex items-center gap-3 text-sm text-zinc-300 font-mono">
               <div className="w-2 h-2 rounded-full bg-cyber-orange" />
               {t.anomaly.trigger1}
             </div>
             <div className="flex items-center gap-3 text-sm text-zinc-300 font-mono">
               <div className="w-2 h-2 rounded-full bg-cyber-orange animate-pulse" />
               {t.anomaly.trigger2}
             </div>
          </div>
        </div>
      </motion.div>

    </Slide>
  );
}
