import { useState, useRef, useCallback } from 'react';
import { Upload, Image } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface UploadZoneProps {
  locale: Locale;
  onFileSelected: (file: File) => void;
  onError: (msg: string) => void;
}

const MAX_SIZE = 10 * 1024 * 1024;
const ACCEPTED = ['image/png', 'image/jpeg', 'image/webp'];

const UploadZone = ({ locale, onFileSelected, onError }: UploadZoneProps) => {
  const t = translations[locale];
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = typeof window !== 'undefined' && 'ontouchstart' in window;

  const vibrate = () => {
    if (navigator.vibrate) navigator.vibrate(10);
  };

  const validate = useCallback((file: File): boolean => {
    if (!ACCEPTED.includes(file.type)) {
      onError(t.errorFormat);
      return false;
    }
    if (file.size > MAX_SIZE) {
      onError(t.errorSize);
      return false;
    }
    return true;
  }, [onError, t]);

  const handleFile = useCallback((file: File) => {
    if (validate(file)) {
      onFileSelected(file);
    }
  }, [validate, onFileSelected]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, [handleFile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="fade-in w-full max-w-[600px] mx-auto">
      {!isMobile ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`glass-card-lg flex flex-col items-center justify-center gap-4 p-12 cursor-pointer transition-all duration-200 border-2 border-dashed border-primary/40 hover:border-primary/80 ${
            dragOver ? 'drop-zone-active' : ''
          }`}
          onClick={() => { vibrate(); inputRef.current?.click(); }}
        >
          <div className="glass-card p-4 rounded-2xl">
            <Upload size={28} className="text-primary" />
          </div>
          <div className="text-center">
            <p className="text-foreground font-medium text-lg">{t.dropzone}</p>
            <p className="text-muted-foreground text-sm mt-1">{t.dropzoneOr}</p>
          </div>
          <button className="glass-button-primary px-6 py-2.5 font-medium text-sm mt-1">
            {t.uploadButton}
          </button>
          <p className="text-muted-foreground text-xs mt-1">{t.formats}</p>
        </div>
      ) : (
        <div className="glass-card-lg flex flex-col items-center justify-center gap-5 p-10 border-2 border-dashed border-primary/40">
          <div className="glass-card p-4 rounded-2xl">
            <Image size={28} className="text-primary" />
          </div>
          <button
            onClick={() => { vibrate(); inputRef.current?.click(); }}
            className="glass-button-primary px-8 py-3 font-medium text-base"
          >
            {t.uploadButton}
          </button>
          <p className="text-muted-foreground text-xs">{t.formats}</p>
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept=".png,.jpg,.jpeg,.webp"
        onChange={handleInputChange}
        className="hidden"
      />
    </div>
  );
};

export default UploadZone;
