import { AccountQuery } from "./Queries/AccountQuery";

export class RiotQuery {
  accountQuery: AccountQuery

  constructor() {
    this.accountQuery = new AccountQuery();
  }
}
