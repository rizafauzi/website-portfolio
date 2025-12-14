import {
  About,
  ApiResponse,
  Asset,
  Company,
  Project,
  RelationshipValue,
  Skill,
} from "@/types";

export const extractAsset = (
  assetId: string | undefined,
  assets: RelationshipValue<Asset>[] | undefined
) => {
  if (!assets || !assetId) {
    return "";
  }
  const imageUrl = assets.find((dt) => dt.sys.id === assetId)?.fields?.file
    ?.url;
  return imageUrl ? `https:${imageUrl}` : "";
};

export function getValue<T>(
  entries: RelationshipValue<T>[] | undefined,
  skillId: string
): T | undefined {
  if (!entries) {
    return undefined;
  }
  const skill = entries?.find((dt: any) => dt.sys.id === skillId)?.fields;
  if (!skill) {
    return undefined;
  }
  return skill as T;
}

export const extractSkill = (
  response: ApiResponse<any, Skill>,
  skillId: string
) => {
  const skill = getValue<Skill>(response.includes.Entry, skillId);
  if (!skill) {
    return undefined;
  }
  return {
    ...skill,
    imageUrl: extractAsset(skill?.image.sys.id, response?.includes?.Asset),
  };
};

export const extractCompany = (
  response: ApiResponse<any, Company>,
  companyId: string
) => {
  const company = getValue<Company>(response.includes.Entry, companyId);
  if (!company) {
    return undefined;
  }
  return {
    ...company,
    image: extractAsset(company?.logo.sys.id, response?.includes?.Asset),
  };
};
