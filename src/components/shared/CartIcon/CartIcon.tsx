import Link from "next/link";
import { routes } from "@/config";
import { cn } from "@/lib/utils";
import { BagIcon } from "../Icons";

export interface CartIconProps {
  itemCount?: number;
  className?: string;
}

export function CartIcon({ itemCount = 0, className }: CartIconProps) {
  const itemLabel = itemCount === 1 ? "عنصر" : "عناصر";

  return (
    <Link
      href={routes.store.cart}
      aria-label={`سلة التسوق، ${itemCount} ${itemLabel}`}
      className={cn(
        "group relative inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors duration-300 hover:bg-sage/20 hover:text-forest",
        className,
      )}
    >
      <BagIcon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6 group-active:scale-90" />
      {itemCount > 0 ? (
        <span className="absolute -start-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-orange px-1 text-[10px] font-bold text-white shadow-sm">
          {itemCount}
        </span>
      ) : null}
    </Link>
  );
}
