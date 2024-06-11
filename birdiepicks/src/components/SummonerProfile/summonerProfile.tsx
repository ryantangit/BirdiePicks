import SummonerName from "./summonerName";
import SummonerIcon from "./summonerIcon"
import { RiotQuery } from "@/utils/RiotQuery";
import SummonerRank from "./summonerRank";


interface SummonerProfileProps {
  regionID: string[]
}

export default async function SummonerProfile(props: SummonerProfileProps) {

  const result = await fetchSummonerProfile(props.regionID);
  if (!result) {
    return <p> not found </p>
  }

  return (
    <div className="grid grid-rows-2">
      <div className="flex justify-start p-5">
        <div className="px-5">
          <SummonerIcon profileIconId={result.summonerResult.profileIconId} />
        </div>
        <div className="px-5">
          <SummonerName summonerName={result.puuidResult.gameName}
            summonerTag={result.puuidResult.tagLine}
            summonerLevel={result.summonerResult.summonerLevel} />
        </div>
      </div>
      <div className="flex justify-start p-5">
        <div className="px-5">
          <SummonerRank summonerId={result.summonerResult.id} routeRegion={props.regionID[0]} />
        </div>
      </div>
    </div>
  )
}

async function fetchSummonerProfile(regionID: string[]) {
  const riotQuery = new RiotQuery();
  const regionRoute = regionID[0];
  const gameIdGameTag = regionID[1].split("-");
  const puuidResult = await riotQuery.accountQuery.getPuuid(gameIdGameTag[0], gameIdGameTag[1], regionRoute);
  if (!puuidResult) {
    console.log("puuid not available");
    return;
  }
  const summonerResult = await riotQuery.summonerQuery.getSummonerInfo(puuidResult.puuid, regionRoute);
  if (!summonerResult) {
    console.log("not available")
    return;
  }
  return { puuidResult, summonerResult };
}
