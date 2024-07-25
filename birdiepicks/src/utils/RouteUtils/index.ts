import { RegionDataManagement } from "../RegionDataManagement";

export {
  RouteUtils
}

class RouteUtils {

  static generateSummonerRoute(gametag: string, gameName: string, regionName: string) {
    const regionDataManagement = new RegionDataManagement();
    const DELIMITER = "-"
    const regionRoute = regionDataManagement.nameToRoute(regionName);
    const gameNameGameTag = `${gameName.toLowerCase()}${DELIMITER}${gametag.toLowerCase()}`

    let summonerRoute = `/summoner/${regionRoute}/${gameNameGameTag}`
    const encodedSummonerRoute = encodeURI(summonerRoute);
    return encodedSummonerRoute;
  }
}


