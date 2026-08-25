"use client";

import { useGetProductsQuery } from "@/store/api/productApi";

export default function Home() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка при загрузке товаров</p>;
  }

  return <pre>{JSON.stringify(products, null, 2)}</pre>;
}
