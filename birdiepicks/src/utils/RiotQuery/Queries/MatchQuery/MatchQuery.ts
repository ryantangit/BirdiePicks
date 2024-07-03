import { RiotRateLimiterWrapper } from "../../RiotRateLimiterWrapper";
import { RegionDataManagement } from "@/utils/RegionDataManagement";
import { MatchDto } from "../QueryDataTypes";
import { MatchParsedData, MatchQueryParser } from "./MatchQueryParser";


const regionDataManagement = new RegionDataManagement();
export class MatchQuery {

  public async getLast10Matches(puuid: string, regionRoute: string) {
    const apiPath = `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=1` //TODO: change this later
    const riotRateLimiter = new RiotRateLimiterWrapper(regionDataManagement.RouteToAPICluster(regionRoute), apiPath);
    try {
      const matchListResults: string[] = await riotRateLimiter.execute();
      if (!matchListResults) {
        throw new Error("Match List Query returned nothing");
      }
      return matchListResults;
    } catch (error) {
      console.error(error);
    }
  }

  public async getMatchInfo(matchId: string, regionRoute: string, puuid: string) {
    const apiPath = `/lol/match/v5/matches/${matchId}`
    const riotRateLimiter = new RiotRateLimiterWrapper(regionDataManagement.RouteToAPICluster(regionRoute), apiPath);
    try {
      const matchData: MatchDto = await riotRateLimiter.execute();
      const matchQueryParser = new MatchQueryParser();
      const parsedMatchData: MatchParsedData = matchQueryParser.parse(matchData, puuid);
      if (!matchData) {
        throw new Error("Match data fetch query returned nothing");
      }
      return parsedMatchData;
    } catch (error) {
      console.error(error);
    }
  }
}
