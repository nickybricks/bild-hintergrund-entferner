import { useState, useCallback, lazy, Suspense } from 'react';
import { detectLocale, translations } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UploadZone from '@/components/UploadZone';
import ProcessingView from '@/components/ProcessingView';
import ResultView from '@/components/ResultView';
import FeatureBadges from '@/components/FeatureBadges';

const WhySection = lazy(() => import('@/components/WhySection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const SEOContent = lazy(() => import('@/components/SEOContent'));

type AppState = 'upload' | 'processing' | 'result';

const Index = () => {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const [state, setState] = useState<AppState>('upload');
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const t = translations[locale];

  const toggleLocale = () => setLocale((l) => (l === 'de' ? 'en' : 'de'));

  const handleFileSelected = useCallback(async (file: File) => {
    setState('processing');
    setProgress(0);
    setError(null);

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
          ? 'Das Bild konnte nicht verarbeitet werden. Bitte versuche ein anderes Bild.'
          : 'Could not process the image. Please try a different image.'
      );
      setState('upload');
    }
  }, [locale]);

  const handleReset = useCallback(() => {
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
    setState('upload');
    setProgress(0);
    setError(null);
  }, [resultUrl]);

  return (
    <div className="dot-background min-h-screen flex flex-col [&>*]:relative [&>*]:z-10">
      <Header
        locale={locale}
        theme={theme}
        onToggleLocale={toggleLocale}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 flex flex-col items-center px-4 pt-12 sm:pt-20">
        <div className="w-full max-w-[800px] mx-auto">
          <div className="text-center mb-10 fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              {t.title}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mt-2">{t.subtitle}</p>
          </div>

          {error && (
            <div className="glass-card px-5 py-3 mb-6 text-sm text-destructive font-medium fade-in text-center">
              {error}
            </div>
          )}

          {state === 'upload' && (
            <UploadZone locale={locale} onFileSelected={handleFileSelected} onError={setError} />
          )}
          {state === 'processing' && (
            <ProcessingView locale={locale} progress={progress} />
          )}
          {state === 'result' && resultUrl && (
            <ResultView locale={locale} resultUrl={resultUrl} onReset={handleReset} />
          )}

          <FeatureBadges locale={locale} />
        </div>

        <Suspense fallback={null}>
          <SEOContent locale={locale} />
          <WhySection locale={locale} />
          <FAQSection locale={locale} />
        </Suspense>
      </main>

      <Footer locale={locale} />
    </div>
  );
};

export default Index;
