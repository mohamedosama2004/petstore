import { formatCurrency } from "@/lib/utils";

export interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  currency?: string;
}

export function ProductPrice({
  price,
  compareAtPrice,
  currency = "SAR",
}: ProductPriceProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold">{formatCurrency(price, "en-SA", currency)}</span>
      {compareAtPrice && compareAtPrice > price ? (
        <span className="text-sm text-zinc-400 line-through">
          {formatCurrency(compareAtPrice, "en-SA", currency)}
        </span>
      ) : null}
    </div>
  );
}
