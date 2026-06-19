import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

// Brand SVG Icons for Technology Badges
const ReactIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#00D8FF] animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse rx="9" ry="3.5" transform="translate(10,10)" />
    <ellipse rx="9" ry="3.5" transform="translate(10,10) rotate(60)" />
    <ellipse rx="9" ry="3.5" transform="translate(10,10) rotate(120)" />
    <circle cx="10" cy="10" r="1.5" fill="currentColor" />
  </svg>
);

const ViteIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 22h20L12 2z" fill="url(#vite-grad)" />
    <path d="M19 22l-7-12-3 5h3l2 4z" fill="#FFC517" />
    <defs>
      <linearGradient id="vite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#41D1FF" />
        <stop offset="100%" stopColor="#BD34FE" />
      </linearGradient>
    </defs>
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.002 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624.978.978 2.339 2.339 5.314 2.339 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const ZustandIcon = () => (
  <svg className="w-3.5 h-3.5 text-amber-800 dark:text-[#f3d9c4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M12 2v6M9 5h6M6 8V6a2 2 0 012-2M18 8V6a2 2 0 00-2-2" />
  </svg>
);

const OpenAIIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#10A37F] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M6 12h12M8.5 8.5l7 7M15.5 8.5l-7 7" />
  </svg>
);

const TempIcon = () => (
  <svg className="w-3.5 h-3.5 text-orange-600 dark:text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M14 14.76V3.5a2 2 0 0 0-4 0v11.26a4.5 4.5 0 1 0 4 0z" />
  </svg>
);

const DuckDBIcon = () => (
  <svg className="w-3.5 h-3.5 animate-bounce" style={{ animationDuration: '3s' }} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#FFF" stroke="#4A3728" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="1" fill="#4A3728" />
    <path d="M6 13.5c2 0 3-.8 4-1.8M13 8.5l4.5 2-4.5 2z" fill="#FFC107" />
    <path d="M9 15.5c2 1 4.5 1 6.5-1" stroke="#4A3728" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PandasIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#150458] dark:text-[#9082D2]" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="12" cy="14" r="6" />
    <circle cx="9.5" cy="12.5" r="1" fill="white" />
    <circle cx="14.5" cy="12.5" r="1" fill="white" />
  </svg>
);

const MatplotlibIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" stroke="#11557C" />
    <path d="M8 15l2-4 3 3 4-6" stroke="#F15A24" />
  </svg>
);

const ParquetIcon = () => (
  <svg className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M8 13h8M8 17h8" />
  </svg>
);

const PythonIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.12 2a4.84 4.84 0 0 0-4.78 4.45l.01 1.4h4.88v.68H5.4A4.84 4.84 0 0 0 .56 13.4a4.84 4.84 0 0 0 4.84 4.84h2.89v-4.08a3.39 3.39 0 0 1 3.4-3.39h4.08V7.88a5.87 5.87 0 0 0-5.88-5.88h2.23zm-2.9 2.1a.92.92 0 1 1 0 1.84.92.92 0 0 1 0-1.84zM11.88 22a4.84 4.84 0 0 0 4.78-4.45l-.01-1.4h-4.88v-.68h6.83a4.84 4.84 0 0 0 4.84-4.87 4.84 4.84 0 0 0-4.84-4.84h-2.89v4.08a3.39 3.39 0 0 1-3.4 3.39h-4.08v2.89A5.87 5.87 0 0 0 14.12 22h-2.24zm2.9-2.1a.92.92 0 1 1 0-1.84.92.92 0 0 1 0 1.84z" fill="url(#py-grad-14)" />
    <defs>
      <linearGradient id="py-grad-14" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB" />
        <stop offset="100%" stopColor="#FFD343" />
      </linearGradient>
    </defs>
  </svg>
);

const FastAPIIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="#009485" />
    <path d="M11 17h2v-4h3l-5-6-5 6h3v4z" fill="white" />
  </svg>
);

const WebSocketIcon = () => (
  <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-4V4l-8 10h4v6l8-10z" />
  </svg>
);

const PydanticIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#E52E71]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 14.5v-3H8v-2h3V8h2v3h3v2h-3v3.5h-2z" />
  </svg>
);

const DockerIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#0DB7ED]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.9 10.3h1.8v1.8h-1.8zM11.6 10.3h1.8v1.8h-1.8zM9.4 10.3h1.8v1.8H9.4zM7.1 10.3h1.8v1.8H7.1zM11.6 8h1.8v1.8h-1.8zM9.4 8h1.8v1.8H9.4zM7.1 8h1.8v1.8H7.1zM9.4 5.7h1.8v1.8H9.4zM24 12.3c-.4.4-1.2.6-2.1.6h-5.2c-.4 0-.8.3-.8.8v2.7c0 1.2-1 2.3-2.3 2.3H6.8c-2.3 0-4.3-1.6-4.7-3.9-.4-2.1.8-4.2 2.9-4.7l1.7-.4V6.8c0-.4.3-.8.8-.8h1.8v1.8H7.1v2.5l5 .2v1.5c0 .4.3.8.8.8h9.3c.4 0 .8-.3.8-.8.1-.5.1-1 .1-1.5-.1-1.3-.9-2.3-2.1-2.6-.4-.1-.6-.5-.5-.9s.5-.6.9-.5c1.8.4 3 2 3.1 3.9v1.2c0 .4-.2.8-.4 1.1z" />
  </svg>
);

const DockerComposeIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#0DB7ED]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <path d="M14 17.5h7M17.5 14v7" />
  </svg>
);

