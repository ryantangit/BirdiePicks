import { AccountQuery } from "./Queries/AccountQuery";
import { LeagueQuery } from "./Queries/LeagueQuery/LeagueQuery";
import { SummonerQuery } from "./Queries/SummonerQuery/SummonerQuery";

export class RiotQuery {
  accountQuery: AccountQuery;
  summonerQuery: SummonerQuery;
  leagueQuery: LeagueQuery

  constructor() {
    this.accountQuery = new AccountQuery();
    this.summonerQuery = new SummonerQuery();
    this.leagueQuery = new LeagueQuery();
  }
}
