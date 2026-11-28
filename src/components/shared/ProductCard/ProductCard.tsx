import Link from "next/link";
import { routes } from "@/config";
import type { Product } from "@/types";
import { ProductPrice } from "../ProductPrice";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-zinc-200 p-4">
      <Link href={routes.store.product(product.slug)} className="font-medium hover:underline">
        {product.name}
      </Link>
      <ProductPrice
        price={product.price}
        compareAtPrice={product.compareAtPrice}
        currency={product.currency}
      />
    </article>
  );
}
