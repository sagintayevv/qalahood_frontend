"use client";

import { Hero } from "@/components/home/Hero";
import { ProductsSlider } from "@/components/home/ProductsSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Hero />
      <ProductsSlider />
    </div>
  );
}
