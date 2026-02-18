import { Link } from 'react-router-dom';
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
        <Link
          to="/blog"
          className="text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors underline-offset-2 hover:underline"
        >
          {isDE ? 'Ratgeber' : 'Guide'}
        </Link>
        <span className="text-muted-foreground text-xs">·</span>
        <Link
          to="/impressum"
          className="text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors underline-offset-2 hover:underline"
        >
          {isDE ? 'Impressum' : 'Imprint'}
        </Link>
        <span className="text-muted-foreground text-xs">·</span>
        <Link
          to="/datenschutz"
          className="text-muted-foreground hover:text-foreground text-xs sm:text-sm transition-colors underline-offset-2 hover:underline"
        >
          {isDE ? 'Datenschutz' : 'Privacy'}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
