import { TCategory } from "./category.model";

export type TPost = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
  categoriesData?: TCategory[];
};
