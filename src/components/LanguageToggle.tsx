import { Globe } from 'lucide-react';
import type { Locale } from '@/lib/translations';

interface LanguageToggleProps {
  locale: Locale;
  onToggle: () => void;
}

const LanguageToggle = ({ locale, onToggle }: LanguageToggleProps) => {
  const vibrate = () => {
    if (navigator.vibrate) navigator.vibrate(10);
  };

  return (
    <button
      onClick={() => { vibrate(); onToggle(); }}
      className="glass-button flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground cursor-pointer"
      aria-label="Toggle language"
    >
      <Globe size={18} />
      <span className="uppercase">{locale}</span>
    </button>
  );
};

export default LanguageToggle;
