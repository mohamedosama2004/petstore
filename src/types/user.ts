import type { ID } from "./common";

export type UserRole = "customer" | "admin";

export interface User {
  id: ID;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
}

export interface Address {
  id: ID;
  label: string;
  recipientName: string;
  phone: string;
  city: string;
  district?: string;
  street: string;
  postalCode?: string;
  isDefault?: boolean;
}
