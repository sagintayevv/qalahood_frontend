"use client";

import { useGetProductsQuery } from "@/store/api/productApi";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка при загрузке товаров</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
    </div>
  );
}
