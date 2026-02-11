import { useState } from 'react';
import { Download, RefreshCw, Sparkles, Loader2 } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface ResultViewProps {
  locale: Locale;
  resultUrl: string;
  originalFile: File;
  onReset: () => void;
  credits: number;
  creditsToken: string | null;
  onConsumeCredit: () => void;
  onShowPurchase: () => void;
}

const ResultView = ({
  locale, resultUrl, originalFile, onReset,
  credits, creditsToken, onConsumeCredit, onShowPurchase,
}: ResultViewProps) => {
  const t = translations[locale];
  const [hdProcessing, setHdProcessing] = useState(false);
  const [hdUrl, setHdUrl] = useState<string | null>(null);

  const vibrate = () => {
    if (navigator.vibrate) navigator.vibrate(10);
  };

  const displayUrl = hdUrl || resultUrl;

  const handleDownload = () => {
    vibrate();
    const a = document.createElement('a');
    a.href = displayUrl;
    a.download = hdUrl ? 'background-removed-hd.png' : 'background-removed.png';
    a.click();
  };

  const handleHd = async () => {
    vibrate();

    if (credits <= 0) {
      onShowPurchase();
      return;
    }

    setHdProcessing(true);
    try {
      const formData = new FormData();
      formData.append('file', originalFile);

      const res = await fetch(`${API_URL}/api/remove-bg`, {
        method: 'POST',
        headers: { 'x-credits-token': creditsToken || '' },
        body: formData,
      });

      if (!res.ok) throw new Error('HD failed');

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setHdUrl(url);
      onConsumeCredit();
    } catch (err) {
      console.error('HD processing failed:', err);
      alert(t.hdError);
    } finally {
      setHdProcessing(false);
    }
  };

  return (
    <div className="slide-up w-full max-w-lg mx-auto">
      <div className="glass-card-lg overflow-hidden">
        <div className="checkerboard p-4">
          <img
            src={displayUrl}
            alt="Result"
            className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-3 p-5">
          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="glass-button-primary flex-1 flex items-center justify-center gap-2 px-4 py-3 font-medium text-sm"
            >
              <Download size={18} />
              {t.download}
            </button>
            <button
              onClick={() => { vibrate(); onReset(); }}
              className="glass-button flex items-center justify-center gap-2 px-4 py-3 font-medium text-sm text-foreground"
            >
              <RefreshCw size={18} />
              {t.newImage}
            </button>
          </div>

          {!hdUrl && (
            <button
              onClick={handleHd}
              disabled={hdProcessing}
              className="glass-button relative flex items-center justify-center gap-2 px-4 py-3 font-medium text-sm text-foreground overflow-hidden group"
              style={{
                background: 'linear-gradient(var(--glass-bg), var(--glass-bg)) padding-box, linear-gradient(135deg, hsl(var(--primary)), hsl(260 80% 65%)) border-box',
                border: '1.5px solid transparent',
              }}
            >
              {hdProcessing ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  {t.hdProcessing}
                </>
              ) : (
                <>
                  <Sparkles size={18} className="text-primary" />
                  {t.hdQuality}
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultView;
