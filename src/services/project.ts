import orderBy from "lodash/orderBy";

import { apiRequest } from "@/configs/apiRequest";
import { ApiResponse, Company, Project, Skill } from "@/types";
import { extractAsset, extractCompany, extractSkill } from "@/utils/value.utils";

export async function getProjects(): Promise<Project[] | undefined> {
  const response = await apiRequest<Project, Skill | Company>("content_type=projects");

  const parsedData = response?.items?.map(item => ({
    ...item.fields,
    techUsed: item.fields.techStacks.map(dt =>
      extractSkill(response as ApiResponse<Project, Skill>, dt.sys.id),
    ) as Skill[],
    imgMobile: extractAsset(item?.fields?.mobileThumbnail?.sys?.id, response?.includes?.Asset),
    imgDesktop: extractAsset(item?.fields?.desktopThumbnail?.sys?.id, response?.includes?.Asset),
    company: extractCompany(
      response as ApiResponse<Project, Company>,
      item.fields.companyId.sys.id,
    ),
  }));

  return orderBy(parsedData, ["order"], "desc") || [];
}
