import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/mock-data/products";

export async function GET() {
  return NextResponse.json(PRODUCTS);
}
