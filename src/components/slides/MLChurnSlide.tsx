import { motion } from 'motion/react';
import { Network, Activity, GitCommit } from 'lucide-react';
import { Slide } from '../Slide';
import { useLanguage } from '../../contexts/LanguageContext';

export function MLChurnSlide() {
  const { t } = useLanguage();

  return (
    <Slide className="gap-12 px-6 md:px-24 flex-col md:flex-row justify-center items-center">
      
      {/* Left Text content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-full max-w-xl pr-0 md:pr-12 text-left z-10 order-2 md:order-1 mt-12 md:mt-0"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
          {t.ml.title}
        </h2>
        <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-8">
          {t.ml.subtitle}
        </p>

        <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-8">
          {t.ml.desc}
        </p>

        {/* Feature Engineering List */}
        <div className="space-y-4">
          <h4 className="text-white font-display font-medium border-b border-white/10 pb-2 inline-block">{t.ml.features}</h4>
          {t.ml.featuresList.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="flex items-center gap-3 text-sm font-mono text-zinc-300"
            >
              <GitCommit className="w-4 h-4 text-cyber-purple" />
              {feature}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Visual: Pulsing ML Tree/Radar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md aspect-square relative flex items-center justify-center order-1 md:order-2 z-10"
      >
        {/* Radar Base SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
           <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
           <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
           <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
           
           <line x1="100" y1="100" x2="100" y2="20" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
           <line x1="100" y1="100" x2="175" y2="135" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
           <line x1="100" y1="100" x2="25" y2="135" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

           {/* Animated Radar Polygon (Prediction Area) */}
           <motion.polygon 
             points="100,50 140,110 70,140"
             fill="rgba(139,92,246,0.2)"
             stroke="#8B5CF6"
             strokeWidth="2"
             animate={{
                points: ["100,50 140,110 70,140", "100,40 160,115 60,120", "100,60 130,140 80,130", "100,50 140,110 70,140"]
             }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             style={{ filter: "drop-shadow(0px 0px 10px rgba(139,92,246,0.5))" }}
           />
           
           {/* Pulsing Nodes */}
           <motion.circle 
              cx="100" cy="50" r="4" fill="#06B6D4"
              animate={{ cx: [100, 100, 100], cy: [50, 40, 50], r: [4, 6, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
           <motion.circle 
              cx="140" cy="110" r="4" fill="#06B6D4"
              animate={{ cx: [140, 160, 140], cy: [110, 115, 110], r: [4, 6, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
           <motion.circle 
              cx="70" cy="140" r="4" fill="#06B6D4"
              animate={{ cx: [70, 60, 70], cy: [140, 120, 140], r: [4, 6, 4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Scanning line */}
            <motion.line
              x1="100" y1="100" x2="100" y2="20"
              stroke="#06B6D4" strokeWidth="2" strokeOpacity="0.5"
              animate={{ transform: ["rotate(0deg)", "rotate(360deg)"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "100px 100px" }}
            />
        </svg>
        
        {/* Core Center Icon */}
        <div className="absolute w-12 h-12 bg-black rounded-full border border-cyber-cyan/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
           <Activity className="w-6 h-6 text-cyber-cyan" />
        </div>

      </motion.div>

    </Slide>
  );
}
