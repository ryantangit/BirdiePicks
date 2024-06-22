import SummonerName from "./summonerName";
import SummonerIcon from "./summonerIcon"
import SummonerRank from "./summonerRank";


interface SummonerProfileProps {
  profileIconId: number;
  gameName: string;
  tagLine: string;
  summonerLevel: number;
  summonerId: string;
  routeRegion: string;
}

export default async function SummonerProfile(props: SummonerProfileProps) {


  return (
    <div className="grid grid-rows-2">
      <div className="flex justify-start p-5">
        <div className="px-5">
          <SummonerIcon profileIconId={props.profileIconId} />
        </div>
        <div className="px-5">
          <SummonerName summonerName={props.gameName}
            summonerTag={props.tagLine}
            summonerLevel={props.summonerLevel} />
        </div>
      </div>
      <div className="flex justify-start p-5">
        <div className="px-5">
          <SummonerRank summonerId={props.summonerId} routeRegion={props.routeRegion} />
        </div>
      </div>
    </div>
  )
}


