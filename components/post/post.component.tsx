"use client";

import { SEARCH_PARAM_KEY } from "@/config/constants.config";
import { POSTS_ROUTE } from "@/config/routes.config";
import { TPost } from "@/data/models/post.model";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ImageWithFallback } from "../image-with-fallback/image-with-fallback.component";
import { TCategory } from "@/data/models/category.model";
import Category from "../category/category.component";
import { PLACEHOLDER_IMAGE_DATA } from "@/config/image.config";

type Props = Omit<TPost, "id"> & {
  categoriesData: TCategory[];
};

export default function BlogPost(props: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const search = params.get(SEARCH_PARAM_KEY) || "";

  return (
    <article
      onClick={() => router.push(`${POSTS_ROUTE}/${props.slug}`)}
      className="rounded-lg shadow-lg bg-white w-[400px] hover:translate-y-1 ease-in-out duration-300 cursor-pointer"
      role="article"
      aria-label="Post">
      <ImageWithFallback
        className="rounded-t object-cover"
        aria-label="Post Image"
        src={props.imageUrl}
        alt={props.title}
        width={400}
        height={300}
        placeholder={PLACEHOLDER_IMAGE_DATA}
      />
      <div className="p-4">
        <div className="flex gap-4 mb-2">
          {props.categoriesData.map((category) => (
            <Category
              key={category.id}
              href={`${POSTS_ROUTE}?category=${category.name}&search=${search}`}
              onClick={(e) => e.stopPropagation()}
              name={category.name}
            />
          ))}
        </div>
        <h3 aria-label="Title" role="heading" className="mb-2 text-lg font-extrabold">
          <Link href={`${POSTS_ROUTE}/${props.slug}`} prefetch>
            {props.title}
          </Link>
        </h3>
        <p aria-label="Summary" className="text-gray-600">
          <Link z-index="-1" href={`${POSTS_ROUTE}/${props.slug}`} prefetch>
            {props.excerpt}
          </Link>
        </p>
      </div>
    </article>
  );
}
