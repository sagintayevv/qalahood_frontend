"use client";

import Link from "next/link";
import { CATEGORIES } from "@/constants";

interface CategorySidebarProps {
  activeCategory?: string;
}

export function CategorySidebar({ activeCategory }: CategorySidebarProps) {
  return (
    <aside className="w-56 shrink-0 hidden md:flex ">
      <div className="pb-6 border-b border-gray-200">
        <h3 className="text-xs font-bold tracking-wide text-gray-900 mb-4">
          КАТЕГОРИЯ
        </h3>

        <nav className="flex flex-col gap-3">
          <Link
            href="/catalog"
            className={`text-sm ${
              !activeCategory ? "font-bold text-gray-900" : "text-gray-500"
            }`}
          >
            Все
          </Link>

          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/catalog?category=${category.slug}`}
              className={`text-sm ${
                activeCategory === category.slug
                  ? "font-bold text-gray-900"
                  : "text-gray-500"
              }`}
            >
              {category.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
