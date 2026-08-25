import { api } from "@/lib/axios";
import { Product } from "@/types/product";

export const productService = {
  getAll: async (): Promise<Product[]> => {
    const { data } = await api.get<Product[]>("/products");
    return data;
  },
  getBySlug: async (slug: string): Promise<Product> => {
    const { data } = await api.get<Product>(`/products/${slug}`);
    return data;
  },
};
