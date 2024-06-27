import { AccountQuery } from "./Queries/AccountQuery/AccountQuery";
import { LeagueQuery } from "./Queries/LeagueQuery/LeagueQuery";
import { SummonerQuery } from "./Queries/SummonerQuery/SummonerQuery";
import { MatchQuery } from "./Queries/MatchQuery/MatchQuery";

export class RiotQuery {
  accountQuery: AccountQuery;
  summonerQuery: SummonerQuery;
  leagueQuery: LeagueQuery;
  matchQuery: MatchQuery;

  constructor() {
    this.accountQuery = new AccountQuery();
    this.summonerQuery = new SummonerQuery();
    this.leagueQuery = new LeagueQuery();
    this.matchQuery = new MatchQuery();
  }
}
