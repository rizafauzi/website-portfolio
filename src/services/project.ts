import orderBy from "lodash/orderBy";

import { apiRequest } from "@/configs/apiRequest";
import { Company, Project, Skill } from "@/types";

import { extractAsset } from ".";

const CONTENTFUL_SPACE_ID = "rggsnb5n8pwc";
const CONTENTFUL_ACCESS_TOKEN = "-iD-36YZb9Z_2KOXaNKYyPxecS98uKpyQxxSOTltodw";

// export async function getCompanies() {
//   return apiRequest('content_type=company');
// }

export async function getProjects(): Promise<Project[] | undefined> {
  const response = await apiRequest<Project, Skill | Company>("content_type=projects");

  function getValue<T>(skillId: string): T | undefined {
    const entries = response?.includes?.Entry;
    if (!entries) {
      return undefined;
    }
    const skill = entries.find(dt => dt.sys.id === skillId)?.fields;
    if (!skill) {
      return undefined;
    }
    return skill as T;
  }

  const extractSkill = (skillId: string) => {
    const skill = getValue<Skill>(skillId);
    if (!skill) {
      return undefined;
    }
    return {
      ...skill,
      imageUrl: extractAsset(skill?.image.sys.id, response?.includes?.Asset),
    };
  };

  const extractCompany = (companyId: string) => {
    const company = getValue<Company>(companyId);
    if (!company) {
      return undefined;
    }
    return {
      ...company,
      image: extractAsset(company?.logo.sys.id, response?.includes?.Asset),
    };
  };

  return (
    orderBy(
      response?.items?.map(item => ({
        ...item.fields,
        techUsed: item.fields.techStacks.map(dt => extractSkill(dt.sys.id)) as Skill[],
        company: extractCompany(item.fields.companyId.sys.id),
      })),
      ["order"],
      "desc",
    ) || []
  );
}
