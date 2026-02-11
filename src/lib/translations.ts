export type Locale = 'de' | 'en';

export const translations = {
  de: {
    title: 'Background Remover',
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
  },
  en: {
    title: 'Background Remover',
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
  },
} as const;

export function detectLocale(): Locale {
  const lang = navigator.language?.toLowerCase() ?? '';
  return lang.startsWith('de') ? 'de' : 'en';
}
