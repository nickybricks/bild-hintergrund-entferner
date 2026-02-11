import { Shield, Sparkles, Globe } from 'lucide-react';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface FeatureBadgesProps {
  locale: Locale;
}

const FeatureBadges = ({ locale }: FeatureBadgesProps) => {
  const t = translations[locale];

  const badges = [
    { icon: Shield, label: t.badgePrivate, desc: t.badgePrivateDesc },
    { icon: Sparkles, label: t.badgeFree, desc: t.badgeFreeDesc },
    { icon: Globe, label: t.badgeGdpr, desc: t.badgeGdprDesc },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10 fade-in">
      {badges.map((b) => (
        <div
          key={b.label}
          className="glass-card flex items-center gap-2.5 px-4 py-2.5 text-sm"
        >
          <b.icon size={16} className="text-primary shrink-0" />
          <div>
            <span className="font-medium text-foreground">{b.label}</span>
            <span className="text-muted-foreground ml-1 hidden sm:inline">· {b.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBadges;
