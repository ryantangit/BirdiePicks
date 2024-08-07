import { RiotQuery } from "@/utils/RiotQuery";
import SummonerProfile from "../SummonerProfile/summonerProfile";
import MatchHistory from "../MatchHistory/MatchHistory";
import SearchBar from "../SearchBar/SearchBar";


interface SummonerPageProps {
  regionID: string[]
}


export default async function SummonerPage(props: SummonerPageProps) {

  const result = await fetchSummonerProfile(props.regionID);

  if (!result) {
    return <p> not found </p>
  }

  return (
    <>
      <SearchBar />
      <SummonerProfile
        profileIconId={result.summonerResult.profileIconId}
        gameName={result.puuidResult.gameName}
        tagLine={result.puuidResult.tagLine}
        summonerLevel={result.summonerResult.summonerLevel}
        summonerId={result.summonerResult.id}
        routeRegion={props.regionID[0]} />
      <MatchHistory puuid={result.puuidResult.puuid}
        routeRegion={props.regionID[0]} />
    </>
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
