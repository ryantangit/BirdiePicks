import { RiotRateLimiterWrapper } from "@/utils/RiotQuery/RiotRateLimiterWrapper";
import { RegionDataManagement } from "@/utils/RegionDataManagement";
import { AccountDto } from "../QueryDataTypes";


const regionDataManagement = new RegionDataManagement();
const PUUID_PATH = "/riot/account/v1/accounts/by-riot-id/"
export class AccountQuery {

  async getPuuid(gameName: string, gameTag: string, regionRoute: string) {
    const endPoint = `${gameName}/${gameTag}`;
    const puuidPath = PUUID_PATH + endPoint;
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
