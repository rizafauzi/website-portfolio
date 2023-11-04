import { Asset, RelationshipValue } from "@/types";

export const extractAsset = (
  assetId: string | undefined,
  assets: RelationshipValue<Asset>[] | undefined,
) => {
  if (!assets || !assetId) {
    return "";
  }
  const imageUrl = assets.find(dt => dt.sys.id === assetId)?.fields?.file?.url;
  return imageUrl ? `https:${imageUrl}` : "";
};
