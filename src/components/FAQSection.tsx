import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Locale } from '@/lib/translations';
import { translations } from '@/lib/translations';

interface Props {
  locale: Locale;
}

const faqKeys = [1, 2, 3, 4, 5, 6] as const;

const FAQSection = ({ locale }: Props) => {
  const t = translations[locale];

  return (
    <section className="w-full max-w-[700px] mx-auto mt-[60px]">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
        {t.faqTitle}
      </h2>
      <div className="glass-card p-4 sm:p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqKeys.map((n) => (
            <AccordionItem key={n} value={`faq-${n}`}>
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground">
                {t[`faqQ${n}` as keyof typeof t]}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {t[`faqA${n}` as keyof typeof t]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
