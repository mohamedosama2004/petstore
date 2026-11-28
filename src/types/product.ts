import type { ID } from "./common";

export interface Category {
  id: ID;
  name: string;
  slug: string;
}

export interface Product {
  id: ID;
  name: string;
  slug: string;
  description?: string;
  price: number;
  compareAtPrice?: number;
  currency: "SAR";
  imageUrl?: string;
  categoryId?: ID;
  inStock: boolean;
}
