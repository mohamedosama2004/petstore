import Link from "next/link";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { routes } from "@/config";
import { ImageSlot } from "../ImageSlot";
import { ProductPrice } from "../ProductPrice";

export interface ProductCardData {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  currency?: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ProductCardProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  product: ProductCardData;
  imageFallback: ReactNode;
  action?: ReactNode;
  imageSizes?: string;
}

export function ProductCard({
  product,
  imageFallback,
  action,
  imageSizes,
  className,
  ...rest
}: ProductCardProps) {
  const href = routes.store.product(product.slug);
  const alt = product.imageAlt ?? `صورة ${product.name}`;

  return (
    <article
      {...rest}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-sage/25 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage/50 hover:shadow-xl hover:shadow-forest/10",
        className,
      )}
    >
      <Link
        href={href}
        aria-label={product.name}
        className="relative block overflow-hidden bg-sage/15"
      >
        <ImageSlot
          alt={alt}
          src={product.imageSrc}
          fallback={imageFallback}
          sizes={imageSizes}
          className="aspect-square w-full"
          imageClassName="transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute start-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-forest shadow-sm">
            {product.badge}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <h3 className="text-sm font-semibold leading-snug text-charcoal sm:text-base">
          <Link href={href} className="transition-colors duration-300 hover:text-forest">
            {product.name}
          </Link>
        </h3>
        <ProductPrice
          price={product.price}
          compareAtPrice={product.compareAtPrice}
          currency={product.currency}
          className="mt-auto text-sm sm:text-base"
        />
        {action ? <div className="mt-1">{action}</div> : null}
      </div>
    </article>
  );
}
