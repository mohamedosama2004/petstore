import { CartItemList, CartSummary, CartEmptyState } from "@/features/cart";

export default function CartPage() {
  return (
    <main>
      <CartItemList />
      <CartSummary />
      <CartEmptyState />
    </main>
  );
}
