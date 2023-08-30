"use client";

import { POSTS_ROUTE } from "@/config/routes.config";
import { TPost } from "@/data/models/post.model";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = Omit<TPost, "id">;

export default function BlogPost(props: Props) {
  const router = useRouter();
  return (
    <article
      onClick={() => router.push(`${POSTS_ROUTE}/${props.slug}`)}
      className="rounded shadow-md bg-white w-[400px] hover:translate-y-1 ease-in-out duration-300 cursor-pointer">
      <Image
        className="rounded-t object-cover"
        src={props.imageUrl}
        alt={props.title}
        width={400}
        height={300}
      />
      <div className="p-4">
        <div className="flex gap-4 mb-2">
          {props.categories.map((category) => (
            <Link key={category} href={`${category}`}>
              {category}
            </Link>
          ))}
        </div>
        <h3 className="mb-2 text-lg font-extrabold">{props.title}</h3>
        <p className="text-gray-600">{props.excerpt}</p>
      </div>
    </article>
  );
}
