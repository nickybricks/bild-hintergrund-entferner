import { Sparkles } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface ProcessingViewProps {
  locale: Locale;
  progress: number;
}

const ProcessingView = ({ locale, progress }: ProcessingViewProps) => {
  const t = translations[locale];

  return (
    <div className="fade-in w-full max-w-[600px] mx-auto">
      <div className="glass-card-lg flex flex-col items-center gap-6 p-12">
        <div className="relative">
          <Sparkles size={32} className="text-primary animate-pulse" />
        </div>
        <p className="text-foreground font-medium text-lg">{t.processing}</p>
        <div className="w-full h-2 rounded-full overflow-hidden bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${Math.max(progress, 2)}%` }}
          />
        </div>
        <p className="text-muted-foreground text-sm tabular-nums">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default ProcessingView;
