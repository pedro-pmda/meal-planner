import { SearchRecipe, Recipe } from "@/types/spoonacular";
import { AnyCnameRecord } from "dns";

const apiKey = import.meta.env.VITE_APP_SPOONACULAR_API;
const RECIPE_API = `https://api.spoonacular.com`;
const API_SING = `apiKey=${apiKey}`;

interface ApiOptions {
  query?: string;
}

export const useRecipeApi = async (
  path: string,
  options?: ApiOptions
): Promise<any> => {
  const query = options?.query ? getQuery(options?.query) : "";

  const requestURI = getRequestURI(path, query);

  return useFetch(requestURI);
};

const getQuery = (query?: string): string => {
  return query ? `&query=${query}` : "";
};

const getRequestURI = (path: string, query?: string): string => {
  const apiPath = `${RECIPE_API}/${path}`;
  return `${apiPath}?${API_SING}${query}`;
};

export const useFetch = async (requestURI: string): Promise<any> => {
  const res = await fetch(requestURI);
  if (!res.ok) {
    throw new Error("Failed to fecth data");
  }
  const jsonRes = await res.json();
  return jsonRes as any;
};

export const useRecipeSearch = async (query: string): Promise<SearchRecipe> => {
  try {
    return (await useRecipeApi("recipe/search", { query })) as any;
  } catch {
    throw new Error("An error ocurred while trying to search recipes");
  }
};

export const useRecipeInformation = async (id: string): Promise<Recipe> => {
  try {
    return (await useRecipeApi(
      `recipes/api/${id}/information`
    )) as AnyCnameRecord;
  } catch {
    throw new Error(
      "An error ocurred while trying to retrieve recipe information"
    );
  }
};
