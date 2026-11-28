import type { ID } from "./common";

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface OrderSummary {
  id: ID;
  orderNumber: string;
  status: OrderStatus;
  total: number;
  currency: "SAR";
  createdAt: string;
}
