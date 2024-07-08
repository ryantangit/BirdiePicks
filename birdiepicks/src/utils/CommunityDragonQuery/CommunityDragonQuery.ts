import itemJson from "@/CDragonJson/items.json";
import sumSpellJson from "@/CDragonJson/summoner-spells.json"

interface ImageData {
  imageHeight: number;
  imageWidth: number;
  imageAlt: string;
  imageSrc: string;
}

export class CommDragonQuery {

  static summonerIconImage(iconId: number) {
    const ICON_API_PATH = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons";
    const imageData: ImageData = {
      imageHeight: 150,
      imageWidth: 150,
      imageAlt: `Summoner Icon ${iconId}`,
      imageSrc: `${ICON_API_PATH}/${iconId}.jpg`
    }
    return imageData;
  }

  static championIconImage(championId: number) {
    const ICON_PATH = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons";
    const imageData: ImageData = {
      imageHeight: 60,
      imageWidth: 60,
      imageAlt: `Champion Icon ${championId}`,
      imageSrc: `${ICON_PATH}/${championId}.png`
    }
    return imageData;
  }

  static sumSpellIconImage(spellId: number) {
    const summonerSpellInfo = sumSpellJson.find((summoner) => summoner.id === spellId);
    return summonerSpellInfo?.name
  }
}
