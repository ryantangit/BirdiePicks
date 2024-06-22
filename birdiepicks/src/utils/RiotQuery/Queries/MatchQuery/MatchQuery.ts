import { RiotRateLimiterWrapper } from "../../RiotRateLimiterWrapper";
import { RegionDataManagement } from "@/utils/RegionDataManagement";

interface MatchIds {
  matchList: string[];
}

const regionDataManagement = new RegionDataManagement();
export class MatchQuery {

  public async getLast20Matches(puuid: string, regionRoute: string) {
    const apiPath = `/lol/match/v5/matches/by-puuid/${puuid}/ids`
    const riotRateLimiter = new RiotRateLimiterWrapper(regionDataManagement.RouteToAPICluster(regionRoute), apiPath);
    try {
      const matchListResults: MatchIds = await riotRateLimiter.execute();
      if (!matchListResults) {
        throw new Error("Match List Query returned nothing");
      }
      return matchListResults;
    } catch (error) {
      console.error(error);
    }
  }
}
