import { RegionDataManagement } from "@/utils/RegionDataManagement";
import { RiotRateLimiterWrapper } from "../RiotRateLimiterWrapper";

export interface LeagueEntryDTO {
  leagueId: string;
  summonerId: string;
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: string;
  wins: string;
  losses: string;
  hotStreak: string;
  veteran: string;
  freshBlood: string;
  inactive: string;
}

const regionDataManagement = new RegionDataManagement();
const LEAGUE_PATH = "/lol/league/v4/entries/by-summoner/"
export class LeagueQuery {

  public async getRanks(summonerId: string, regionRoute: string) {
    const apiPath = `LEAGUE_PATH+${summonerId}`;
    const riotRateLimiter = new RiotRateLimiterWrapper(regionDataManagement.RouteToAPIHead(regionRoute), apiPath);
    try {
      const response: LeagueEntryDTO[] = await riotRateLimiter.execute();
      if (!response) {
        throw new Error("League Query getRanks returned nothing");
      }
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
