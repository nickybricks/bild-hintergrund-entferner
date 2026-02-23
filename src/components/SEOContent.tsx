import { Upload, Cpu, Download, ShoppingCart, Camera, Briefcase, Presentation, Image, Users } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface Props {
  locale: Locale;
}

const steps = [
  { icon: Upload, titleKey: 'stepTitle1' as const, textKey: 'stepText1' as const },
  { icon: Cpu, titleKey: 'stepTitle2' as const, textKey: 'stepText2' as const },
  { icon: Download, titleKey: 'stepTitle3' as const, textKey: 'stepText3' as const },
];

const useCaseIcons = [ShoppingCart, Camera, Briefcase, Presentation, Image, Users];

const SEOContent = ({ locale }: Props) => {
  const t = translations[locale];

  return (
    <>
      {/* Section 1 – Intro */}
      <section className="w-full max-w-[800px] mx-auto mt-[60px]">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-4">
          {t.seoIntroTitle}
        </h2>
        <div className="glass-card p-5 sm:p-8">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {t.seoIntroText}
          </p>
        </div>
      </section>

      {/* Section 2 – How it works (3 steps) */}
      <section id="how-it-works" className="w-full max-w-[900px] mx-auto mt-[60px]">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
          {t.howItWorksTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map(({ icon: Icon, titleKey, textKey }, i) => (
            <div key={titleKey} className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Icon className="text-primary" size={24} />
              </div>
              <div className="text-xs font-semibold text-primary mb-2">
                {t.stepLabel} {i + 1}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t[titleKey]}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t[textKey]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 – Use cases */}
      <section className="w-full max-w-[800px] mx-auto mt-[60px]">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-4">
          {t.useCasesTitle}
        </h2>
        <div className="glass-card p-5 sm:p-8">
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
            {t.useCasesText}
          </p>
          <div className="flex flex-wrap gap-2">
            {(t.useCaseTags as readonly string[]).map((tag, i) => {
              const Icon = useCaseIcons[i % useCaseIcons.length];
              return (
                <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <Icon size={14} />
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SEOContent;
