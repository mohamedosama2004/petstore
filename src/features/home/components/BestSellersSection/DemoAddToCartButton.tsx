"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface DemoAddToCartButtonProps {
  productName: string;
  className?: string;
}

export function DemoAddToCartButton({ productName, className }: DemoAddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setAdded(true)}
      aria-label={`إضافة ${productName} إلى السلة، عرض تجريبي لا يُحفظ`}
      title="عرض تجريبي: لا تتم إضافة المنتج إلى سلة حقيقية"
      className={cn(
        "inline-flex h-10 w-full items-center justify-center rounded-xl bg-forest px-4 text-xs font-semibold text-cream transition-all duration-300 hover:bg-forest/90 hover:shadow-md active:scale-[0.98] sm:h-11 sm:text-sm",
        added && "bg-sage text-forest hover:bg-sage",
        className,
      )}
    >
      <span aria-live="polite">{added ? "أُضيف للعرض" : "أضف للسلة"}</span>
    </button>
  );
}
