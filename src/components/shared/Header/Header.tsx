"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BrandMark,
  CartIcon,
  CloseIcon,
  Container,
  MenuIcon,
  Navigation,
  SearchIcon,
  UserIcon,
} from "@/components/shared";
import { routes, storeNavigation } from "@/config";
import { cn } from "@/lib/utils";

export interface HeaderProps {
  cartCount?: number;
  className?: string;
}

export function Header({ cartCount = 0, className }: HeaderProps) {
  const pathname = usePathname();
  const menuId = useId();
  const [menuState, setMenuState] = useState({ pathname, open: false });
  const isMobileMenuOpen = menuState.pathname === pathname && menuState.open;

  const closeMenu = useCallback(() => {
    setMenuState({ pathname, open: false });
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setMenuState((current) => ({
      pathname,
      open: !(current.pathname === pathname && current.open),
    }));
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeMenu();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen, closeMenu]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-sage/30 bg-cream/95 backdrop-blur-md",
        className,
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-3 lg:h-20">
        <BrandMark asLink />

        <Navigation
          items={storeNavigation}
          className="hidden gap-7 lg:flex"
          currentHref={pathname}
        />

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            href={routes.store.shop}
            aria-label="بحث في المنتجات"
            className="group inline-flex h-11 items-center gap-2 rounded-full px-3 text-charcoal transition-colors duration-300 hover:bg-sage/20 hover:text-forest"
          >
            <SearchIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden text-sm font-medium lg:inline">بحث</span>
          </Link>

          <Link
            href={routes.auth.login}
            aria-label="حسابي"
            className="hidden h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors duration-300 hover:bg-sage/20 hover:text-forest sm:inline-flex"
          >
            <UserIcon className="h-5 w-5" />
          </Link>

          <CartIcon itemCount={cartCount} />

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMobileMenuOpen}
            aria-controls={menuId}
            onClick={toggleMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-colors duration-300 hover:bg-sage/20 hover:text-forest lg:hidden"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        hidden={!isMobileMenuOpen}
        className="border-t border-sage/25 bg-cream lg:hidden"
      >
        <Container className="py-4">
          <Navigation
            items={storeNavigation}
            ariaLabel="القائمة المتنقلة"
            className="flex-col items-stretch gap-1"
            linkClassName="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-sage/15 after:hidden"
            currentHref={pathname}
            onNavigate={closeMenu}
          />
          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-sage/25 pt-4">
            <Link
              href={routes.store.shop}
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-sage/30 bg-white/60 text-sm font-medium text-forest"
            >
              <SearchIcon className="h-4 w-4" />
              بحث
            </Link>
            <Link
              href={routes.auth.login}
              onClick={closeMenu}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-sage/30 bg-white/60 text-sm font-medium text-forest"
            >
              <UserIcon className="h-4 w-4" />
              حسابي
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
