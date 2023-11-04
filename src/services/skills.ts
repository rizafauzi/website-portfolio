import orderBy from "lodash/orderBy";

import { apiRequest } from "@/configs/apiRequest";
import { Company } from "@/types";

import { extractAsset } from ".";

const CONTENTFUL_SPACE_ID = "rggsnb5n8pwc";
const CONTENTFUL_ACCESS_TOKEN = "-iD-36YZb9Z_2KOXaNKYyPxecS98uKpyQxxSOTltodw";

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
