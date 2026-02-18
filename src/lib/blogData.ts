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
    slug: 'hintergrund-entfernen-tipps',
    titleDe: 'Hintergrund entfernen: 10 Tipps für perfekte Ergebnisse',
    titleEn: 'Remove Background: 10 Tips for Perfect Results',
    descriptionDe: 'Lerne, wie du mit KI-Tools wie bgrnd.de den Hintergrund deiner Bilder perfekt entfernst. Tipps für Haare, Produkte und schwierige Motive.',
    descriptionEn: 'Learn how to perfectly remove image backgrounds with AI tools like bgrnd.de. Tips for hair, products, and difficult subjects.',
    date: '2026-02-18',
    author: 'bgrnd.de',
    relatedSlugs: ['produktfotos-freistellen', 'bild-freistellen-kostenlos'],
  },
  {
    slug: 'produktfotos-freistellen',
    titleDe: 'Produktfotos freistellen für Online-Shops – So gehts',
    titleEn: 'Cut Out Product Photos for Online Shops – How To',
    descriptionDe: 'Professionelle Produktfotos mit transparentem Hintergrund erstellen – kostenlos und ohne Photoshop. Ideal für Amazon, eBay und deinen eigenen Shop.',
    descriptionEn: 'Create professional product photos with transparent backgrounds – free and without Photoshop. Ideal for Amazon, eBay, and your own shop.',
    date: '2026-02-18',
    author: 'bgrnd.de',
    relatedSlugs: ['hintergrund-entfernen-tipps', 'bild-freistellen-kostenlos'],
  },
  {
    slug: 'bild-freistellen-kostenlos',
    titleDe: 'Bild freistellen kostenlos – Die besten Tools im Vergleich',
    titleEn: 'Free Image Cutout – Best Tools Compared',
    descriptionDe: 'Vergleich der besten kostenlosen Tools zum Bilder freistellen: bgrnd.de vs. remove.bg vs. Photoshop. Welches Tool ist das beste für dich?',
    descriptionEn: 'Comparison of the best free tools for image cutouts: bgrnd.de vs. remove.bg vs. Photoshop. Which tool is best for you?',
    date: '2026-02-18',
    author: 'bgrnd.de',
    relatedSlugs: ['hintergrund-entfernen-tipps', 'produktfotos-freistellen'],
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
