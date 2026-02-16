import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { detectLocale, translations } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Impressum = () => {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const { theme, toggleTheme } = useTheme();
  const toggleLocale = () => setLocale((l) => (l === 'de' ? 'en' : 'de'));
  const isDE = locale === 'de';

  return (
    <div className="dot-background min-h-screen flex flex-col">
      <Header locale={locale} theme={theme} onToggleLocale={toggleLocale} onToggleTheme={toggleTheme} />

      <main className="flex-1 flex flex-col items-center px-4 pt-12 sm:pt-20">
        <div className="w-full max-w-[800px] mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            {isDE ? 'Zurück zur Startseite' : 'Back to home'}
          </Link>

          <div className="glass-card p-6 sm:p-10 fade-in">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              {isDE ? 'Impressum' : 'Imprint'}
            </h1>

            <div className="space-y-6 text-sm sm:text-base text-foreground leading-relaxed">
              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
                </h2>
                <p>
                  Nick Algner<br />
                  Schlegelstr. 13<br />
                  10115 Berlin<br />
                  Germany
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">{isDE ? 'Kontakt' : 'Contact'}</h2>
                <p>
                  E-Mail: kontakt@bgrnd.de
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV' : 'Responsible for content according to § 55 Abs. 2 RStV'}
                </h2>
                <p>
                  Nick Algner<br />
                  Schlegelstr. 13<br />
                  10115 Berlin
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? 'Haftungsausschluss' : 'Disclaimer'}
                </h2>
                <p className="text-muted-foreground">
                  {isDE
                    ? 'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.'
                    : 'The contents of this website have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general legislation pursuant to § 7 para. 1 TMG.'}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
};

export default Impressum;
