import { ShoppingBag, Heart, ShoppingCart } from "lucide-react";

interface NavbarProps {
  onHome: () => void;
}

export default function Navbar({ onHome }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <button
          onClick={onHome}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <ShoppingBag className="h-6 w-6 text-gray-900" />
          <span className="text-lg font-bold text-gray-900">Shoply</span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <button
            onClick={onHome}
            className="transition-colors hover:text-gray-900"
          >
            Home
          </button>
          <button
            onClick={onHome}
            className="transition-colors hover:text-gray-900"
          >
            Shop
          </button>
          <button
            onClick={onHome}
            className="transition-colors hover:text-gray-900"
          >
            Categories
          </button>
          <button
            onClick={onHome}
            className="transition-colors hover:text-gray-900"
          >
            About
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative transition-colors hover:text-gray-900">
            <Heart className="h-5 w-5 text-gray-700" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">
              0
            </span>
          </button>
          <button className="relative transition-colors hover:text-gray-900">
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
