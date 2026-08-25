export interface Category {
  id: string;
  title: string;
  slug: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "1",
    title: "Hoodie",
    slug: "hoodies",
  },
  {
    id: "2",
    title: "T-shirts",
    slug: "t-shirts",
  },
];
