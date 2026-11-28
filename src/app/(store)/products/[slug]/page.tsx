import { ProductGallery, ProductInfo, ProductActions, ProductDescription, RelatedProducts } from "@/features/product-details";

export default function ProductDetailsPage() {
  return (
    <main>
      <ProductGallery />
      <ProductInfo />
      <ProductActions />
      <ProductDescription />
      <RelatedProducts />
    </main>
  );
}
