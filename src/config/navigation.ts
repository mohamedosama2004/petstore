import { routes } from "./routes";

export interface NavItem {
  label: string;
  href: string;
}

export const storeNavigation: NavItem[] = [
  { label: "Home", href: routes.store.home },
  { label: "Shop", href: routes.store.shop },
  { label: "Track Order", href: routes.store.trackOrder },
  { label: "About", href: routes.store.about },
  { label: "Contact", href: routes.store.contact },
];

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
