import { Download, RefreshCw } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface ResultViewProps {
  locale: Locale;
  resultUrl: string;
  onReset: () => void;
}

const ResultView = ({ locale, resultUrl, onReset }: ResultViewProps) => {
  const t = translations[locale];

  const vibrate = () => {
    if (navigator.vibrate) navigator.vibrate(10);
  };

  const handleDownload = () => {
    vibrate();
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = 'background-removed.png';
    a.click();
  };

  return (
    <div className="slide-up w-full max-w-[600px] mx-auto">
      <div className="glass-card-lg overflow-hidden">
        <div className="checkerboard p-4">
          <img
            src={resultUrl}
            alt={locale === 'de' ? 'Bild mit entferntem Hintergrund' : 'Image with removed background'}
            width={600}
            height={400}
            className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
          />
        </div>
        <div className="flex gap-3 p-5">
          <button
            onClick={handleDownload}
            className="glass-button-primary flex-1 flex items-center justify-center gap-2 px-4 py-3 font-medium text-sm"
          >
            <Download size={18} />
            {t.download}
          </button>
          <button
            onClick={() => { vibrate(); onReset(); }}
            className="flex items-center justify-center gap-2 px-4 py-3 font-medium text-sm text-primary border border-primary/40 hover:border-primary rounded-2xl transition-all hover:bg-primary/5"
          >
            <RefreshCw size={18} />
            {t.newImage}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
