export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalog",
  PRODUCT: (slug: string) => `/product/${slug}`,
  CART: "/cart",
  CHECKOUT: "/checkout",
  LOGIN: "/login",
  REGISTER: "/register",
  ACCOUNT: "/account",
  SEARCH: "/search",
} as const;
