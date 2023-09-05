import { loadPosts } from "@/helpers/data.helper";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = loadPosts();
  const url = process.env.BLOG_URL || "https://blog.emersoft.com";
  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 1,
    },
    ...(posts.map((post) => ({
      url: `${url}/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.5,
    })) as MetadataRoute.Sitemap),
  ];
}
