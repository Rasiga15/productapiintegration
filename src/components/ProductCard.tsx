import { Star, Heart, ShoppingCart } from "lucide-react";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl">
      <button
        onClick={() => onClick(product)}
        className="mb-4 flex h-52 items-center justify-center overflow-hidden rounded-xl bg-gray-50"
      >
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
      </button>

      <button
        onClick={() => onClick(product)}
        className="mb-2 block w-fit rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium capitalize text-gray-600"
      >
        {product.category}
      </button>

      <button
        onClick={() => onClick(product)}
        className="mb-2 line-clamp-2 text-left text-sm font-semibold text-gray-900"
      >
        {product.title}
      </button>

      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          {product.rating.rate}
        </span>
      </div>

      <div className="mt-auto flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gray-900 px-3 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gray-800">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
        <button className="flex items-center justify-center rounded-xl border border-gray-200 px-3 py-2.5 transition-colors hover:bg-gray-50">
          <Heart className="h-4 w-4 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
