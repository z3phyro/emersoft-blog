"use client";

import { useDebounce } from "@/hooks/useDebounce";
import Input from "../input/input.component";
import { useRouter, useSearchParams } from "next/navigation";
import { POSTS_ROUTE } from "@/config/routes.config";
import { CATEGORY_PARAM_KEY, SEARCH_PARAM_KEY } from "@/config/constants.config";
import { TCategory } from "@/data/models/category.model";
import Select from "../select/select.component";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { setQueryParam } from "@/helpers/query-params.helper";

interface Props {
  categories: TCategory[];
}
export default function Filters({ categories }: Props) {
  const debounce = useDebounce();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get(SEARCH_PARAM_KEY) || "";
  const category = searchParams.get(CATEGORY_PARAM_KEY) || "";

  const setSearch = (value: string) => {
    debounce(() => {
      setQueryParam(SEARCH_PARAM_KEY, value, POSTS_ROUTE, router, searchParams, "replace");
    }, 300);
  };

  const setCategory = (value: string) => {
    setQueryParam(CATEGORY_PARAM_KEY, value, POSTS_ROUTE, router, searchParams, "push");
  };

  return (
    <section className="flex container flex-col items-center justify-center gap-4 md:gap-8 md:flex-row mb-8">
      <Input
        className="w-full max-w-[400px] md:w-[250px]"
        defaultValue={search}
        onChange={setSearch}
        placeholder="Search by title"
        leading={<MagnifyingGlassIcon className="w-6 h-6" color="black" />}
      />
      <Select
        className="w-full max-w-[400px] md:w-[250px]"
        selected={category}
        setSelected={setCategory}
        options={categories.map((category) => category.name)}
        placeholder="Filter by category"
      />
    </section>
  );
}
