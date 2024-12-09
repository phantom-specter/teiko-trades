import { appUserSession } from "./appUserSession";
import { Storage } from "@stacks/storage";
import { generateUniqueName } from ".";

const storage = new Storage({ userSession: appUserSession });

interface MetaData {
  name: string;
  // image?: string;
  description?: string;
  xlink?: string;
  homepage?: string;
  telegram?: string;
  discord?: string;
  facebook?: string;
}

export const saveMetaData = async (meta: MetaData) => {
  const data: MetaData = {
    name: meta?.name?.trim(),
    // image: meta?.image?.trim(),
    description: meta?.description ? meta?.description?.trim() : "",
    ...(meta?.xlink ? { xlink: meta?.xlink?.trim() } : {}),
    ...(meta?.homepage ? { homepage: meta?.homepage?.trim() } : {}),
    ...(meta?.telegram ? { telegram: meta?.telegram?.trim() } : {}),
    ...(meta?.discord ? { discord: meta?.discord?.trim() } : {}),
    ...(meta?.facebook ? { facebook: meta?.facebook?.trim() } : {}),
  };
  return await storage.putFile(
    generateUniqueName(meta?.name),
    JSON.stringify(data),
    {
      encrypt: false,
    },
  );
};
