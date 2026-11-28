import {
  ChatIcon,
  Container,
  PackageIcon,
  SectionHeading,
  ShieldIcon,
  SparkIcon,
} from "@/components/shared";
import { cn } from "@/lib/utils";
import { benefits, type BenefitIconKind } from "../../data";

export interface WhyChooseUsProps {
  className?: string;
}

const benefitIcons: Record<BenefitIconKind, typeof PackageIcon> = {
  package: PackageIcon,
  selection: SparkIcon,
  support: ChatIcon,
  privacy: ShieldIcon,
};

export function WhyChooseUs({ className }: WhyChooseUsProps) {
  return (
    <section
      data-benefits-section=""
      className={cn("border-t border-sage/25 bg-cream", className)}
      aria-labelledby="benefits-title"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="benefits-title"
          eyebrow="تجربة أوضح"
          title="لماذا New؟"
          description="تفاصيل بسيطة تجعل تصفح المتجر واختيار مستلزمات أليفك أسهل."
          align="center"
        />

        <div
          data-benefit-grid=""
          className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
        >
          {benefits.map((benefit) => {
            const Icon = benefitIcons[benefit.icon];

            return (
              <article
                key={benefit.id}
                data-benefit-card=""
                className="group flex h-full flex-col rounded-3xl border border-sage/25 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-lg hover:shadow-forest/10 sm:p-6"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage/20 text-forest transition-transform duration-300 group-hover:rotate-[-6deg]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-base font-bold text-charcoal">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
