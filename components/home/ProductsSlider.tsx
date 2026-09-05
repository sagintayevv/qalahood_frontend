"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useGetProductsQuery } from "@/store/api/productApi";
import { ProductCard } from "@/components/product/ProductCard";

export function ProductsSlider() {
  const { data: products, isLoading } = useGetProductsQuery();

  if (isLoading) return "loading";
  if (!products || products.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Айтемы в наличии</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
