
export class CommunityDragonHelper {
  private BASE_URL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/";
  private RETRIES = 3;
  private BACKOFFMS = 100;

  public async execute(endPoint: string) {
    let binaryBackOff = 1;
    let retries = this.RETRIES
    while (retries > 0) {
      try {
        const response = await fetch(this.BASE_URL + endPoint);
        if (!response.ok) {
          throw new Error(`Community DragonHelper failed at fetching ${endPoint}`)
        }
        return response;
      } catch {
        const delay = Math.pow(2, binaryBackOff) * this.BACKOFFMS;
        binaryBackOff++;
        await new Promise((resolve) => setTimeout(resolve, delay));
        retries--;
      }
    }
  }
}
