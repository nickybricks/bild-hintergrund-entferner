import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';
import { detectLocale, translations } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import { useTheme } from '@/hooks/useTheme';
import { blogPosts, getPostTitle, getPostDescription } from '@/lib/blogData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

const BlogOverview = () => {
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const { theme, toggleTheme } = useTheme();
  const toggleLocale = () => setLocale((l) => (l === 'de' ? 'en' : 'de'));
  const isDE = locale === 'de';

  const pageTitle = isDE
    ? 'Ratgeber: Bilder bearbeiten & Hintergrund entfernen | bgrnd.de'
    : 'Guide: Edit Images & Remove Backgrounds | bgrnd.de';
  const pageDesc = isDE
    ? 'Tipps und Anleitungen zum Bilder freistellen, Hintergrund entfernen und Produktfotos optimieren – kostenlos und DSGVO-konform.'
    : 'Tips and guides for image cutouts, background removal, and product photo optimization – free and GDPR compliant.';

  return (
    <div className="dot-background min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href="https://bgrnd.de/blog" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content="https://bgrnd.de/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header locale={locale} theme={theme} onToggleLocale={toggleLocale} onToggleTheme={toggleTheme} />

      <main className="flex-1 flex flex-col items-center px-4 pt-12 sm:pt-20">
        <div className="w-full max-w-[800px] mx-auto">
          <Breadcrumbs items={[{ label: isDE ? 'Blog' : 'Blog' }]} />

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
            {isDE ? 'Ratgeber: Bilder bearbeiten & Hintergrund entfernen' : 'Guide: Edit Images & Remove Backgrounds'}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mb-10">
            {isDE ? 'Tipps, Anleitungen und Vergleiche rund ums Bilder freistellen.' : 'Tips, guides, and comparisons about image cutouts.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="glass-card p-5 hover:scale-[1.02] transition-transform group"
              >
                <h2 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-sm sm:text-base">
                  {getPostTitle(post, locale)}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {getPostDescription(post, locale)}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer locale={locale} />
    </div>
  );
};

export default BlogOverview;
