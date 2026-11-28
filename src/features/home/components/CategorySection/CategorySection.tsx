import Link from "next/link";
import {
  ArrowLeftIcon,
  Container,
  ImageSlot,
  SectionHeading,
} from "@/components/shared";
import { routes } from "@/config";
import { cn } from "@/lib/utils";
import { categories } from "../../data";
import { CategoryArtwork } from "./CategoryArtwork";

export interface CategorySectionProps {
  className?: string;
}

const cardTones = [
  "bg-sage/15",
  "bg-orange/10",
  "bg-white",
  "bg-sage/10",
  "bg-orange/5",
];

export function CategorySection({ className }: CategorySectionProps) {
  return (
    <section
      id="categories"
      data-category-section=""
      className={cn("bg-cream", className)}
      aria-labelledby="categories-title"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="categories-title"
          eyebrow="تصفح حسب الفئة"
          title="كل ما يحتاجه أليفك، مرتب بوضوح"
          description="ابدأ من الفئة التي تبحث عنها وانتقل إلى المتجر لاستكشاف الخيارات."
          action={
            <Link
              href={routes.store.shop}
              className="group inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/70 px-5 py-2.5 text-sm font-semibold text-forest transition-all duration-300 hover:border-forest/35 hover:bg-white"
            >
              تصفح المتجر
              <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          }
        />

        <ul
          data-category-grid=""
          className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5"
        >
          {categories.map((category, index) => (
            <li
              key={category.id}
              data-category-card=""
              className={cn("rounded-3xl last:col-span-2 sm:last:col-span-1", cardTones[index % cardTones.length])}
            >
              <Link
                href={category.href}
                className="group flex h-full flex-col rounded-3xl border border-sage/25 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-xl hover:shadow-forest/10 sm:p-5"
              >
                <div data-category-art="" className="grid h-24 w-24 place-items-center rounded-2xl bg-white/70 p-3 shadow-sm sm:h-28 sm:w-28">
                  <ImageSlot
                    alt={`رسم توضيحي لفئة ${category.name}`}
                    src={category.imageSrc}
                    fallback={<CategoryArtwork kind={category.artwork} />}
                    className="h-full w-full"
                    sizes="(max-width: 640px) 40vw, 180px"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-charcoal sm:text-base">{category.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/55 sm:text-sm">
                      {category.description}
                    </p>
                  </div>
                  <ArrowLeftIcon className="mt-0.5 h-4 w-4 shrink-0 text-forest/45 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-forest" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
