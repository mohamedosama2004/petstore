import Link from "next/link";
import { footerNavigation, routes, siteConfig } from "@/config";
import { BrandMark, Container } from "@/components/shared";

export function Footer() {
  const groups = [
    { id: "footer-shop", ...footerNavigation.shop },
    { id: "footer-support", ...footerNavigation.support },
    { id: "footer-policies", ...footerNavigation.policies },
  ];

  return (
    <footer className="bg-forest text-cream">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandMark inverted asLink />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sage">
              {siteConfig.descriptionAr}
            </p>
            <Link
              href={routes.store.shop}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-xs font-semibold text-cream transition-colors duration-300 hover:border-orange hover:text-orange"
            >
              ابدأ التصفح
            </Link>
          </div>

          {groups.map((group) => (
            <nav key={group.id} aria-labelledby={group.id}>
              <h2 id={group.id} className="text-sm font-bold text-cream">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-sage transition-colors duration-300 hover:text-cream"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <div className="border-t border-cream/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-sage sm:flex-row">
          <p>© {siteConfig.name}. جميع الحقوق محفوظة.</p>
          <p>المملكة العربية السعودية</p>
        </Container>
      </div>
    </footer>
  );
}
