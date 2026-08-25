import { baseApi } from "./baseApi";
import { Product } from "@/types/product";

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),

    getProductBySlug: builder.query<Product, string>({
      query: (slug) => `/product/${slug}`,
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductBySlugQuery } = productApi;
