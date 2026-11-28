import { ProductsToolbar, ProductsTable } from "@/features/admin/products";

export default function AdminProductsPage() {
  return (
    <main>
      <ProductsToolbar />
      <ProductsTable />
    </main>
  );
}
