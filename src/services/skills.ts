import orderBy from "lodash/orderBy";

import { apiRequest } from "@/configs/apiRequest";
import { ApiResponse, Company, Expertise, Skill } from "@/types";
import { extractAsset } from "@/utils/value.utils";
import { extractSkill } from "@/utils/value.utils";
// export async function getCompanies() {
//   return apiRequest('content_type=company');
// }

export async function getCompanies(): Promise<Company[] | undefined> {
  const response = await apiRequest<Company, undefined>("content_type=company");

  return (
    orderBy(
      response?.items?.map(item => ({
        ...item.fields,
        image: extractAsset(item.fields.logo.sys.id, response?.includes?.Asset),
      })),
      ["order"],
      "desc",
    ) || []
  );
}

export async function getExpertise(): Promise<Expertise[] | undefined> {
  const response = await apiRequest<Expertise, Skill>("content_type=expertise");

  return (
    orderBy(
      response?.items?.map(item => ({
        ...item.fields,
        techUsed: item.fields.skills.map(dt =>
          extractSkill(response as ApiResponse<Expertise, Skill>, dt.sys.id),
        ) as Skill[],
      })),
      ["order"],
      "desc",
    ) || []
  );
}
