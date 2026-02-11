import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { detectLocale, translations } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import { useCredits } from '@/hooks/useCredits';
import { toast } from 'sonner';
import LanguageToggle from '@/components/LanguageToggle';
import CreditBadge from '@/components/CreditBadge';
import UploadZone from '@/components/UploadZone';
import ProcessingView from '@/components/ProcessingView';
import ResultView from '@/components/ResultView';
import FeatureBadges from '@/components/FeatureBadges';
import PurchaseModal from '@/components/PurchaseModal';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

type AppState = 'upload' | 'processing' | 'result';

const Index = () => {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const [state, setState] = useState<AppState>('upload');
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const { credits, token, consumeCredit, addCredits } = useCredits();
  const t = translations[locale];

  const toggleLocale = () => setLocale((l) => (l === 'de' ? 'en' : 'de'));

  // Handle Stripe return
  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (!sessionId) return;

    const verify = async () => {
      try {
        const res = await fetch(`${API_URL}/api/verify-payment?session_id=${sessionId}`);
        if (!res.ok) throw new Error('Verification failed');
        const data = await res.json();
        addCredits(data.credits, data.token);
        toast.success(`✅ ${data.credits} ${t.creditsActivated}`);
      } catch (err) {
        console.error('Payment verification failed:', err);
      } finally {
        setSearchParams({}, { replace: true });
      }
    };

    verify();
  }, [searchParams, setSearchParams, addCredits, t.creditsActivated]);

  const handleFileSelected = useCallback(async (file: File) => {
    setState('processing');
    setProgress(0);
    setError(null);
    setOriginalFile(file);

    try {
      const { processBackgroundRemoval } = await import('@/lib/backgroundRemoval');
      const result = await processBackgroundRemoval(file, setProgress);

      const url = URL.createObjectURL(result);
      setResultUrl(url);
      setState('result');
    } catch (err) {
      console.error('Background removal failed:', err);
      setError(
        locale === 'de'
          ? 'Das Bild konnte nicht verarbeitet werden. Bitte versuche ein anderes Bild oder ein kleineres Format (max. 4096×4096px).'
          : 'Could not process the image. Please try a different image or a smaller size (max 4096×4096px).'
      );
      setState('upload');
    }
  }, [locale]);

  const handleReset = useCallback(() => {
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
    setOriginalFile(null);
    setState('upload');
    setProgress(0);
    setError(null);
  }, [resultUrl]);

  return (
    <div className="mesh-background min-h-screen flex flex-col items-center px-4 py-8 sm:py-16">
      <div className="w-full max-w-lg flex items-center justify-between mb-10 fade-in">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{t.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <CreditBadge locale={locale} credits={credits} />
          <LanguageToggle locale={locale} onToggle={toggleLocale} />
        </div>
      </div>

      {error && (
        <div className="glass-card px-5 py-3 mb-6 text-sm text-destructive font-medium fade-in">
          {error}
        </div>
      )}

      {state === 'upload' && (
        <UploadZone locale={locale} onFileSelected={handleFileSelected} onError={setError} />
      )}
      {state === 'processing' && (
        <ProcessingView locale={locale} progress={progress} />
      )}
      {state === 'result' && resultUrl && originalFile && (
        <ResultView
          locale={locale}
          resultUrl={resultUrl}
          originalFile={originalFile}
          onReset={handleReset}
          credits={credits}
          creditsToken={token}
          onConsumeCredit={consumeCredit}
          onShowPurchase={() => setPurchaseOpen(true)}
        />
      )}

      <FeatureBadges locale={locale} />

      <PurchaseModal
        locale={locale}
        open={purchaseOpen}
        onOpenChange={setPurchaseOpen}
      />
    </div>
  );
};

export default Index;
