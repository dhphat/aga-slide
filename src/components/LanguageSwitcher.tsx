import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div 
      className="fixed top-6 right-8 z-50 flex items-center gap-2 backdrop-blur-xl rounded-full px-3 py-1.5 shadow-lg border transition-colors duration-300"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
        color: 'var(--text-color)'
      }}
    >
      <Globe className="w-4 h-4 text-zinc-400" />
      <div className="flex gap-1 text-xs font-mono">
        <button
          onClick={() => setLang('en')}
          className={`px-2 py-1 rounded-md transition-colors cursor-pointer font-bold ${
            lang === 'en' 
              ? 'bg-cyber-purple/20 text-cyber-purple dark:text-white' 
              : 'text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-200'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('vi')}
          className={`px-2 py-1 rounded-md transition-colors cursor-pointer font-bold ${
            lang === 'vi' 
              ? 'bg-cyber-cyan/20 text-cyber-cyan dark:text-white' 
              : 'text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-200'
          }`}
        >
          VI
        </button>
      </div>
    </div>
  );
}
