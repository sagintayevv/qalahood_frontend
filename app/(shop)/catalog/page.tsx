"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useGetProductsQuery } from "@/store/api/productApi";
import { ProductCard } from "@/components/product/ProductCard";
import { CategorySidebar } from "@/components/product/CategorySidebar";
import { CatalogToolbar } from "@/components/product/CatalogToolbar";

export default function CatalogPage() {
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? undefined;

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (!activeCategory) return products;

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen w-full ">
      <CatalogToolbar count={filteredProducts.length} />
      <div className="flex gap-10 py-5">
        <CategorySidebar activeCategory={activeCategory} />

        <div className="flex-1">
          {isLoading && "Загрузка...."}

          {error && (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-gray-900 mb-2">
                Не удалось загрузить товары
              </p>
              <p className="text-gray-400 mb-4">Failed to fetch</p>
              <button
                onClick={() => refetch()}
                className="text-sm underline text-gray-900"
              >
                Попробовать снова
              </button>
            </div>
          )}

          {!isLoading && !error && filteredProducts.length == 0 && (
            <p className=" text-black text-center ">Товары не найдены</p>
          )}

          {filteredProducts.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
