"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cart = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();

    cart.add({
      id: product.id,
      title: product.title,
      image: product.images[0],
      price: product.price,
      size: product.sizes[0],
      color: product.colors[0],
      quantity: 1,
    });
  };

  return (
    <Link href={`/product/${product.slug}`} className="group block py-3">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-3 items-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h3 className="text-xs md:text-sm font-medium text-gray-900 mb-1">
        {product.title}
      </h3>

      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-gray-900">
          {product.price.toLocaleString("ru-RU")} ₸
        </span>
        {product.oldPrice && (
          <span className="text-xs text-gray-400 line-through">
            {product.oldPrice.toLocaleString("ru-RU")} ₸
          </span>
        )}
      </div>

      <Button
        onClick={handleAddToCart}
        variant="primary"
        className="text-sm w-full"
      >
        В корзину
      </Button>
    </Link>
  );
}
