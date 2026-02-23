import { Sparkles, Sun, Moon, Globe } from 'lucide-react';
import type { Locale } from '@/lib/translations';

interface HeaderProps {
  locale: Locale;
  theme: 'light' | 'dark';
  onToggleLocale: () => void;
  onToggleTheme: () => void;
}

const Header = ({ locale, theme, onToggleLocale, onToggleTheme }: HeaderProps) => {
  const vibrate = () => {
    if (navigator.vibrate) navigator.vibrate(10);
  };

  return (
    <header className="w-full max-w-[1260px] mx-auto px-6 pt-4 fade-in">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">
        <div className="glass-pill flex items-center gap-2 px-5 py-2">
          <span className="font-semibold text-foreground">bg.</span>
          <Sparkles size={16} className="text-primary" />
        </div>

        <div className="glass-pill flex items-center gap-1 px-4 py-2">
          <button
            onClick={() => { vibrate(); onToggleTheme(); }}
            className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} className="text-foreground" /> : <Moon size={18} className="text-foreground" />}
          </button>
          <button
            onClick={() => { vibrate(); onToggleLocale(); }}
            className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors gap-1.5"
            aria-label="Toggle language"
          >
            <Globe size={18} className="text-foreground" />
            <span className="text-sm font-medium text-foreground uppercase">{locale}</span>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-center mt-1">
        <div className="glass-pill flex items-center gap-3 px-4 py-2">
          <span className="font-semibold text-foreground text-sm">bg.</span>
          <Sparkles size={14} className="text-primary" />
          <div className="w-px h-5 bg-border" />
          <button
            onClick={() => { vibrate(); onToggleTheme(); }}
            className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} className="text-foreground" /> : <Moon size={16} className="text-foreground" />}
          </button>
          <button
            onClick={() => { vibrate(); onToggleLocale(); }}
            className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors gap-1"
            aria-label="Toggle language"
          >
            <Globe size={16} className="text-foreground" />
            <span className="text-xs font-medium text-foreground uppercase">{locale}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
