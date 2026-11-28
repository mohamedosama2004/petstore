import { ShopHeader, ProductFilters, ProductSort, ProductGrid, ShopPagination } from "@/features/shop";

export default function ShopPage() {
  return (
    <main>
      <ShopHeader />
      <ProductFilters />
      <ProductSort />
      <ProductGrid />
      <ShopPagination />
    </main>
  );
}
