import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function CTASlide() {
  const { t } = useLanguage();

  return (
    <Slide className="text-center justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center relative w-full max-w-4xl"
      >
        <motion.div 
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-cyber-purple/5 blur-[120px] rounded-full w-full h-full -z-10 pointer-events-none" 
        />
        
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mb-6">
          {t.cta.title}
        </h2>

        <p className="text-zinc-400 max-w-2xl text-lg md:text-xl font-light mb-12 leading-relaxed">
          {t.cta.summary}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: ["0px 0px 0px rgba(6,182,212,0)", "0px 0px 40px rgba(6,182,212,0.5)", "0px 0px 0px rgba(6,182,212,0)"]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-sans font-semibold text-lg overflow-hidden transition-all focus:outline-none cursor-pointer"
        >
          {/* Animated gradient border inside */}
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-black/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
          <Terminal className="w-5 h-5" />
          <span className="relative z-10">{t.cta.button}</span>
        </motion.button>
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
        `}} />
      </motion.div>
    </Slide>
  );
}
