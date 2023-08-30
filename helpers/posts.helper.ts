import { TPost } from "@/data/models/post.model";
import { readFileSync } from "fs";

export const loadPosts = () => {
  const file = readFileSync("data/blog.json");
  const data = JSON.parse(file.toString()).posts as TPost[];

  return data;
};
