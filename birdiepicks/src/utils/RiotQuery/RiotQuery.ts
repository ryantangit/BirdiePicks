
export class RiotQuery {
  apiKey: string;
  apiRegion: string;
  apiEndPoint: string;

  constructor(apiKey: string, apiRegion = "americas", apiEndPoint: string) {
    this.apiKey = apiKey;
    this.apiRegion = apiRegion;
    this.apiEndPoint = apiEndPoint;
  }


  public async execute() {
    const url = `https://${this.apiRegion}.api.riotgames.com/${this.apiEndPoint}`
    const headers = new Headers();
    headers.append("X-Riot-Token", this.apiKey);

    const myRequest = new Request(url, {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default",
    });

    const res = await fetch(myRequest);
    const data = await res.json();
    console.log(data);
    return data;
  }
}
