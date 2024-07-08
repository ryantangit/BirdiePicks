import { RiotQuery } from "@/utils/RiotQuery";
import MatchPersonal from "./MatchPersonal";

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
    <>
      <p> {props.matchId} </p>
      <p> {matchInfo.queueType} </p>
      <p> {matchInfo.timeEnded} </p>
      <p> {matchInfo.gameDuration} </p>
      <MatchPersonal individual={matchInfo.individual} />
    </>
  )
}


