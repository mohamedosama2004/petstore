import Link from "next/link";
import { routes, siteConfig, storeNavigation } from "@/config";
import { CartIcon } from "../CartIcon";
import { Container } from "../Container";
import { Navigation } from "../Navigation";

export interface HeaderProps {
  cartCount?: number;
}

export function Header({ cartCount = 0 }: HeaderProps) {
  return (
    <header className="border-b border-zinc-200">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href={routes.store.home} className="text-lg font-semibold">
          {siteConfig.name}
        </Link>
        <Navigation items={storeNavigation} />
        <CartIcon itemCount={cartCount} />
      </Container>
    </header>
  );
}
