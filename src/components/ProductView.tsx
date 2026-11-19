import { ArrowLeft, Star, Truck, ShieldCheck, RefreshCw, Heart, ShoppingCart } from "lucide-react";
import type { Product } from "@/types";

interface ProductViewProps {
  product: Product;
  onBack: () => void;
}

export default function ProductView({ product, onBack }: ProductViewProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to products
      </button>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex h-96 items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col">
          <span className="mb-3 inline-block w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
            {product.category}
          </span>

          <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-900">
            {product.title}
          </h1>

          <div className="mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-gray-900">
              {product.rating.rate}
            </span>
            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="mb-6 text-3xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>

          <p className="mb-8 text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>

          <div className="mb-8 flex gap-3">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50">
              <Heart className="h-5 w-5" />
              Wishlist
            </button>
          </div>

          <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-xl border border-gray-100 p-3">
              <Truck className="h-5 w-5 text-gray-700" />
              <span className="text-xs font-medium text-gray-700">
                Free shipping
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-gray-100 p-3">
              <ShieldCheck className="h-5 w-5 text-gray-700" />
              <span className="text-xs font-medium text-gray-700">
                2 year warranty
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-gray-100 p-3">
              <RefreshCw className="h-5 w-5 text-gray-700" />
              <span className="text-xs font-medium text-gray-700">
                30 day returns
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
