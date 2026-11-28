import Link from "next/link";
import { Container, ImageSlot, PawIcon, ArrowLeftIcon, HeartIcon, PackageIcon, SparkIcon } from "@/components/shared";
import { routes } from "@/config";
import { cn } from "@/lib/utils";
import { HeroArtwork } from "./HeroArtwork";

export interface HeroSectionProps {
  className?: string;
  imageSrc?: string;
}

export function HeroSection({ className, imageSrc }: HeroSectionProps) {
  return (
    <section
      className={cn("relative isolate overflow-hidden bg-cream", className)}
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -start-24 top-10 h-72 w-72 rounded-[45%] bg-sage/20" />
        <div className="absolute -end-20 bottom-0 h-80 w-80 rounded-full bg-orange/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-sage/30" />
      </div>

      <Container className="relative z-10 grid items-center gap-12 py-14 sm:py-20 lg:min-h-[640px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 lg:py-24">
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-white/70 px-3 py-1.5 text-xs font-semibold text-forest shadow-sm">
            <PawIcon className="h-4 w-4 text-orange" />
            كل احتياجات أليفك في مكان واحد
          </span>

          <h1
            id="hero-title"
            data-hero-headline=""
            className="mt-6 text-balance text-4xl font-bold leading-[1.18] tracking-tight text-forest sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            كل ما يحتاجه <span className="text-orange">أليفك</span>...{" "}
            <span className="block">في مكان واحد</span>
          </h1>

          <p
            data-hero-desc=""
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-charcoal/70 sm:text-lg lg:mt-7 lg:text-xl"
          >
            اكتشف مجموعة مختارة من الأطعمة والمستلزمات التي تجعل حياة أليفك أسعد وأكثر راحة.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center lg:mt-10">
            <Link
              data-hero-cta=""
              href={routes.store.shop}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-semibold text-cream shadow-lg shadow-forest/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest/95 hover:shadow-xl active:translate-y-0 active:scale-[0.98] sm:h-14 sm:px-9 sm:text-base"
            >
              تسوق الآن
              <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
            <Link
              data-hero-cta=""
              href="#categories"
              className="inline-flex h-12 items-center justify-center rounded-full border border-forest/20 bg-white/60 px-7 text-sm font-semibold text-forest transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/40 hover:bg-white active:translate-y-0 active:scale-[0.98] sm:h-14 sm:px-9 sm:text-base"
            >
              اكتشف منتجاتنا
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-charcoal/55 lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <PackageIcon className="h-4 w-4 text-sage" />
              فئات واضحة
            </span>
            <span className="inline-flex items-center gap-1.5">
              <HeartIcon className="h-4 w-4 text-orange" />
              اختيارات للحيوانات الأليفة
            </span>
          </div>
        </div>

        <div data-hero-visual="" className="relative mx-auto w-full max-w-lg">
          <div className="relative rounded-[2.5rem] border border-sage/40 bg-sage/20 p-3 shadow-[0_35px_70px_-45px_rgba(36,75,60,0.45)]">
            <ImageSlot
              alt="رسم توضيحي لقط وكلب معاً ضمن مستلزمات الحيوانات الأليفة"
              src={imageSrc}
              fallback={<HeroArtwork />}
              className="aspect-[4/5] w-full rounded-[2rem] bg-cream sm:aspect-square lg:aspect-[5/6]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>

          <div
            data-hero-float=""
            className="absolute -start-2 top-10 flex items-center gap-2 rounded-2xl border border-sage/40 bg-white/95 px-3 py-2.5 text-xs font-semibold text-forest shadow-lg shadow-forest/10 sm:start-0 sm:px-4"
          >
            <PawIcon className="h-5 w-5 text-orange" />
            <span>أصدقاء أليفك</span>
          </div>

          <div
            data-hero-float=""
            className="absolute -end-1 bottom-10 flex items-center gap-2 rounded-2xl border border-sage/40 bg-white/95 px-3 py-2.5 text-xs font-semibold text-forest shadow-lg shadow-forest/10 sm:end-0 sm:px-4"
          >
            <PackageIcon className="h-5 w-5 text-forest" />
            <span>كل الفئات</span>
          </div>

          <div
            data-hero-float=""
            className="absolute -bottom-4 start-10 grid h-12 w-12 place-items-center rounded-2xl bg-orange text-white shadow-lg shadow-orange/30 sm:start-14"
          >
            <SparkIcon className="h-5 w-5" />
          </div>
        </div>
      </Container>
    </section>
  );
}
