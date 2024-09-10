import { SearchRecipe, Recipe } from "@/types/spoonacular";

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
};

const getQuery = (query?: string): string => {
  return query ? `&query=${query}` : "";
};

const getRequestURI = (path: string, query?: string): string => {
  const apiPath = `${RECIPE_API}/${path}`;
  return `${apiPath}?${API_SING}${query}`;
};
