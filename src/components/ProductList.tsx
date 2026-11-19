import type { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function ProductList({ products, onSelect }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={onSelect} />
      ))}
    </div>
  );
}
