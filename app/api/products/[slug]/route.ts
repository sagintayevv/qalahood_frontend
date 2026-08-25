import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/mock-data/products";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return NextResponse.json({ message: "Товар не найден" }, { status: 404 });
  }

  return NextResponse.json(product);
}
