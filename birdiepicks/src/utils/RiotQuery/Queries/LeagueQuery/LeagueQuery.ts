import { RegionDataManagement } from "@/utils/RegionDataManagement";
import { RiotRateLimiterWrapper } from "@/utils/RiotQuery/RiotRateLimiterWrapper";
import { LeagueQueryParser } from "./LeagueQueryParser";
import { LeagueEntryDTO } from "../QueryDataTypes";


const regionDataManagement = new RegionDataManagement();
const LEAGUE_PATH = "/lol/league/v4/entries/by-summoner/"

export class LeagueQuery {

  public async getRank(summonerId: string, regionRoute: string) {
    const apiPath = `${LEAGUE_PATH}${summonerId}`;
    const riotRateLimiter = new RiotRateLimiterWrapper(regionDataManagement.RouteToAPIHead(regionRoute), apiPath);
    try {
      const leagueEntries: LeagueEntryDTO[] = await riotRateLimiter.execute();
      if (!leagueEntries) {
        throw new Error("League Query getRanks returned nothing");
      }
      const leagueQueryParser = new LeagueQueryParser();
      return leagueQueryParser.parse(leagueEntries);
    } catch (error) {
      console.error(error);
    }
  }
}
