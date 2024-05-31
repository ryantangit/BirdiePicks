import { riotRateLimiter } from "./RiotRateLimiterWrapperConfig";

export class RiotRateLimiterWrapper {
  apiCluster: string;
  apiPath: string;

  constructor(apiCluster = "americas", apiPath: string) {
    this.apiCluster = apiCluster;
    this.apiPath = apiPath;
  }

  public async execute() {
    const url = `https://${this.apiCluster}.api.riotgames.com${this.apiPath}`
    try {
      const response = await riotRateLimiter.execute({
        url: url,
        options: {
          headers: {
            "X-Riot-Token": process.env.RIOT_API,
          },
        },
      });

      return response;
    } catch (error) {
      console.log(`Querying ${url}`);
      console.log(error);
    }

  }
}
