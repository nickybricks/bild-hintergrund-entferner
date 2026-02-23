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
    <header className="sticky top-0 z-50 w-full">
      <div className="max-w-[1260px] mx-auto px-6 pt-4 pb-2">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between">
          <div className="glass-pill flex items-center gap-2 px-5 h-11">
            <span className="font-semibold text-foreground">bg.</span>
            <Sparkles size={16} className="text-primary" />
          </div>

          <div className="glass-pill flex items-center gap-1 px-4 h-11">
            <button
              onClick={() => { vibrate(); onToggleTheme(); }}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} className="text-foreground" /> : <Moon size={18} className="text-foreground" />}
            </button>
            <button
              onClick={() => { vibrate(); onToggleLocale(); }}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors gap-1.5"
              aria-label="Toggle language"
            >
              <Globe size={18} className="text-foreground" />
              <span className="text-sm font-medium text-foreground uppercase">{locale}</span>
            </button>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center justify-between">
          <div className="glass-pill flex items-center gap-2 px-4 h-10">
            <span className="font-semibold text-foreground text-sm">bg.</span>
            <Sparkles size={14} className="text-primary" />
          </div>
          <div className="glass-pill flex items-center gap-1 px-3 h-10">
            <button
              onClick={() => { vibrate(); onToggleTheme(); }}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} className="text-foreground" /> : <Moon size={16} className="text-foreground" />}
            </button>
            <button
              onClick={() => { vibrate(); onToggleLocale(); }}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors gap-1"
              aria-label="Toggle language"
            >
              <Globe size={16} className="text-foreground" />
              <span className="text-xs font-medium text-foreground uppercase">{locale}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
