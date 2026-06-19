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
      duration: text.length * 0.04,
      delay: delay,
      ease: "linear",
    });
    return controls.stop;
  }, [count, text.length, delay]);

  return <motion.span>{displayText}</motion.span>;
}

export function Slide1_Hero() {
  const { t } = useLanguage();
  const st = t.slide1;

  const codeLines = [
    "from atria.agents import Planner, DataAgent, VizAgent, InsightAgent",
    "from atria.kernel import OrchestrationKernel",
    "",
    "kernel = OrchestrationKernel(project='agentic_analytics')",
    "planner = Planner(schema='olist')",
    "",
    "# Natural language prompt flow",
    "question = 'Top 5 product categories by revenue in 2018'",
    "plan = planner.create_plan(question)",
    "",
    "with kernel.trace() as run:",
    "    df = DataAgent().execute(plan.steps['query'])",
    "    chart = VizAgent().propose(df, shape=df.shape)",
    "    insight = InsightAgent().summarize(df)",
    "",
    "print('Report Ready:', insight.one_liner)"
  ];

  return (
    <Slide className="text-center md:text-left flex-col md:flex-row gap-12 md:gap-24 px-8 md:px-24 justify-center items-center">
      
      {/* Left side: Typography */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center md:items-start max-w-2xl mt-12 md:mt-0 z-10"
      >
        <div className="relative mb-6 text-center md:text-left">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] -z-10 pointer-events-none"
          />
          <span className="text-xs font-mono font-bold tracking-widest text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/35 px-3 py-1 rounded-full mb-4 inline-block">
            {st.tagline}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-zinc-900 dark:text-white leading-tight mt-2">
            {st.title}
          </h1>
          <p className="text-md md:text-lg font-mono text-cyber-purple font-semibold tracking-wider mt-2">
            {st.subtitle}
          </p>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-500 dark:text-zinc-400 font-light tracking-tight mb-8 text-sm md:text-base leading-relaxed"
        >
          {st.desc}
        </motion.p>

        {/* Metadata section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-8 border-l-2 border-cyber-purple/30 pl-4 w-full"
        >
          <div>{st.version}</div>
          <div>{st.status}</div>
          <div>{st.date}</div>
          <div>{st.audience}</div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ x: 5, color: '#06B6D4' }}
          className="flex items-center gap-2 group text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest cursor-pointer transition-colors"
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
            <ChevronDown size={16} />
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
        <div className="rounded-xl overflow-hidden bg-[#070708] border border-white/10 shadow-[0_20px_50px_rgba(6,182,212,0.15)] backdrop-blur-3xl relative">
          <motion.div 
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none"
          />
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.01]">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/25 border border-red-500/40" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/25 border border-yellow-500/40" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/25 border border-green-500/40" />
            </div>
            <div className="mx-auto flex items-center gap-2 text-zinc-500 text-xs font-mono pr-12">
              <Terminal size={14} className="text-[#06B6D4]" /> pipeline.py
            </div>
          </div>
          <div className="p-6 text-[11px] sm:text-xs font-mono text-zinc-400 text-left overflow-x-auto leading-relaxed relative min-h-[380px]">
            {codeLines.map((line, idx) => {
              const cumulativeDelay = codeLines.slice(0, idx).reduce((acc, curr) => acc + (curr.length * 0.04) + 0.08, 0.4);
              return (
                <div key={idx} className="min-h-5 whitespace-pre">
                  {line === '' ? <br /> : <TypewriterText text={line} delay={cumulativeDelay} />}
                </div>
              );
            })}
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="inline-block w-1.5 h-3.5 bg-[#06B6D4] ml-0.5"
            />
          </div>
        </div>
      </motion.div>
    </Slide>
  );
}
