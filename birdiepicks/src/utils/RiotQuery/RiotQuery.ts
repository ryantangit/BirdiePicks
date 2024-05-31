import { AccountQuery } from "./Queries/AccountQuery";
import { SummonerQuery } from "./Queries/SummonerQuery";

export class RiotQuery {
  accountQuery: AccountQuery;
  summonerQuery: SummonerQuery;

  constructor() {
    this.accountQuery = new AccountQuery();
    this.summonerQuery = new SummonerQuery();
  }
}
