import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import type { Product } from "@/types";
import { getProducts } from "@/api/productService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import ProductView from "@/components/ProductView";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Product | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Navbar onHome={() => setSelected(null)} />

      <main className="flex-1">
        {selected ? (
          <ProductView product={selected} onBack={() => setSelected(null)} />
        ) : (
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Browse Products
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Click any product to see full details
              </p>
            </div>

            {loading && (
              <div className="flex flex-col items-center justify-center py-24">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
                <p className="mt-3 text-sm text-gray-500">Loading products...</p>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-100 bg-red-50 p-6 text-center">
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            )}

            {!loading && !error && (
              <ProductList products={products} onSelect={setSelected} />
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
