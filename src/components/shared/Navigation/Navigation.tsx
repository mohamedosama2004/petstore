import Link from "next/link";
import type { NavItem } from "@/config";
import { cn } from "@/lib/utils";

export interface NavigationProps {
  items: NavItem[];
  ariaLabel?: string;
  className?: string;
  linkClassName?: string;
  currentHref?: string;
  onNavigate?: () => void;
}

export function Navigation({
  items,
  ariaLabel = "القائمة الرئيسية",
  className,
  linkClassName,
  currentHref,
  onNavigate,
}: NavigationProps) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className={cn("flex items-center gap-6", className)}>
        {items.map((item) => {
          const active = item.href === currentHref;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative inline-block text-sm font-medium text-charcoal transition-colors duration-300 hover:text-forest after:absolute after:inset-inline-start-0 after:-bottom-1.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-forest after:transition-transform after:duration-300 hover:after:scale-x-100",
                  active && "text-forest after:scale-x-100",
                  linkClassName,
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
