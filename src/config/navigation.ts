import { routes } from "./routes";

export interface NavItem {
  label: string;
  href: string;
}

export const storeNavigation: NavItem[] = [
  { label: "الرئيسية", href: routes.store.home },
  { label: "المتجر", href: routes.store.shop },
  { label: "تتبع الطلب", href: routes.store.trackOrder },
  { label: "من نحن", href: routes.store.about },
  { label: "تواصل معنا", href: routes.store.contact },
];

export const footerNavigation = {
  shop: {
    title: "المتجر",
    items: [
      { label: "جميع المنتجات", href: routes.store.shop },
      { label: "طعام القطط", href: routes.store.shop },
      { label: "طعام الكلاب", href: routes.store.shop },
      { label: "الألعاب", href: routes.store.shop },
      { label: "الإكسسوارات", href: routes.store.shop },
    ],
  },
  support: {
    title: "خدمة العملاء",
    items: [
      { label: "تواصل معنا", href: routes.store.contact },
      { label: "تتبع الطلب", href: routes.store.trackOrder },
      { label: "الأسئلة الشائعة", href: routes.store.faq },
    ],
  },
  policies: {
    title: "السياسات",
    items: [
      { label: "سياسة الخصوصية", href: routes.store.privacyPolicy },
      { label: "الشروط والأحكام", href: routes.store.terms },
      { label: "الإرجاع والاستبدال", href: routes.store.returnPolicy },
    ],
  },
};

export const adminNavigation: NavItem[] = [
  { label: "Overview", href: routes.admin.overview },
  { label: "Products", href: routes.admin.products },
  { label: "Categories", href: routes.admin.categories },
  { label: "Orders", href: routes.admin.orders },
  { label: "Customers", href: routes.admin.customers },
  { label: "Inventory", href: routes.admin.inventory },
  { label: "Coupons", href: routes.admin.coupons },
  { label: "Shipping", href: routes.admin.shipping },
  { label: "Settings", href: routes.admin.settings },
  { label: "Users", href: routes.admin.users },
];
