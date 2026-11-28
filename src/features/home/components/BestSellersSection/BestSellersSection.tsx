import Link from "next/link";
import {
  ArrowLeftIcon,
  Container,
  ProductCard,
  SectionHeading,
} from "@/components/shared";
import { routes } from "@/config";
import { cn } from "@/lib/utils";
import { featuredProducts } from "../../data";
import { DemoAddToCartButton } from "./DemoAddToCartButton";
import { ProductArtwork } from "./ProductArtwork";

export interface BestSellersSectionProps {
  className?: string;
}

export function BestSellersSection({ className }: BestSellersSectionProps) {
  return (
    <section
      data-products-section=""
      className={cn("bg-white", className)}
      aria-labelledby="featured-products-title"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <SectionHeading
          id="featured-products-title"
          eyebrow="مختارات نيو"
          title="منتجات مختارة لأليفك"
          description="تعريف سريع ببعض الأصناف التي يمكنك استكشافها في المتجر."
          action={
            <Link
              href={routes.store.shop}
              className="group hidden items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-orange sm:inline-flex"
            >
              عرض الكل
              <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            </Link>
          }
        />

        <p className="mt-4 text-xs text-charcoal/45 sm:text-sm">
         عرض توضيحي ببيانات تجريبية؛ الأسعار والتفاصيل ليست مخزوناً حقيقياً.
        </p>

        <div
          data-product-grid=""
          className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-3"
        >
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              data-product-card=""
              product={product}
              imageFallback={<ProductArtwork kind={product.artwork} />}
              imageSizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
              action={<DemoAddToCartButton productName={product.name} />}
            />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href={routes.store.shop}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-orange"
          >
            عرض الكل
            <ArrowLeftIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
