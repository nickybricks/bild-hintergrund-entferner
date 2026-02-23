import { Link } from 'react-router-dom';
import type { Locale } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

const Footer = ({ locale }: FooterProps) => {
  const isDE = locale === 'de';

  const linkClass =
    'text-muted-foreground hover:text-foreground text-sm transition-colors underline-offset-2 hover:underline';

  return (
    <footer className="w-full mt-20 sm:mt-24 pb-8 px-4">
      <div className="glass-card max-w-[1260px] mx-auto p-6 sm:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Tool */}
          <nav aria-label={isDE ? 'Tool-Navigation' : 'Tool navigation'}>
            <h3 className="text-foreground font-semibold text-sm mb-3">Tool</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={linkClass}>
                  {isDE ? 'Hintergrund entfernen' : 'Remove background'}
                </Link>
              </li>
              <li>
                <a href="/#how-it-works" className={linkClass}>
                  {isDE ? "So funktioniert's" : 'How it works'}
                </a>
              </li>
              <li>
                <a href="/#faq" className={linkClass}>
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Ratgeber */}
          <nav aria-label={isDE ? 'Ratgeber-Navigation' : 'Guide navigation'}>
            <h3 className="text-foreground font-semibold text-sm mb-3">
              {isDE ? 'Ratgeber' : 'Guides'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/hintergrund-entfernen-kostenlos" className={linkClass}>
                  {isDE ? 'Hintergrund entfernen: Tools im Vergleich' : 'Background removal: Tool comparison'}
                </Link>
              </li>
              <li>
                <Link to="/blog/produktfotos-freistellen" className={linkClass}>
                  {isDE ? 'Produktfotos freistellen' : 'Cut out product photos'}
                </Link>
              </li>
              <li>
                <Link to="/blog/bewerbungsfoto-hintergrund-aendern" className={linkClass}>
                  {isDE ? 'Bewerbungsfoto Hintergrund ändern' : 'Change application photo background'}
                </Link>
              </li>
              <li>
                <Link to="/blog/passfoto-hintergrund-entfernen" className={linkClass}>
                  {isDE ? 'Passfoto Hintergrund entfernen' : 'Remove passport photo background'}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Rechtliches */}
          <nav aria-label={isDE ? 'Rechtliche Navigation' : 'Legal navigation'}>
            <h3 className="text-foreground font-semibold text-sm mb-3">
              {isDE ? 'Rechtliches' : 'Legal'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/datenschutz" className={linkClass}>
                  {isDE ? 'Datenschutz' : 'Privacy policy'}
                </Link>
              </li>
              <li>
                <Link to="/impressum" className={linkClass}>
                  {isDE ? 'Impressum' : 'Imprint'}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-5 border-t border-border/40 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2026 bgrnd.de – {isDE ? 'Hintergrund entfernen, kostenlos & privat' : 'Remove backgrounds, free & private'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
