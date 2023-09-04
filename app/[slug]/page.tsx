import Category from "@/components/category/category.component";
import { ImageWithFallback } from "@/components/image-with-fallback/image-with-fallback.component";
import { CATEGORY_PARAM_KEY, FALLBACK_LARGE_IMAGE_URL } from "@/config/constants.config";
import { POSTS_ENDPOINT } from "@/config/endpoints.config";
import { PLACEHOLDER_IMAGE_DATA } from "@/config/image.config";
import { POSTS_ROUTE } from "@/config/routes.config";
import { TPost } from "@/data/models/post.model";
import { Metadata } from "next";
import { notFound } from "next/navigation";

async function getData(slug: string): Promise<TPost> {
  const res = await fetch(`${POSTS_ENDPOINT}/${slug}`);

  return res.json();
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const post = await getData(slug);

  return {
    title: post?.title || "Emersoft blog - Not found",
    description: post?.excerpt || "Not found",
    openGraph: {
      images: [...(post ? [post?.imageUrl] : [])],
    },
  };
}

export default async function Post({ params: { slug } }: Props) {
  const post = await getData(slug);

  if (!post) notFound();

  return (
    <article className="container flex flex-col items-center">
      <div className="relative w-full h-[400px] mb-8">
        <ImageWithFallback
          style={{ viewTransitionName: `image-${post.slug}` }}
          aria-label="Main post image"
          className="object-cover"
          src={post.imageUrl}
          fallback={FALLBACK_LARGE_IMAGE_URL}
          placeholder={PLACEHOLDER_IMAGE_DATA}
          alt="Post Main Image"
          fill
        />
      </div>
      <div className="flex my-2 gap-4">
        {post.categoriesData?.map((category) => (
          <Category
            aria-label="Category"
            key={category.id}
            href={`/${POSTS_ROUTE}?${CATEGORY_PARAM_KEY}=${category.name}`}
            name={category.name}
          />
        ))}
      </div>
      <h1 aria-label="Post title" className="text-4xl mb-4"
        style={{ viewTransitionName: `title-${post.slug}` }}
      >{post.title}</h1>
      <p aria-label="Post content" className="self-start"
        style={{ viewTransitionName: `content-${post.slug}` }}
      >{post.excerpt}</p>
    </article>
  );
}
