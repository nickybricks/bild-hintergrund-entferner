import { useState, useCallback } from 'react';
import 'onnxruntime-web';
import { removeBackground } from '@imgly/background-removal';
import { detectLocale, translations } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import LanguageToggle from '@/components/LanguageToggle';
import UploadZone from '@/components/UploadZone';
import ProcessingView from '@/components/ProcessingView';
import ResultView from '@/components/ResultView';
import FeatureBadges from '@/components/FeatureBadges';

type AppState = 'upload' | 'processing' | 'result';

const Index = () => {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const [state, setState] = useState<AppState>('upload');
  const [progress, setProgress] = useState(0);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const t = translations[locale];

  const toggleLocale = () => setLocale((l) => (l === 'de' ? 'en' : 'de'));

  const handleFileSelected = useCallback(async (file: File) => {
    setState('processing');
    setProgress(0);
    setError(null);

    try {
      // Convert File to Blob for compatibility
      const inputBlob = new Blob([await file.arrayBuffer()], { type: file.type });

      const result = await removeBackground(inputBlob, {
        model: 'isnet_quint8',
        progress: (key: string, current: number, total: number) => {
          console.log(`Processing ${key}: ${current}/${total}`);
          if (total > 0) {
            setProgress((current / total) * 100);
          }
        },
      });

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
    setState('upload');
    setProgress(0);
    setError(null);
  }, [resultUrl]);

  return (
    <div className="mesh-background min-h-screen flex flex-col items-center px-4 py-8 sm:py-16">
      {/* Header */}
      <div className="w-full max-w-lg flex items-center justify-between mb-10 fade-in">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{t.subtitle}</p>
        </div>
        <LanguageToggle locale={locale} onToggle={toggleLocale} />
      </div>

      {/* Error */}
      {error && (
        <div className="glass-card px-5 py-3 mb-6 text-sm text-destructive font-medium fade-in">
          {error}
        </div>
      )}

      {/* Main content */}
      {state === 'upload' && (
        <UploadZone locale={locale} onFileSelected={handleFileSelected} onError={setError} />
      )}
      {state === 'processing' && (
        <ProcessingView locale={locale} progress={progress} />
      )}
      {state === 'result' && resultUrl && (
        <ResultView locale={locale} resultUrl={resultUrl} onReset={handleReset} />
      )}

      {/* Footer badges */}
      <FeatureBadges locale={locale} />
    </div>
  );
};

export default Index;
