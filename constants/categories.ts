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
    title: "Футболки",
    slug: "t-shirts",
  },
  {
    id: "3",
    title: "Свитшоты",
    slug: "swetears",
  },
];
