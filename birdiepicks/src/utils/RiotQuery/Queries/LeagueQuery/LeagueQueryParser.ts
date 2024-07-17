import { LeagueEntryDTO } from "../QueryDataTypes";

export interface ParsedLeagueQuery {
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
}

const SOLOQRANKQTYPE = "RANKED_SOLO_5x5"

export class LeagueQueryParser {

  //TODO: Ranked Flex later, for now I don't think it's a priority to show
  public parse(leagueEntries: LeagueEntryDTO[]) {
    //Find the soloQ rank
    const soloQ = leagueEntries.find((league) => league.queueType === SOLOQRANKQTYPE);
    if (!soloQ) {
      return null;
    }
    const soloQInfo: ParsedLeagueQuery = {
      tier: soloQ.tier,
      rank: soloQ.rank,
      leaguePoints: soloQ?.leaguePoints,
      wins: soloQ?.wins,
      losses: soloQ.losses
    }
    return soloQInfo;

  }
}
