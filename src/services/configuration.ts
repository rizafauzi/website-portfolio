import { apiRequest } from "@/configs/apiRequest";
import { Configuration } from "@/types";

export async function getProjectConfig(): Promise<string[]> {
  const response = await apiRequest<Configuration, unknown>("content_type=configuration");

  const parsedData = response?.items?.map(item => ({
    ...item.fields,
  })) as Configuration[];

  return parsedData?.length ? (parsedData[0]?.value as string[]) : [];
}
