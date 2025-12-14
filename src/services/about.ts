import { apiRequest } from "@/configs/apiRequest";
import { fallbackAbout } from "@/constants";
import { About } from "@/types";

export const getAbout = async (): Promise<About | undefined> => {
  const response = await apiRequest<About, undefined>("content_type=about");
  return response?.items[0]?.fields || fallbackAbout;
};
