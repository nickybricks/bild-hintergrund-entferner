export type Locale = 'de' | 'en';

export const translations = {
  de: {
    title: 'Bild Hintergrund entfernen – kostenlos & ohne Anmeldung',
    subtitle: 'Entferne Bildhintergründe direkt im Browser – kostenlos & privat.',
    dropzone: 'Bild hierher ziehen',
    dropzoneOr: 'oder',
    uploadButton: 'Bild auswählen',
    formats: 'PNG, JPG, WEBP · max. 10 MB',
    processing: 'Hintergrund wird entfernt…',
    done: 'Fertig!',
    download: 'Als PNG herunterladen',
    newImage: 'Neues Bild',
    badgePrivate: 'Privat',
    badgePrivateDesc: 'Alles läuft lokal in deinem Browser',
    badgeFree: 'Kostenlos',
    badgeFreeDesc: 'Keine Anmeldung, keine Kosten',
    badgeGdpr: 'DSGVO-konform',
    badgeGdprDesc: 'Keine Daten verlassen dein Gerät',
    errorSize: 'Datei ist zu groß (max. 10 MB)',
    errorFormat: 'Ungültiges Format (PNG, JPG oder WEBP)',
    errorGeneric: 'Fehler bei der Verarbeitung',

    // SEO Intro
    seoIntroTitle: 'Hintergrund entfernen – kostenlos und in Sekunden',
    seoIntroText: 'Mit bgrnd.de kannst du den Hintergrund deiner Bilder in wenigen Sekunden entfernen – komplett kostenlos und ohne Anmeldung. Unser Background Remover läuft direkt in deinem Browser: Kein Upload auf externe Server, keine Wartezeit, keine versteckten Kosten. Egal ob du ein Foto freistellen, ein Produktbild für deinen Online-Shop optimieren oder ein Profilbild erstellen möchtest – bgrnd.de erledigt das für dich. Die KI-basierte Bildverarbeitung erkennt Vorder- und Hintergrund automatisch und liefert dir ein freigestelltes Bild als PNG mit transparentem Hintergrund. Deine Daten bleiben dabei vollständig auf deinem Gerät – DSGVO-konform und privat.',

    // How it works
    howItWorksTitle: 'So funktioniert bgrnd.de',
    stepLabel: 'Schritt',
    stepTitle1: 'Bild hochladen',
    stepText1: 'Lade dein Bild hoch oder ziehe es per Drag & Drop in den Upload-Bereich. Unterstützt werden PNG, JPG und WebP.',
    stepTitle2: 'KI entfernt den Hintergrund',
    stepText2: 'Unser KI-Modell erkennt automatisch den Vordergrund und entfernt den Hintergrund – direkt in deinem Browser.',
    stepTitle3: 'Ergebnis herunterladen',
    stepText3: 'Lade dein freigestelltes Bild als PNG mit transparentem Hintergrund herunter – sofort und kostenlos.',

    // Why bgrnd.de (6 items)
    whyTitle: 'Warum bgrnd.de?',
    whyPrivateTitle: '100% Privat',
    whyPrivateText: 'Deine Bilder verlassen niemals deinen Browser. Keine Uploads, keine Server, keine Cloud.',
    whyFreeTitle: 'Komplett kostenlos',
    whyFreeText: 'Keine versteckten Kosten, keine Limits, keine Registrierung. Unbegrenzt Bilder freistellen.',
    whyGdprTitle: 'DSGVO-konform',
    whyGdprText: 'Gehostet in Deutschland. Keine Datenübertragung deiner Bilder. Wir nutzen Google Analytics zur Nutzungsanalyse.',
    whyMobileTitle: 'Überall nutzbar',
    whyMobileText: 'Funktioniert auf Desktop, Tablet und Smartphone. Keine Installation nötig.',
    whyBrowserTitle: 'Direkt im Browser',
    whyBrowserText: 'Keine Software installieren, kein Plugin nötig. Einfach Seite öffnen und loslegen.',
    whyQualityTitle: 'Hohe Qualität durch KI',
    whyQualityText: 'Modernste KI erkennt feine Details wie Haare, Fell und komplexe Kanten. Ausgabe in voller Originalauflösung.',

    // Use cases
    useCasesTitle: 'Für wen ist bgrnd.de geeignet?',
    useCasesText: 'bgrnd.de eignet sich für alle, die schnell und unkompliziert Bildhintergründe entfernen möchten – ohne teure Software oder Bildbearbeitungskenntnisse.',
    useCaseTags: ['E-Commerce & Produktfotos', 'Social Media Posts', 'Passfotos & Bewerbungsfotos', 'Präsentationen', 'eBay & Amazon Listings', 'Kreative Projekte'] as const,

    // FAQ (7 items)
    faqTitle: 'Häufige Fragen',
    faqQ1: 'Ist bgrnd.de wirklich kostenlos?',
    faqA1: 'Ja, bgrnd.de ist zu 100% kostenlos. Es gibt keine versteckten Kosten, keine Wasserzeichen und keine Begrenzung der Anzahl an Bildern. Du kannst so viele Bilder freistellen wie du möchtest.',
    faqQ2: 'Werden meine Bilder auf einen Server hochgeladen?',
    faqA2: 'Nein. Die gesamte Bildverarbeitung findet direkt in deinem Browser statt. Deine Bilder verlassen niemals dein Gerät – das macht bgrnd.de besonders datenschutzfreundlich und DSGVO-konform.',
    faqQ3: 'Welche Bildformate werden unterstützt?',
    faqA3: 'bgrnd.de unterstützt alle gängigen Bildformate wie JPG, JPEG, PNG und WebP. Das Ergebnis wird als PNG mit transparentem Hintergrund ausgegeben.',
    faqQ4: 'Wie gut ist die Qualität der Hintergrundentfernung?',
    faqA4: 'bgrnd.de nutzt modernste KI-Technologie, die Haare, feine Kanten und komplexe Formen präzise erkennt. Die Ergebnisse sind vergleichbar mit professioneller Bildbearbeitung.',
    faqQ5: 'Kann ich bgrnd.de auf dem Handy nutzen?',
    faqA5: 'Ja, bgrnd.de funktioniert auf allen Geräten – Desktop, Tablet und Smartphone. Du brauchst nur einen modernen Browser.',
    faqQ6: 'Was bedeutet DSGVO-konform?',
    faqA6: 'DSGVO steht für Datenschutz-Grundverordnung. Da bei bgrnd.de keine Bilder übertragen werden, ist die Nutzung datenschutzfreundlich. Wir nutzen Google Analytics zur Nutzungsanalyse – Details findest du in unserer Datenschutzerklärung. Die Website wird in Deutschland gehostet.',
    faqQ7: 'Was ist der Unterschied zu remove.bg?',
    faqA7: 'Im Gegensatz zu vielen anderen Tools lädt bgrnd.de deine Bilder nicht auf externe Server hoch. Alles passiert lokal in deinem Browser, was maximale Privatsphäre garantiert. Außerdem ist bgrnd.de komplett kostenlos ohne Einschränkungen.',
  },
  en: {
    title: 'Remove Image Background – Free & No Signup',
    subtitle: 'Remove image backgrounds right in your browser – free & private.',
    dropzone: 'Drop image here',
    dropzoneOr: 'or',
    uploadButton: 'Choose image',
    formats: 'PNG, JPG, WEBP · max 10 MB',
    processing: 'Removing background…',
    done: 'Done!',
    download: 'Download as PNG',
    newImage: 'New image',
    badgePrivate: 'Private',
    badgePrivateDesc: 'Everything runs locally in your browser',
    badgeFree: 'Free',
    badgeFreeDesc: 'No signup, no cost',
    badgeGdpr: 'GDPR compliant',
    badgeGdprDesc: 'No data leaves your device',
    errorSize: 'File is too large (max 10 MB)',
    errorFormat: 'Invalid format (PNG, JPG, or WEBP)',
    errorGeneric: 'Error during processing',

    // SEO Intro
    seoIntroTitle: 'Remove Backgrounds – Free and in Seconds',
    seoIntroText: 'With bgrnd.de you can remove image backgrounds in seconds – completely free and without registration. Our background remover runs directly in your browser: no upload to external servers, no waiting, no hidden costs. Whether you want to cut out a photo, optimize a product image for your online shop, or create a profile picture – bgrnd.de does it for you. The AI-powered image processing automatically detects foreground and background and delivers a cut-out image as PNG with transparent background. Your data stays entirely on your device – GDPR compliant and private.',

    // How it works
    howItWorksTitle: 'How bgrnd.de works',
    stepLabel: 'Step',
    stepTitle1: 'Upload image',
    stepText1: 'Upload your image or drag & drop it into the upload area. Supports PNG, JPG, and WebP.',
    stepTitle2: 'AI removes the background',
    stepText2: 'Our AI model automatically detects the foreground and removes the background – right in your browser.',
    stepTitle3: 'Download result',
    stepText3: 'Download your cut-out image as PNG with transparent background – instantly and for free.',

    // Why bgrnd.de (6 items)
    whyTitle: 'Why bgrnd.de?',
    whyPrivateTitle: '100% Private',
    whyPrivateText: 'Your images never leave your browser. No uploads, no servers, no cloud.',
    whyFreeTitle: 'Completely free',
    whyFreeText: 'No hidden costs, no limits, no registration. Remove backgrounds from unlimited images.',
    whyGdprTitle: 'GDPR compliant',
    whyGdprText: 'Hosted in Germany. No transfer of your image data. We use Google Analytics for usage analysis.',
    whyMobileTitle: 'Works everywhere',
    whyMobileText: 'Works on desktop, tablet, and smartphone. No installation required.',
    whyBrowserTitle: 'Runs in your browser',
    whyBrowserText: 'No software to install, no plugins needed. Just open the page and get started.',
    whyQualityTitle: 'High quality AI',
    whyQualityText: 'State-of-the-art AI detects fine details like hair, fur, and complex edges. Output in full original resolution.',

    // Use cases
    useCasesTitle: 'Who is bgrnd.de for?',
    useCasesText: 'bgrnd.de is perfect for anyone who needs to remove image backgrounds quickly and easily – without expensive software or image editing skills.',
    useCaseTags: ['E-Commerce & Product Photos', 'Social Media Posts', 'Passport & Application Photos', 'Presentations', 'eBay & Amazon Listings', 'Creative Projects'] as const,

    // FAQ (7 items)
    faqTitle: 'Frequently Asked Questions',
    faqQ1: 'Is bgrnd.de really free?',
    faqA1: 'Yes, bgrnd.de is 100% free. There are no hidden costs, no watermarks, and no limit on the number of images. You can remove backgrounds from as many images as you like.',
    faqQ2: 'Are my images uploaded to a server?',
    faqA2: 'No. All image processing happens directly in your browser. Your images never leave your device – making bgrnd.de especially privacy-friendly and GDPR compliant.',
    faqQ3: 'Which image formats are supported?',
    faqA3: 'bgrnd.de supports all common image formats like JPG, JPEG, PNG, and WebP. The result is always output as a PNG with a transparent background.',
    faqQ4: 'How good is the background removal quality?',
    faqA4: 'bgrnd.de uses state-of-the-art AI technology that precisely detects hair, fine edges, and complex shapes. Results are comparable to professional image editing.',
    faqQ5: 'Can I use bgrnd.de on mobile?',
    faqA5: 'Yes, bgrnd.de works on all devices – desktop, tablet, and smartphone. You just need a modern browser.',
    faqQ6: 'What does GDPR compliant mean?',
    faqA6: 'GDPR stands for General Data Protection Regulation. Since bgrnd.de does not transfer any images, usage is privacy-friendly. We use Google Analytics for usage analysis – see our privacy policy for details. The website is hosted in Germany.',
    faqQ7: 'What\'s the difference to remove.bg?',
    faqA7: 'Unlike many other tools, bgrnd.de does not upload your images to external servers. Everything happens locally in your browser, guaranteeing maximum privacy. Plus, bgrnd.de is completely free without any restrictions.',
  },
} as const;

export function detectLocale(): Locale {
  const lang = navigator.language?.toLowerCase() ?? '';
  return lang.startsWith('de') ? 'de' : 'en';
}
