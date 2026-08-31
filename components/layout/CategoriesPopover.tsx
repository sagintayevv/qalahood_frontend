"use client";

import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { CATEGORIES } from "@/constants";

export function CategoriesPopover() {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer outline-none">
        Магазин
      </PopoverButton>
      <PopoverPanel
        anchor="bottom start"
        className="mt-2 w-56 rounded-xl bg-white p-4 shadow-lg border border-gray-100"
      >
        <div className="flex flex-col gap-3">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/catalog?category=${category.slug}`}
              className="text-sm text-gray-700 hover:text-black"
            >
              {category.title}
            </Link>
          ))}

          <Link
            href="/catalog"
            className="text-sm font-medium text-black pt-2 border-t border-gray-100"
          >
            Посмотреть все
          </Link>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
