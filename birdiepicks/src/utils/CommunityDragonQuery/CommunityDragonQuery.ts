import itemJson from "@/CDragonJson/items.json";
import sumSpellJson from "@/CDragonJson/summoner-spells.json";

export interface ImageData {
  imageHeight: number;
  imageWidth: number;
  imageAlt: string;
  imageSrc: string;
  id: number;
}

export class CommDragonQuery {
  static summonerIconImage(iconId: number) {
    const ICON_API_PATH =
      "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons";
    const imageData: ImageData = {
      imageHeight: 150,
      imageWidth: 150,
      imageAlt: `Summoner Icon ${iconId}`,
      imageSrc: `${ICON_API_PATH}/${iconId}.jpg`,
      id: iconId,
    };
    return imageData;
  }

  static championIconImage(championId: number, largeSize = true) {
    const ICON_PATH =
      "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons";
    const imageData: ImageData = {
      imageHeight: largeSize ? 60 : 40,
      imageWidth: largeSize ? 60 : 40,
      imageAlt: `Champion Icon ${championId}`,
      imageSrc: `${ICON_PATH}/${championId}.png`,
      id: championId,
    };
    return imageData;
  }

  static sumSpellIconImage(spellId: number, largeSize = true) {
    const summonerSpellInfo = sumSpellJson.find(
      (summoner) => summoner.id === spellId,
    );
    if (!summonerSpellInfo)
      throw new Error("Summoner spell id not found despite given a spell ID");
    const imageData: ImageData = {
      imageHeight: largeSize ? 40 : 20,
      imageWidth: largeSize ? 40 : 20,
      imageAlt: `Summoner Spell ${summonerSpellInfo.name}`,
      imageSrc: jsonPathConverter(summonerSpellInfo.iconPath),
      id: spellId,
    };
    return imageData;
  }

  static itemIconImage(itemId: number, largeSize = false) {
    const placeholderImageData: ImageData = {
      imageHeight: largeSize ? 40 : 20,
      imageWidth: largeSize ? 40 : 20,
      imageAlt: "no items",
      imageSrc: jsonPathConverter(
        "/lol-game-data/assets/ASSETS/Items/Icons2D/GP_UI_Placeholder.png",
      ),
      id: 0,
    };
    if (itemId === 0) {
      return placeholderImageData;
    }
    const itemInfo = itemJson.find((item) => item.id === itemId);
    if (!itemInfo) {
      console.log("Item not found despite having the item ID");
      return placeholderImageData;
    }
    const imageData: ImageData = {
      imageHeight: largeSize ? 40 : 20,
      imageWidth: largeSize ? 40 : 20,
      imageAlt: `Item Icon ${itemInfo.name}`,
      imageSrc: jsonPathConverter(itemInfo.iconPath),
      id: itemId,
    };
    return imageData;
  }
}

function jsonPathConverter(path: string) {
  const convertStart =
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default";
  const pathArray = path.split("/");
  const lowerpath = pathArray.map((string) => string.toLowerCase()).slice(3);
  return `${convertStart}/${lowerpath.join("/")}`;
}
