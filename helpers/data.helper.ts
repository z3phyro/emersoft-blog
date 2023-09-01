import { TCategory } from "@/data/models/category.model";
import { TPost } from "@/data/models/post.model";
import { readFileSync } from "fs";

export const loadPosts = () => {
  const file = readFileSync("data/blog.json");
  const data = JSON.parse(file.toString()).posts as TPost[];

  return data;
};

export const loadCategories = () => {
  const file = readFileSync("data/blog.json");
  const data = JSON.parse(file.toString()).categories as TCategory[];

  return data;
};
