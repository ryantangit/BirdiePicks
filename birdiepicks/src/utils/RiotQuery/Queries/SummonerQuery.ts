import { RiotRateLimiterWrapper } from "../RiotRateLimiterWrapper";
import { RegionDataManagement } from "@/utils/RegionDataManagement";


interface SummonerDTO {
  accountId: string,
  profileIconId: number,
  revisionDate: number,
  id: number,
  puuid: number,
  summonerLevel: number
}

const regionDataManagement = new RegionDataManagement();
const SUMMONERID_ROUTE = "/lol/summoner/v4/summoners/by-puuid/";
export class SummonerQuery {

  public async getSummonerInfo(puuid: string, regionRoute: string) {
    const endPoint = SUMMONERID_ROUTE + puuid;
    const riotRateLimiterWrapper = new RiotRateLimiterWrapper(regionDataManagement.RouteToAPIHead(regionRoute), endPoint);
    try {
      const summonerResponse: SummonerDTO = await riotRateLimiterWrapper.execute();
      if (!summonerResponse) {
        console.error(`SummonerResponse results did not query properly`);
      }
      return summonerResponse;
    } catch (error) {
      console.log(error);
    }

  }
}


