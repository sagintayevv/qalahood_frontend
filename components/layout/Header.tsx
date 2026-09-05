"use client";

import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { CategoriesPopover } from "@/components/layout/CategoriesPopover";
import { MobileMenu } from "./MobileMenu";
import { useCart } from "@/hooks/useCart";

export function Header() {
  const cart = useCart();

  return (
    <header className="bg-white border-b border-gray-200 text-black">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <MobileMenu />
        <Link href="/" className="text-xl font-bold">
          <img src="/qalahood-logo.svg" alt="Qalahood" className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex  items-center gap-6 ">
          <CategoriesPopover />
          <Link href="/custom" className=" flex items-center gap-2 text-sm">
            Создать мерч
            <span className="bg-blue-500 text-gray-200 text-xs px-2 py-0.5 rounded-full">
              NEW
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Поиск">
            <Search size={20} />
          </button>

          <Link href="/cart" className="relative" aria-label="Корзина">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 bg-black text-gray-200 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.totalCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
