import { RiotQuery } from "../RiotQuery";

//Expected Result from RiotQuery
export interface AccountDto {
  puuid: string;
  gameName: string;
  gameTag: string;
}

export class AccountQuery {
  endPoint: string;
  apiKey: string;

  constructor(gameName: string, gameTag: string, apiKey: string) {
    this.endPoint = `riot/account/v1/accounts/by-riot-id/${gameName}/${gameTag}`;
    this.apiKey = apiKey;
  }

  async getPuuid() {
    const riotQuery: RiotQuery = new RiotQuery(this.apiKey, "americas", this.endPoint);
    const results: AccountDto = await riotQuery.execute();
    return results;
  }
}
