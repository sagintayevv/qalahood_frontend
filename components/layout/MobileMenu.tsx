"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { CATEGORIES } from "@/constants";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
        aria-label="Открыть меню"
      >
        <Menu size={24} />
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <div className="fixed inset-0 bg-black/25" aria-hidden="true" />

        <div className="fixed inset-0 flex">
          <DialogPanel className="relative flex w-full max-w-xs flex-col bg-white p-6 overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-6"
              aria-label="Закрыть меню"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-4">
              <p className="font-medium text-gray-900">Магазин</p>
              {CATEGORIES.map((category) => (
                <Link
                  key={category.id}
                  href={`/catalog?category=${category.slug}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-600 pl-2"
                >
                  {category.title}
                </Link>
              ))}

              <Link
                href="/custom"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-900 pt-4 border-t border-gray-200"
              >
                Создать мерч
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
