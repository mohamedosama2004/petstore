import type { ID } from "./common";

export interface CartItem {
  productId: ID;
  name: string;
  slug: string;
  price: number;
  quantity: number;
  imageUrl?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  currency: "SAR";
}
