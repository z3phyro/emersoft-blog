import { PAGE_PARAM_KEY } from "@/config/constants.config";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ReadonlyURLSearchParams } from "next/navigation";

export const setValueAndGetUrlFromSearchParams = (
  key: string,
  value: string,
  searchParams: { [id: string]: string },
) => {
  const current = new URLSearchParams(Array.from(Object.entries(searchParams)));
  current.set(key, value);
  return current.toString();
};

export const setQueryParam = (
  key: string,
  value: string,
  url: string,
  router: AppRouterInstance,
  searchParams: ReadonlyURLSearchParams,
  strat: "push" | "replace" = "push",
) => {
  const current = new URLSearchParams(Array.from(searchParams.entries()));

  current.set(key, value);
  current.delete(PAGE_PARAM_KEY);
  const query = current.toString();

  if (strat === "push") {
    router.push(`${url}${query ? `?${query}` : ""}`);
  } else {
    router.replace(`${url}${query ? `?${query}` : ""}`);
  }
};
