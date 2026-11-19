import { ShoppingBag, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-gray-900" />
              <span className="text-lg font-bold text-gray-900">Shoply</span>
            </div>
            <p className="text-sm text-gray-500">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gray-900">Best Sellers</a></li>
              <li><a href="#" className="hover:text-gray-900">Categories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="rounded-lg border border-gray-200 p-2 transition-colors hover:bg-gray-50">
                <Instagram className="h-4 w-4 text-gray-700" />
              </a>
              <a href="#" className="rounded-lg border border-gray-200 p-2 transition-colors hover:bg-gray-50">
                <Twitter className="h-4 w-4 text-gray-700" />
              </a>
              <a href="#" className="rounded-lg border border-gray-200 p-2 transition-colors hover:bg-gray-50">
                <Facebook className="h-4 w-4 text-gray-700" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Shoply. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
