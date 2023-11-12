import orderBy from "lodash/orderBy";

import { apiRequest } from "@/configs/apiRequest";
import { ApiResponse, Company, Project, Skill } from "@/types";
import { extractCompany, extractSkill } from "@/utils/value.utils";

export async function getProjects(): Promise<Project[] | undefined> {
  const response = await apiRequest<Project, Skill | Company>("content_type=projects");

  const parsedData = response?.items?.map(item => ({
    ...item.fields,
    techUsed: item.fields.techStacks.map(dt =>
      extractSkill(response as ApiResponse<Project, Skill>, dt.sys.id),
    ) as Skill[],
    company: extractCompany(
      response as ApiResponse<Project, Company>,
      item.fields.companyId.sys.id,
    ),
  }));

  return orderBy(parsedData, ["order"], "desc") || [];
}
