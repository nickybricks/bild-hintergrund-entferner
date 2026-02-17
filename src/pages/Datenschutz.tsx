import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { detectLocale, translations } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Datenschutz = () => {
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
              {isDE ? 'Datenschutzerklärung' : 'Privacy Policy'}
            </h1>

            <div className="space-y-6 text-sm sm:text-base text-foreground leading-relaxed">
              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? '1. Datenschutz auf einen Blick' : '1. Privacy at a glance'}
                </h2>
                <p className="text-muted-foreground">
                  {isDE
                    ? 'Bei bgrnd.de werden keine personenbezogenen Daten erhoben, gespeichert oder verarbeitet. Die gesamte Bildverarbeitung findet ausschließlich lokal in deinem Browser statt. Es werden keine Bilder auf Server hochgeladen.'
                    : 'bgrnd.de does not collect, store, or process any personal data. All image processing takes place entirely locally in your browser. No images are uploaded to any server.'}
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? '2. Verantwortlicher' : '2. Data Controller'}
                </h2>
                <p>
                  Nick Algner<br />
                  Schlegelstr. 13<br />
                  10115 Berlin, Germany<br />
                  E-Mail: kontakt@bgrnd.de
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? '3. Google Analytics' : '3. Google Analytics'}
                </h2>
                <p className="text-muted-foreground">
                  {isDE
                    ? 'Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited („Google"). Google Analytics verwendet Cookies und ähnliche Technologien, um die Nutzung der Website zu analysieren. Die dabei erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert. Wir nutzen die IP-Anonymisierung, sodass Ihre IP-Adresse von Google innerhalb der EU/EWR gekürzt wird. Die Nutzung erfolgt auf Grundlage unseres berechtigten Interesses an der statistischen Analyse des Nutzerverhaltens (Art. 6 Abs. 1 lit. f DSGVO). Sie können die Erfassung durch Google Analytics verhindern, indem Sie ein Browser-Add-on installieren: https://tools.google.com/dlpage/gaoptout'
                    : 'This website uses Google Analytics 4, a web analytics service provided by Google Ireland Limited ("Google"). Google Analytics uses cookies and similar technologies to analyze the use of the website. The information generated about your use of this website is usually transferred to a Google server and stored there. We use IP anonymization, so your IP address is truncated by Google within the EU/EEA. Usage is based on our legitimate interest in statistical analysis of user behavior (Art. 6(1)(f) GDPR). You can prevent tracking by Google Analytics by installing a browser add-on: https://tools.google.com/dlpage/gaoptout'}
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? '4. Lokale Speicherung' : '4. Local Storage'}
                </h2>
                <p className="text-muted-foreground">
                  {isDE
                    ? 'Abgesehen von Google Analytics erhebt bgrnd.de keine weiteren personenbezogenen Daten. Die einzige zusätzliche lokale Speicherung (localStorage) dient der Speicherung deiner Theme-Einstellung (hell/dunkel).'
                    : 'Apart from Google Analytics, bgrnd.de does not collect any additional personal data. The only additional local storage (localStorage) is used to save your theme preference (light/dark).'}
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? '5. Bildverarbeitung' : '5. Image Processing'}
                </h2>
                <p className="text-muted-foreground">
                  {isDE
                    ? 'Alle hochgeladenen Bilder werden ausschließlich lokal in deinem Browser verarbeitet. Die Verarbeitung erfolgt mithilfe von KI-Modellen (WebAssembly/ONNX Runtime), die direkt im Browser ausgeführt werden. Deine Bilder verlassen zu keinem Zeitpunkt dein Gerät.'
                    : 'All uploaded images are processed exclusively locally in your browser. Processing is done using AI models (WebAssembly/ONNX Runtime) that run directly in the browser. Your images never leave your device at any point.'}
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? '6. Hosting' : '6. Hosting'}
                </h2>
                <p className="text-muted-foreground">
                  {isDE
                    ? 'Diese Website wird in Deutschland gehostet. Beim Aufrufen der Website werden technisch notwendige Verbindungsdaten (z.B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs) vom Hosting-Provider verarbeitet. Diese Daten werden nicht gespeichert oder ausgewertet.'
                    : 'This website is hosted in Germany. When accessing the website, technically necessary connection data (e.g., IP address, browser type, time of access) is processed by the hosting provider. This data is not stored or analyzed.'}
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-lg mb-2">
                  {isDE ? '7. Deine Rechte' : '7. Your Rights'}
                </h2>
                <p className="text-muted-foreground">
                  {isDE
                    ? 'Da wir keine personenbezogenen Daten erheben, entfallen die üblichen Betroffenenrechte (Auskunft, Löschung, Berichtigung etc.) weitgehend. Solltest du dennoch Fragen zum Datenschutz haben, kontaktiere uns unter kontakt@bgrnd.de.'
                    : 'Since we do not collect any personal data, the usual data subject rights (access, deletion, rectification, etc.) are largely not applicable. If you still have questions about data protection, contact us at kontakt@bgrnd.de.'}
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

export default Datenschutz;
