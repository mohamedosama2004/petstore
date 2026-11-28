import Link from "next/link";
import type { NavItem } from "@/config";

export interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
  return (
    <nav aria-label="Main navigation" className="flex items-center gap-6">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium transition-opacity hover:opacity-75"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
