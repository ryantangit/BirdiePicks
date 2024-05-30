import { RiotRateLimiterWrapper } from "../RiotRateLimiterWrapper";
import { RegionDataManagement } from "@/utils/RegionDataManagement";

const ACCOUNTID_PATH = "/riot/account/v1/accounts/by-riot-id/"

//Expected Result
export interface AccountDto {
  puuid: string;
  gameName: string;
  gameTag: string;
}

const regionDataManagement = new RegionDataManagement();

export class AccountQuery {

  async getPuuid(gameName: string, gameTag: string, regionRoute: string) {
    const endPoint = `${gameName}/${gameTag}`;
    const puuidPath = ACCOUNTID_PATH + endPoint;
    const apiCluster = regionDataManagement.RouteToAPICluster(regionRoute);
    const riotRateLimiterWrapper = new RiotRateLimiterWrapper(apiCluster, puuidPath);
    try {
      const results: AccountDto = await riotRateLimiterWrapper.execute();
      if (!results) {
        console.error("AccountQuery results did not query properly");
      }
      return results;
    } catch (error) {
      console.error(error);
    }
  }
}
