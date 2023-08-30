import { POSTS_ENDPOINT } from "@/config/endpoints.config";
import { TPost } from "@/data/models/post.model";
import BlogPost from "@/components/post/post.component";

async function getData(): Promise<TPost[]> {
  const res = await fetch(POSTS_ENDPOINT);

  return res.json();
}

export default async function Post() {
  const posts = await getData();
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {posts.map((post) => (
        <BlogPost key={post.slug} {...post} />
      ))}
    </div>
  );
}
