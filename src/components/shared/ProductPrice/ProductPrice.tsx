import { cn, formatCurrency } from "@/lib/utils";

export interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  currency?: string;
  className?: string;
}

export function ProductPrice({
  price,
  compareAtPrice,
  currency = "SAR",
  className,
}: ProductPriceProps) {
  const options: Intl.NumberFormatOptions = { maximumFractionDigits: 0 };

  return (
    <div className={cn("flex flex-wrap items-baseline gap-2", className)}>
      <span className="font-bold text-forest">
        {formatCurrency(price, "ar-SA-u-nu-latn", currency, options)}
      </span>
      {compareAtPrice && compareAtPrice > price ? (
        <span className="text-sm text-charcoal/45 line-through">
          {formatCurrency(compareAtPrice, "ar-SA-u-nu-latn", currency, options)}
        </span>
      ) : null}
    </div>
  );
}
