export type ProductArtworkKind =
  | "cat-food"
  | "dog-food"
  | "toy"
  | "collar"
  | "shampoo"
  | "bed";

export interface MockProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  currency: "SAR";
  badge?: string;
  artwork: ProductArtworkKind;
  imageSrc?: string;
}

export const featuredProducts: MockProduct[] = [
  {
    id: "demo-1",
    name: "طعام القطط الجاف — دجاج",
    slug: "dry-cat-food-chicken",
    price: 89,
    compareAtPrice: 110,
    currency: "SAR",
    badge: "مختار",
    artwork: "cat-food",
  },
  {
    id: "demo-2",
    name: "طعام الكلاب الرطب — لحم",
    slug: "wet-dog-food-beef",
    price: 45,
    currency: "SAR",
    artwork: "dog-food",
  },
  {
    id: "demo-3",
    name: "كرة لعب تفاعلية",
    slug: "interactive-ball-toy",
    price: 35,
    compareAtPrice: 50,
    currency: "SAR",
    badge: "جديد",
    artwork: "toy",
  },
  {
    id: "demo-4",
    name: "طوق مريح للحيوانات الأليفة",
    slug: "comfortable-pet-collar",
    price: 120,
    currency: "SAR",
    artwork: "collar",
  },
  {
    id: "demo-5",
    name: "شامبو للعناية بالقطط",
    slug: "cat-grooming-shampoo",
    price: 55,
    compareAtPrice: 70,
    currency: "SAR",
    artwork: "shampoo",
  },
  {
    id: "demo-6",
    name: "سرير مريح للكلاب",
    slug: "comfortable-dog-bed",
    price: 199,
    currency: "SAR",
    badge: "مختار",
    artwork: "bed",
  },
];
