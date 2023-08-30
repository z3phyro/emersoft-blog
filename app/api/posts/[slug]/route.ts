import { loadPosts } from "@/helpers/posts.helper";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params: { slug } }: { params: { slug: string } }) {
  const data = loadPosts();
  // I still need to deal with missing data
  const post = data.find((post) => post.slug === slug);

  return NextResponse.json(post);
}
