import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ChevronDown, Terminal } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect } from 'react';

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: text.length * 0.05,
      delay: delay,
      ease: "linear",
    });
    return controls.stop;
  }, [count, text.length, delay]);

  return <motion.span>{displayText}</motion.span>;
}

export function HeroSlide() {
  const { t } = useLanguage();
  
  const codeLines = [
    "import duckdb",
    "import google.generativeai as genai",
    "",
    "# Initialize In-Memory OLAP",
    "con = duckdb.connect(database=':memory:')",
    "",
    "# Cloud -> RAM execution",
    "con.execute('INSTALL json; LOAD json;')",
    "con.execute(\"\"\"",
    "    CREATE VIEW game_events AS",
    "    SELECT * FROM read_json_auto('api/events')",
    "\"\"\")",
    "",
    "# Agents Offline Fallback config",
    "from sklearn.ensemble import RandomForestClassifier",
    "model = RandomForestClassifier()",
    "model.predict_proba(X_test) # Churn Logic",
    "",
    "print('System Online')"
  ];

  return (
    <Slide className="text-center md:text-left flex-col md:flex-row gap-12 md:gap-24 px-8 md:px-24">
      
      {/* Left side: Typography */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Spring-like ease out
        className="flex flex-col items-center md:items-start max-w-2xl mt-12 md:mt-0 z-10"
      >
        <div className="relative mb-6">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] -z-10 pointer-events-none"
          />
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white leading-tight">
            {t.hero.title}
          </h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-zinc-400 font-light tracking-tight mb-12"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ x: 5, color: '#06B6D4' }}
          className="flex items-center gap-2 group text-sm md:text-base font-mono text-zinc-500 uppercase tracking-widest cursor-pointer transition-colors"
          onClick={() => {
            const container = document.getElementById('main-scroll-container');
            if (container) {
              container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
        >
          {t.hero.scroll}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="group-hover:text-cyber-cyan"
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Right side: Mocked Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xl mx-auto md:mx-0 z-10"
      >
        <div className="rounded-xl overflow-hidden bg-[#0A0A0A] border border-white/10 shadow-[0_20px_60px_-10px_rgba(139,92,246,0.15)] backdrop-blur-3xl relative">
           <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-32 h-32 bg-cyber-purple/10 rounded-full blur-3xl pointer-events-none"
          />
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.01]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>
            <div className="mx-auto flex items-center gap-2 text-zinc-500 text-xs font-mono">
              <Terminal size={14} /> orchestrator.py
            </div>
          </div>
          <div className="p-6 text-sm md:text-base font-mono text-zinc-400 text-left overflow-x-auto leading-relaxed relative min-h-[350px]">
            {codeLines.map((line, idx) => {
              // Calculate cumulative delay based on previous line lengths
              const cumulativeDelay = codeLines.slice(0, idx).reduce((acc, curr) => acc + (curr.length * 0.05) + 0.1, 0.5);
              return (
                <div key={idx} className="h-6">
                  {line === '' ? <br /> : <TypewriterText text={line} delay={cumulativeDelay} />}
                </div>
              );
            })}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-2 h-5 bg-cyber-cyan ml-1 -mb-1 mt-1"
            />
          </div>
        </div>
      </motion.div>
    </Slide>
  );
}
