import Link from "next/link";
import { routes } from "@/config";

export interface CartIconProps {
  itemCount?: number;
}

export function CartIcon({ itemCount = 0 }: CartIconProps) {
  return (
    <Link
      href={routes.store.cart}
      aria-label={`Shopping cart (${itemCount} items)`}
      className="relative inline-flex items-center gap-1.5 text-sm font-medium"
    >
      <span>Cart</span>
      {itemCount > 0 ? (
        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1 text-xs text-background">
          {itemCount}
        </span>
      ) : null}
    </Link>
  );
}
