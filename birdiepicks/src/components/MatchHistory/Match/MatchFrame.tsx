import { RiotQuery } from "@/utils/RiotQuery";
import MatchPersonal from "./MatchPersonal";
import MatchStats from "./MatchStats";
import MatchTeams from "./MatchTeams";

interface MatchFrameProps {
  matchId: string;
  regionRoute: string;
  puuid: string;
}

export default async function MatchFrame(props: MatchFrameProps) {
  const riotQuery = new RiotQuery();
  const matchInfo = await riotQuery.matchQuery.getMatchInfo(props.matchId, props.regionRoute, props.puuid);
  if (!matchInfo) {
    return (
      <>
        Match Query Error
      </>
    )
  }
  return (
    <div className="grid grid-cols-6">
      <p> {props.matchId} </p>
      <MatchStats queueType={matchInfo.queueType}
        timeEnded={matchInfo.timeEnded}
        gameDuration={matchInfo.gameDuration} />
      <MatchPersonal individual={matchInfo.individual} />
      <MatchTeams />
    </div>
  )
}


