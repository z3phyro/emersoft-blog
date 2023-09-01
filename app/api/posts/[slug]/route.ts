import { findCategories } from "@/helpers/categories.helper";
import { loadCategories, loadPosts } from "@/helpers/data.helper";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params: { slug } }: { params: { slug: string } }) {
  const data = loadPosts();
  const categories = loadCategories();

  const post = data.find((post) => post.slug === slug);

  if (post) {
    post.categoriesData = findCategories(post?.categories, categories);
  }

  return NextResponse.json(post || null);
}
