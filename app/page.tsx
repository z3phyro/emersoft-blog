import { CATEGORIES_ENDPOINT, POSTS_ENDPOINT } from "@/config/endpoints.config";
import { TPost } from "@/data/models/post.model";
import BlogPost from "@/components/post/post.component";
import Link from "next/link";
import { POSTS_ROUTE } from "@/config/routes.config";
import {
  CATEGORY_PARAM_KEY,
  PAGE_PARAM_KEY,
  PAGE_SIZE,
  SEARCH_PARAM_KEY,
} from "@/config/constants.config";
import { TCategory } from "@/data/models/category.model";
import { findCategories, getIdFromCategory } from "@/helpers/categories.helper";
import Filters from "@/components/filters/filters.component";
import { setValueAndGetUrlFromSearchParams } from "@/helpers/query-params.helper";

async function getData(): Promise<{ posts: TPost[]; categories: TCategory[] }> {
  const [posts, categories] = await Promise.allSettled([
    fetch(POSTS_ENDPOINT),
    fetch(CATEGORIES_ENDPOINT),
  ]);

  return {
    posts: await (posts as any).value.json(),
    categories: await (categories as any).value.json(),
  };
}

export const metadata = {
  title: "Emersoft Blog",
  description: "A blog to test applicants",
  openGraph: {
    images: ["/images/blog.jpg"],
  },
};

export default async function Post({ searchParams }: { searchParams: any }) {
  const { posts, categories } = await getData();

  const page = Number(searchParams[PAGE_PARAM_KEY] || "1");
  const category = searchParams[CATEGORY_PARAM_KEY];
  const search = searchParams[SEARCH_PARAM_KEY];
  const categoryId = category ? getIdFromCategory(category, categories) : undefined;

  const filteredPosts = posts
    .filter((post) => !search || post.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
    .filter((post) => !categoryId || post.categories.some((id) => id === categoryId))
    .slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page);

  return (
    <>
      <Filters categories={categories} />
      <section className="container">
        <div className="flex flex-wrap justify-center tablet:justify-start gap-8 mb-8">
          {filteredPosts.length ? (
            filteredPosts.map((post) => (
              <BlogPost
                key={post.slug}
                {...post}
                categoriesData={findCategories(post.categories, categories)}
              />
            ))
          ) : (
            <h3 className="text-center w-full">There are no results for this selection</h3>
          )}
        </div>
      </section>

      <ul className="flex justify-center items-center gap-8">
        {page > 1 && (
          <li>
            <Link
              className="py-2 px-4 rounded-lg shadow hover:shadow-lg ease-in-out duration-300"
              href={`${POSTS_ROUTE}?${setValueAndGetUrlFromSearchParams(
                PAGE_PARAM_KEY,
                (page - 1).toString(),
                searchParams,
              )}`}>
              Previous
            </Link>
          </li>
        )}
        {filteredPosts.length === PAGE_SIZE && (
          <li className="w-[97px]">
            <Link
              className="py-2 px-4 rounded-lg shadow hover:shadow-lg ease-in-out duration-300"
              href={`${POSTS_ROUTE}?${setValueAndGetUrlFromSearchParams(
                PAGE_PARAM_KEY,
                (page + 1).toString(),
                searchParams,
              )}`}>
              Next
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
