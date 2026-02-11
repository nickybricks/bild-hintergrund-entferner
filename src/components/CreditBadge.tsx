import { Coins } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface CreditBadgeProps {
  locale: Locale;
  credits: number;
}

const CreditBadge = ({ locale, credits }: CreditBadgeProps) => {
  const t = translations[locale];

  if (credits <= 0) return null;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="glass-button flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground cursor-default select-none">
          <Coins size={15} className="text-amber-500" />
          <span>{credits}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{credits} {t.hdCreditsRemaining}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default CreditBadge;
