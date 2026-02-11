import { Lock, CreditCard } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription,
} from '@/components/ui/drawer';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface PurchaseModalProps {
  locale: Locale;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const packs = [
  { id: 'starter', credits: 10, price: '0,99 €', priceEn: '€0.99', badge: null },
  { id: 'standard', credits: 50, price: '2,99 €', priceEn: '€2.99', badge: 'popular' },
  { id: 'pro', credits: 100, price: '4,99 €', priceEn: '€4.99', badge: 'bestValue' },
] as const;

const PackCards = ({ locale }: { locale: Locale }) => {
  const t = translations[locale];

  const handleBuy = (packId: string) => {
    if (navigator.vibrate) navigator.vibrate(10);
    window.location.href = `${API_URL}/api/create-checkout?pack=${packId}`;
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      {packs.map((pack) => (
        <div
          key={pack.id}
          className="glass-card flex flex-col items-center p-4 gap-3 relative"
        >
          {pack.badge && (
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground whitespace-nowrap">
              {pack.badge === 'popular' ? t.packPopular : t.packBestValue}
            </span>
          )}
          <span className="text-2xl font-bold text-foreground">{pack.credits}</span>
          <span className="text-xs text-muted-foreground">Credits</span>
          <span className="text-sm font-semibold text-foreground">
            {locale === 'de' ? pack.price : pack.priceEn}
          </span>
          <button
            onClick={() => handleBuy(pack.id)}
            className="glass-button-primary w-full py-2 text-sm font-medium rounded-xl"
          >
            {t.buy}
          </button>
        </div>
      ))}
    </div>
  );
};

const ModalFooter = ({ locale }: { locale: Locale }) => {
  const t = translations[locale];
  return (
    <div className="flex flex-col items-center gap-2 pt-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Lock size={12} />
        <span>{t.stripeNotice}</span>
      </div>
      <div className="flex items-center gap-3 text-muted-foreground">
        <CreditCard size={18} />
        <span className="text-[10px] font-medium tracking-wide">VISA</span>
        <span className="text-[10px] font-medium tracking-wide">MC</span>
        <span className="text-[10px] font-medium tracking-wide">Apple Pay</span>
        <span className="text-[10px] font-medium tracking-wide">Google Pay</span>
      </div>
    </div>
  );
};

const PurchaseModal = ({ locale, open, onOpenChange }: PurchaseModalProps) => {
  const isMobile = useIsMobile();
  const t = translations[locale];

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t.buyCredits}</DrawerTitle>
            <DrawerDescription>{t.buyCreditsSubtitle}</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-6">
            <PackCards locale={locale} />
            <ModalFooter locale={locale} />
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card-lg border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t.buyCredits}</DialogTitle>
          <DialogDescription>{t.buyCreditsSubtitle}</DialogDescription>
        </DialogHeader>
        <PackCards locale={locale} />
        <ModalFooter locale={locale} />
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
