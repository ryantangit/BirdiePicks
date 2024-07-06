
export class CommunityDragonHelper {
  private RETRIES = 3;
  private BACKOFFMS = 100;

  public async execute(apiUrl: string) {
    let binaryBackOff = 1;
    let retries = this.RETRIES
    while (retries > 0) {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Community DragonHelper failed at fetching ${apiUrl}`)
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
