import { RiotQuery } from "@/utils/RiotQuery";
import Image from "next/image";

interface SummonerProps {
  summonerId: string;
  routeRegion: string;
}


export default async function SummonerRank(props: SummonerProps) {
  const riotQuery = new RiotQuery();
  const summonerLeaguesInfo = await riotQuery.leagueQuery.getRank(props.summonerId, props.routeRegion);
  if (!summonerLeaguesInfo) {
    return <p> Unranked </p>
  }
  const wr = Math.round((summonerLeaguesInfo.wins / (summonerLeaguesInfo.losses + summonerLeaguesInfo.wins)) * 100)
  return (
    <div className="flex standard-border">
      <Image src={`/RankEmblems/emblem-${summonerLeaguesInfo.tier.toLowerCase()}.png`}
        alt={`Image of summoner rank: ${summonerLeaguesInfo.rank}`}
        width={150}
        height={150}
        className="object-fill" />
      <div>
        <h3 className="p-3">
          {summonerLeaguesInfo.tier} {summonerLeaguesInfo.rank}
        </h3>
        <h3 className="px-3">
          Wins: {summonerLeaguesInfo.wins}
        </h3>
        <h3 className="px-3">
          Losses: {summonerLeaguesInfo.losses}
        </h3>
        <h3 className="px-3">
          {wr}%
        </h3>
      </div>
    </div>
  )

}



