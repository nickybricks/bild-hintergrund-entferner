import { useState, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { detectLocale } from '@/lib/translations';
import type { Locale } from '@/lib/translations';
import { useTheme } from '@/hooks/useTheme';
import { getPost, getPostTitle, getPostDescription, getRelatedPosts } from '@/lib/blogData';
import { blogPostContent } from '@/lib/blogContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function extractTOC(html: string): TOCItem[] {
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>([^<]+)<\/h[23]>/g;
  const items: TOCItem[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    items.push({ level: parseInt(match[1]), id: match[2], text: match[3] });
  }
  return items;
}

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [locale, setLocale] = useState<Locale>(detectLocale);
  const { theme, toggleTheme } = useTheme();
  const toggleLocale = () => setLocale((l) => (l === 'de' ? 'en' : 'de'));
  const isDE = locale === 'de';

  const post = slug ? getPost(slug) : undefined;

  const content = post ? (blogPostContent[post.slug]?.[locale] ?? '') : '';
  const toc = useMemo(() => extractTOC(content), [content]);
  const related = post ? getRelatedPosts(post) : [];
  const title = post ? getPostTitle(post, locale) : '';
  const description = post ? getPostDescription(post, locale) : '';

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="dot-background min-h-screen flex flex-col">
      <Helmet>
        <title>{title} | bgrnd.de</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://bgrnd.de/blog/${post.slug}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://bgrnd.de/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header locale={locale} theme={theme} onToggleLocale={toggleLocale} onToggleTheme={toggleTheme} />

      <main className="flex-1 flex flex-col items-center px-4 pt-12 sm:pt-20">
        <article className="w-full max-w-[720px] mx-auto">
          <Breadcrumbs
            items={[
              { label: 'Blog', to: '/blog' },
              { label: title },
            ]}
          />

          <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4">
            {title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="inline-flex items-center gap-1.5">
              <User size={14} />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} />
              <time dateTime={post.date}>{post.date}</time>
            </span>
          </div>

          {toc.length > 0 && (
            <nav className="glass-card p-4 sm:p-5 mb-8">
              <h2 className="font-semibold text-foreground text-sm mb-3">
                {isDE ? 'Inhaltsverzeichnis' : 'Table of Contents'}
              </h2>
              <ul className="space-y-1.5">
                {toc.map((item) => (
                  <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                    <a
                      href={`#${item.id}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="glass-card p-6 sm:p-8 mt-12 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              {isDE ? 'Jetzt Hintergrund entfernen – kostenlos auf bgrnd.de' : 'Remove backgrounds now – free on bgrnd.de'}
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              {isDE ? 'Keine Anmeldung, kein Upload, DSGVO-konform.' : 'No signup, no upload, GDPR compliant.'}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold hover:scale-[1.03] active:scale-[0.97] transition-transform"
            >
              {isDE ? 'Jetzt starten' : 'Get started'}
              <ArrowRight size={18} />
            </Link>
          </div>

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-lg font-bold text-foreground mb-4">
                {isDE ? 'Verwandte Artikel' : 'Related Articles'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="glass-card p-4 hover:scale-[1.02] transition-transform group"
                  >
                    <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors mb-1">
                      {getPostTitle(r, locale)}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {getPostDescription(r, locale)}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer locale={locale} />
    </div>
  );
};

export default BlogPostPage;
