import { POSTS_ENDPOINT } from "@/config/endpoints.config";
import { TPost } from "@/data/models/post.model";
import Image from "next/image";

async function getData(slug: string): Promise<TPost> {
  const res = await fetch(`${POSTS_ENDPOINT}/${slug}`);

  return res.json();
}

export default async function Post({ params: { slug } }: { params: { slug: string } }) {
  const post = await getData(slug);

  return (
    <article className="container flex flex-col items-center">
      <Image
        className="w-full h-[400px] object-cover mb-8"
        src={post.imageUrl}
        alt="Post Main Image"
        width={1024}
        height={400}
      />
      <h1 className="text-4xl mb-4">{post.title}</h1>
      <p className="self-start">{post.excerpt}</p>
    </article>
  );
}
