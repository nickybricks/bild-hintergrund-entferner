import type { Locale } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

const Footer = ({ locale }: FooterProps) => {
  const isDE = locale === 'de';

  return (
    <footer className="w-full max-w-[1260px] mx-auto text-center mt-20 sm:mt-20 pb-8 px-4 fade-in">
      <p className="text-muted-foreground text-xs sm:text-sm">
        Made with ❤️ – 100% {isDE ? 'privat, kostenlos & DSGVO-konform' : 'private, free & GDPR compliant'}
      </p>
      <div className="flex items-center justify-center gap-4 mt-2">
        <button
          onClick={() => alert(isDE ? 'Impressum-Seite kommt bald.' : 'Imprint page coming soon.')}
          className="text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors underline-offset-2 hover:underline"
        >
          {isDE ? 'Impressum' : 'Imprint'}
        </button>
        <span className="text-muted-foreground text-xs">·</span>
        <button
          onClick={() => alert(isDE ? 'Datenschutz-Seite kommt bald.' : 'Privacy policy page coming soon.')}
          className="text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors underline-offset-2 hover:underline"
        >
          {isDE ? 'Datenschutz' : 'Privacy'}
        </button>
      </div>
    </footer>
  );
};

export default Footer;
