import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-8 z-50 flex items-center gap-2 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-full px-3 py-1.5 shadow-lg">
      <Globe className="w-4 h-4 text-zinc-400" />
      <div className="flex gap-1 text-xs font-mono">
        <button
          onClick={() => setLang('en')}
          className={`px-2 py-1 rounded-md transition-colors ${
            lang === 'en' ? 'bg-cyber-purple/20 text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('vi')}
          className={`px-2 py-1 rounded-md transition-colors ${
            lang === 'vi' ? 'bg-cyber-cyan/20 text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          VI
        </button>
      </div>
    </div>
  );
}
