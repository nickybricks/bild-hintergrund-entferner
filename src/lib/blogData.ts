import type { Locale } from '@/lib/translations';

export interface BlogPost {
  slug: string;
  titleDe: string;
  titleEn: string;
  descriptionDe: string;
  descriptionEn: string;
  date: string;
  author: string;
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'hintergrund-entfernen-kostenlos',
    titleDe: 'Hintergrund entfernen kostenlos – Die 5 besten Tools 2026 im Vergleich',
    titleEn: 'Remove Background Free – The 5 Best Tools 2026 Compared',
    descriptionDe: 'Hintergrund von Bildern kostenlos entfernen? Wir vergleichen die 5 besten Online-Tools 2026 – inkl. bgrnd.de, remove.bg & mehr. Mit Tipps für beste Ergebnisse.',
    descriptionEn: 'Remove image backgrounds for free? We compare the 5 best online tools 2026 – incl. bgrnd.de, remove.bg & more. With tips for best results.',
    date: '2026-02-19',
    author: 'bgrnd.de',
    relatedSlugs: ['produktfotos-freistellen', 'bewerbungsfoto-hintergrund-aendern', 'passfoto-hintergrund-entfernen'],
  },
  {
    slug: 'produktfotos-freistellen',
    titleDe: 'Produktfotos freistellen für Online-Shops – So geht\'s kostenlos',
    titleEn: 'Cut Out Product Photos for Online Shops – How To (Free)',
    descriptionDe: 'Professionelle Produktfotos für eBay, Amazon & Shopify? Lerne, wie du Produktbilder kostenlos freistellst und den Hintergrund entfernst.',
    descriptionEn: 'Professional product photos for eBay, Amazon & Shopify? Learn how to cut out product images for free and remove backgrounds.',
    date: '2026-02-19',
    author: 'bgrnd.de',
    relatedSlugs: ['hintergrund-entfernen-kostenlos', 'bild-freistellen-kostenlos'],
  },
  {
    slug: 'bewerbungsfoto-hintergrund-aendern',
    titleDe: 'Bewerbungsfoto Hintergrund ändern – Kostenlos & in Sekunden',
    titleEn: 'Change Application Photo Background – Free & in Seconds',
    descriptionDe: 'Bewerbungsfoto Hintergrund ändern oder entfernen – kostenlos und ohne Photoshop. So erstellst du professionelle Bewerbungsfotos mit bgrnd.de.',
    descriptionEn: 'Change or remove application photo background – free and without Photoshop. Create professional application photos with bgrnd.de.',
    date: '2026-02-19',
    author: 'bgrnd.de',
    relatedSlugs: ['passfoto-hintergrund-entfernen', 'hintergrund-entfernen-kostenlos'],
  },
  {
    slug: 'passfoto-hintergrund-entfernen',
    titleDe: 'Passfoto Hintergrund entfernen & weiß machen – Kostenlos online',
    titleEn: 'Remove Passport Photo Background & Make White – Free Online',
    descriptionDe: 'Passfoto Hintergrund entfernen und durch Weiß ersetzen – kostenlos mit bgrnd.de. Erfülle die biometrischen Anforderungen ohne Fotograf.',
    descriptionEn: 'Remove passport photo background and replace with white – free with bgrnd.de. Meet biometric requirements without a photographer.',
    date: '2026-02-19',
    author: 'bgrnd.de',
    relatedSlugs: ['bewerbungsfoto-hintergrund-aendern', 'hintergrund-entfernen-kostenlos'],
  },
  {
    slug: 'hintergrund-entfernen-tipps',
    titleDe: 'Hintergrund entfernen: 10 Tipps für perfekte Ergebnisse',
    titleEn: 'Remove Background: 10 Tips for Perfect Results',
    descriptionDe: 'Lerne, wie du mit KI-Tools wie bgrnd.de den Hintergrund deiner Bilder perfekt entfernst. Tipps für Haare, Produkte und schwierige Motive.',
    descriptionEn: 'Learn how to perfectly remove image backgrounds with AI tools like bgrnd.de. Tips for hair, products, and difficult subjects.',
    date: '2026-02-18',
    author: 'bgrnd.de',
    relatedSlugs: ['hintergrund-entfernen-kostenlos', 'bild-freistellen-kostenlos'],
  },
  {
    slug: 'bild-freistellen-kostenlos',
    titleDe: 'Bild freistellen kostenlos – Die besten Tools im Vergleich',
    titleEn: 'Free Image Cutout – Best Tools Compared',
    descriptionDe: 'Vergleich der besten kostenlosen Tools zum Bilder freistellen: bgrnd.de vs. remove.bg vs. Photoshop. Welches Tool ist das beste für dich?',
    descriptionEn: 'Comparison of the best free tools for image cutouts: bgrnd.de vs. remove.bg vs. Photoshop. Which tool is best for you?',
    date: '2026-02-18',
    author: 'bgrnd.de',
    relatedSlugs: ['hintergrund-entfernen-kostenlos', 'produktfotos-freistellen'],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostTitle(post: BlogPost, locale: Locale): string {
  return locale === 'de' ? post.titleDe : post.titleEn;
}

export function getPostDescription(post: BlogPost, locale: Locale): string {
  return locale === 'de' ? post.descriptionDe : post.descriptionEn;
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean) as BlogPost[];
}