// Map Tag Text to Respective SVG brand icon
function getTagIcon(tag: string) {
  const clean = tag.toLowerCase().trim();
  if (clean.includes("react")) return <ReactIcon />;
  if (clean.includes("vite")) return <ViteIcon />;
  if (clean.includes("tailwind")) return <TailwindIcon />;
  if (clean.includes("zustand")) return <ZustandIcon />;
  if (clean.includes("openai")) return <OpenAIIcon />;
  if (clean.includes("gpt")) return <OpenAIIcon />;
  if (clean.includes("temp")) return <TempIcon />;
  if (clean.includes("duckdb")) return <DuckDBIcon />;
  if (clean.includes("pandas")) return <PandasIcon />;
  if (clean.includes("matplotlib")) return <MatplotlibIcon />;
  if (clean.includes("parquet") || clean.includes("csv")) return <ParquetIcon />;
  if (clean.includes("python")) return <PythonIcon />;
  if (clean.includes("fastapi")) return <FastAPIIcon />;
  if (clean.includes("websocket")) return <WebSocketIcon />;
  if (clean.includes("pydantic")) return <PydanticIcon />;
  if (clean.includes("docker 24+") || clean === "docker") return <DockerIcon />;
  if (clean.includes("compose")) return <DockerComposeIcon />;
  return null;
}

export function Slide14_TechStack() {
  const { t } = useLanguage();
  const st = t.slide14;

  const layerLabels = ["TOP", "HERO", "CORE", "PIPE", "BASE"];

  // Pastel themes for light mode + high-tech outline themes for dark mode
  const bgClasses = [
    "bg-[#FFEBEF]/95 dark:bg-zinc-950/20 border-pink-200/80 dark:border-pink-500/20 hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.08)]",
    "bg-[#F5FDE8]/95 dark:bg-zinc-950/20 border-lime-200/80 dark:border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.08)]",
    "bg-[#ECE2FF]/95 dark:bg-zinc-950/20 border-purple-200/80 dark:border-cyber-purple/20 hover:border-cyber-purple/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]",
    "bg-[#E2F7ED]/95 dark:bg-zinc-950/20 border-emerald-200/80 dark:border-blue-500/20 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]",
    "bg-[#FEF3C7]/40 dark:bg-zinc-950/20 border-amber-200/80 dark:border-amber-500/20 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.08)]"
  ];

  const borderLeftClasses = [
    "border-l-4 border-l-pink-500",
    "border-l-4 border-l-emerald-500",
    "border-l-4 border-l-purple-500",
    "border-l-4 border-l-sky-500",
    "border-l-4 border-l-amber-500"
  ];

  // Capsule badge colors: Solid high-contrast white in light mode, dark styled in dark mode
  const badgeClasses = [
    "bg-white text-pink-900 border-pink-200/60 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20",
    "bg-white text-emerald-900 border-emerald-200/60 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
    "bg-white text-purple-900 border-purple-200/60 dark:bg-cyber-purple/10 dark:text-cyber-purple dark:border-cyber-purple/20",
    "bg-white text-blue-900 border-blue-200/60 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
    "bg-white text-amber-900 border-amber-200/60 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20"
  ];

  return (
    <Slide className="gap-8 px-6 md:px-24 justify-center items-center overflow-y-auto py-12">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center w-full max-w-4xl"
      >
        <span className="text-xs font-mono font-bold tracking-widest text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/35 px-3 py-1 rounded-full mb-4 inline-block">
          14 / 17 · AGENTIC ANALYTICS
        </span>
        <h2 className="font-display text-2xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1 flex justify-center items-center gap-2.5">
          <Layers className="text-cyber-cyan w-6 h-6 md:w-10 md:h-10 animate-pulse" />
          {st.title}
        </h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs md:text-sm tracking-widest uppercase mt-2">
          {st.subtitle}
        </p>
      </motion.div>

      {/* Stack vertical list with left vertical timeline */}
      <div className="flex flex-col gap-3.5 w-full max-w-4xl z-10 mt-2 relative">
        
        {/* Continuous vertical timeline connector line */}
        <div className="absolute left-[36px] top-[40px] bottom-[40px] w-0.5 bg-zinc-300/80 dark:bg-zinc-800/80 z-0 hidden sm:block pointer-events-none" />

        {st.layers.map((layer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className={`p-4 rounded-2xl border transition-all flex flex-row items-center gap-4 sm:gap-6 relative overflow-hidden group ${bgClasses[idx]} ${borderLeftClasses[idx]}`}
          >
            <div className="absolute inset-0 bg-white/[0.005] pointer-events-none" />
            
            {/* Timeline Circle Node & Label */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center w-12 sm:w-14 z-10">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-950 dark:bg-zinc-800 text-white flex items-center justify-center font-display font-bold text-xs sm:text-sm shadow-md border border-zinc-700 dark:border-zinc-700">
                {5 - idx}
              </div>
              <span className="text-[7.5px] sm:text-[8px] font-mono font-black text-zinc-600 dark:text-zinc-400 mt-1 tracking-wider uppercase">
                {layerLabels[idx]}
              </span>
            </div>

            {/* Content info */}
            <div className="flex-grow text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="font-display font-black text-zinc-900 dark:text-white text-xs md:text-sm tracking-wider uppercase">
                  {layer.name}
                </h3>
                
                {/* Tech tags with logos inside them */}
                <div className="flex flex-wrap gap-1 mt-1 md:mt-0">
                  {layer.tags.map((tag, tIdx) => {
                    const icon = getTagIcon(tag);
                    return (
                      <span 
                        key={tIdx} 
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold border shadow-sm transition-colors ${badgeClasses[idx]}`}
                      >
                        {icon}
                        <span>{tag}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              <p className="text-zinc-700 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-light">
                {layer.desc}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </Slide>
  );
}
