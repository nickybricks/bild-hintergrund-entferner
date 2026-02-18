import { Shield, ShieldCheck, Smartphone, Globe, Sparkles } from 'lucide-react';
import { BadgeEuro } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface Props {
  locale: Locale;
}

const features = [
  { icon: Shield, titleKey: 'whyPrivateTitle' as const, textKey: 'whyPrivateText' as const },
  { icon: BadgeEuro, titleKey: 'whyFreeTitle' as const, textKey: 'whyFreeText' as const },
  { icon: ShieldCheck, titleKey: 'whyGdprTitle' as const, textKey: 'whyGdprText' as const },
  { icon: Smartphone, titleKey: 'whyMobileTitle' as const, textKey: 'whyMobileText' as const },
  { icon: Globe, titleKey: 'whyBrowserTitle' as const, textKey: 'whyBrowserText' as const },
  { icon: Sparkles, titleKey: 'whyQualityTitle' as const, textKey: 'whyQualityText' as const },
];

const WhySection = ({ locale }: Props) => {
  const t = translations[locale];

  return (
    <section className="w-full max-w-[900px] mx-auto mt-[60px]">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
        {t.whyTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(({ icon: Icon, titleKey, textKey }) => (
          <div key={titleKey} className="glass-card p-6">
            <Icon className="text-primary mb-3" size={28} />
            <h3 className="font-semibold text-foreground mb-1">{t[titleKey]}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t[textKey]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
