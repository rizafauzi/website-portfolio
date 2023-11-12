import { BASE_URL, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, REVALIDATE } from "@/constants";
import { ApiResponse } from "@/types";

export async function apiRequest<T, R>(
  query: string,
  options: RequestInit = {
    method: "GET",
    next: {
      revalidate: 0,
    },
  },
): Promise<ApiResponse<T, R> | undefined> {
  const generatedOptions = {
    headers: {
      Accept: "application/json",
    },
  };
  const finalHeaders = {
    ...generatedOptions.headers,
    ...options.headers,
  };

  const finalOptions = {
    ...generatedOptions,
    ...options,
    headers: finalHeaders,
  };

  const url = `${BASE_URL}/spaces/${CONTENTFUL_SPACE_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}&${query}`;

  const resp = await fetch(url, finalOptions);

  if (!resp.ok) {
    console.error("[ERROR] Get Contentful: ", resp.statusText);
    return undefined;
  }

  const response: ApiResponse<T, R> = await resp.json();
  return response;
}
