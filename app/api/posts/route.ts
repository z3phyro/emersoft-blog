import {
  CATEGORY_PARAM_KEY,
  PAGE_PARAM_KEY,
  PAGE_SIZE,
  SEARCH_PARAM_KEY,
} from "@/config/constants.config";
import { TPost } from "@/data/models/post.model";
import { getIdFromCategory } from "@/helpers/categories.helper";
import { readFileSync } from "fs";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const query = req.url.split("?");
  const params = query.length > 1 ? new URLSearchParams(query[1]) : null;

  const file = readFileSync("data/blog.json");
  const data = JSON.parse(file.toString());

  if (!params) {
    return NextResponse.json(data.posts);
  } else {
    const search = params.get(SEARCH_PARAM_KEY);
    const category = params.get(CATEGORY_PARAM_KEY);
    const page = Number(params.get(PAGE_PARAM_KEY) || "1");
    const categoryId = category ? getIdFromCategory(category, data.categories) : undefined;

    const filteredData = (data.posts as TPost[])
      .filter((post) => !search || post.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
      .filter((post) => !categoryId || post.categories.some((id) => id === categoryId))
      .slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page);

    return NextResponse.json(filteredData);
  }
}
