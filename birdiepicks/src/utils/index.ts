
export async function getPuuid() {
  const endPoint = "https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/birtext/na1";
  const headers = new Headers();
  headers.append("X-Riot-Token", "RGAPI - ed37a2a3 - c471 - 44ff - bdee - 629fad4bc890");
  headers.append("Origin", "https://developer.riotgames.com");

  const myRequest = new Request(endPoint, {
    method: "GET",
    headers: headers,
    mode: "cors",
    cache: "default",
  });

  fetchImage(myRequest);
}


async function fetchImage(request: Request) {
  try {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    console.log(response);
  } catch (error) {
    console.error("Error:", error);
  }
}
