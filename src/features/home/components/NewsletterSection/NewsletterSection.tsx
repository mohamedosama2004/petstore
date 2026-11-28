import { BrandMark, Container, PawIcon, SparkIcon } from "@/components/shared";
import { cn } from "@/lib/utils";
import { NewsletterForm } from "./NewsletterForm";

export interface NewsletterSectionProps {
  className?: string;
}

export function NewsletterSection({ className }: NewsletterSectionProps) {
  return (
    <section className={cn("bg-white", className)} aria-labelledby="newsletter-title">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-sage/25 bg-cream px-6 py-12 sm:px-10 sm:py-14 lg:flex lg:items-center lg:gap-12 lg:px-14">
          <div className="pointer-events-none absolute -start-16 -top-16 h-56 w-56 rounded-full bg-sage/20" />
          <div className="pointer-events-none absolute -end-10 -bottom-16 h-52 w-52 rounded-full bg-orange/10" />

          <div className="relative z-10 flex-1 text-center lg:text-start">
            <BrandMark />
            <h2
              id="newsletter-title"
              className="mt-6 text-balance text-2xl font-bold leading-tight text-forest sm:text-3xl lg:text-4xl"
            >
              ابقَ على اطلاع بكل جديد في نيو
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-balance text-sm leading-relaxed text-charcoal/60 sm:text-base lg:mx-0">
              واجهة اشتراك تجريبية للتعريف بالشكل النهائي؛ لا يتم أي حفظ أو إرسال حالياً.
            </p>
          </div>

          <div className="relative z-10 mt-8 flex-1 lg:mt-0">
            <NewsletterForm />
          </div>

          <div
            className="pointer-events-none absolute -bottom-12 -start-4 hidden h-40 w-40 items-center justify-center rounded-[2rem] bg-forest text-cream shadow-xl shadow-forest/20 lg:flex"
            aria-hidden="true"
          >
            <PawIcon className="h-16 w-16 text-orange" />
            <SparkIcon className="absolute -end-3 -top-3 h-8 w-8 text-orange" />
          </div>
        </div>
      </Container>
    </section>
  );
}
