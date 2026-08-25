import { CartItem } from "./cart";

export type OrderStatus =
  | "pending"
  | "paid"
  | "shipped"
  | "delivered"
  | "cancelled";

export interface Order {
  id: string;
  items: CartItem[];
  sum: number;
  status: OrderStatus;
  createdAt: string;
  address: string;
}
