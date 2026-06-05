import { apiRequest } from "@/configs/apiRequest";
import { ApiResponse, Asset } from "@/types";

interface ProjectAssetEntry {
  title: string;
  description: string;
  image: {
    sys: {
      id: string;
      linkType: string;
      type: string;
    };
  };
}

export async function getProjectAssets(projectSlug: string): Promise<string[]> {
  const response = await apiRequest<ProjectAssetEntry, Asset>(
    `content_type=projectAssets&fields.project.sys.id=${projectSlug}`
  );

  if (!response?.items?.length) {
    return [];
  }

  const imageUrls: string[] = [];

  response.items.forEach(item => {
    if (item.fields?.image?.sys?.id) {
      const assetId = item.fields.image.sys.id;
      const asset = response.includes?.Asset?.find(a => a.sys.id === assetId);

      if (asset?.fields?.file?.url) {
        imageUrls.push(asset.fields.file.url);
      }
    }
  });

  return imageUrls.length > 0 ? imageUrls : getDefaultAssets();
}

function getDefaultAssets(): string[] {
  return ["/assets/projects/bibit_desktop_1.png", "/assets/projects/bibit_mobile_1.png"];
}
