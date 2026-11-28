import { routes } from "@/config";

export type CategoryArtworkKind = "cat-food" | "dog-food" | "toys" | "accessories" | "grooming";

export interface MockCategory {
  id: string;
  name: string;
  description: string;
  href: string;
  artwork: CategoryArtworkKind;
  imageSrc?: string;
}

export const categories: MockCategory[] = [
  {
    id: "cat-food",
    name: "طعام القطط",
    description: "أصناف متنوعة لتغذية القطط",
    href: routes.store.shop,
    artwork: "cat-food",
  },
  {
    id: "dog-food",
    name: "طعام الكلاب",
    description: "خيارات يومية للكلاب",
    href: routes.store.shop,
    artwork: "dog-food",
  },
  {
    id: "toys",
    name: "الألعاب",
    description: "لعب تسليّة وتفاعل",
    href: routes.store.shop,
    artwork: "toys",
  },
  {
    id: "accessories",
    name: "الإكسسوارات",
    description: "أطواق وأدوات عملية",
    href: routes.store.shop,
    artwork: "accessories",
  },
  {
    id: "grooming",
    name: "العناية والنظافة",
    description: "مستلزمات العناية اليومية",
    href: routes.store.shop,
    artwork: "grooming",
  },
];
