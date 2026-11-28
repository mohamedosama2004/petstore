import Link from "next/link";
import { ArrowLeftIcon, Container, ImageSlot } from "@/components/shared";
import { routes } from "@/config";
import { cn } from "@/lib/utils";
import { PromoArtwork } from "./PromoArtwork";

export interface PromotionalBannerProps {
  className?: string;
  imageSrc?: string;
}

export function PromotionalBanner({ className, imageSrc }: PromotionalBannerProps) {
  return (
    <section className={cn("bg-cream", className)} aria-labelledby="promo-title">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div
          data-promo-panel=""
          className="relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-14 sm:px-10 sm:py-16 lg:flex lg:items-center lg:gap-12 lg:px-14 lg:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -start-24 -top-24 h-72 w-72 rounded-full bg-sage/10" />
            <div className="absolute -end-20 -bottom-20 h-72 w-72 rounded-full bg-orange/10" />
            <div className="absolute inset-y-8 end-1/2 hidden w-px bg-cream/10 lg:block" />
          </div>

          <div
            data-promo-content=""
            className="relative z-10 flex-1 text-center lg:text-start"
          >
            <span className="inline-flex items-center rounded-full border border-cream/20 px-3 py-1 text-xs font-medium text-sage">
              متجر نيو
            </span>
            <h2
              id="promo-title"
              className="mt-5 text-balance text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl"
            >
              كل ما تحتاجه لأليفك،{" "}
              <span className="text-orange">في مكان واحد</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-sage sm:text-lg lg:mx-0">
              تصفح الكتالوج واختر ما يناسب روتينك اليومي مع قطك أو كلبك، من الطعام إلى اللعب والعناية.
            </p>
            <div className="mt-8">
              <Link
                href={routes.store.shop}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-orange px-8 text-sm font-semibold text-white shadow-lg shadow-orange/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange/95 active:translate-y-0 active:scale-[0.98] sm:h-14 sm:px-10 sm:text-base"
              >
                تصفح المنتجات
                <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </div>
          </div>

          <div
            data-promo-visual=""
            className="relative z-10 mx-auto mt-10 w-full max-w-sm lg:mt-0 lg:max-w-md"
          >
            <ImageSlot
              alt="رسم توضيحي لحقيبة تسوق وقط داخل متجر نيو"
              src={imageSrc}
              fallback={<PromoArtwork className="h-full w-full" />}
              className="aspect-square w-full rounded-[2rem] bg-cream/5 p-3"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
