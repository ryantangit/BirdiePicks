import { RiotQuery } from "@/utils/RiotQuery";
import MatchPersonal from "./MatchPersonal";
import MatchStats from "./MatchStats";
import MatchTeams from "./MatchTeams";
import assert from "assert";

interface MatchFrameProps {
  matchId: string;
  regionRoute: string;
  puuid: string;
}

export default async function MatchFrame(props: MatchFrameProps) {
  const riotQuery = new RiotQuery();
  const matchInfo = await riotQuery.matchQuery.getMatchInfo(props.matchId, props.regionRoute, props.puuid);
  assert(matchInfo);
  const individualInfo = matchInfo.participants.find((participant) => participant.puuid === props.puuid)
  assert(individualInfo);
  return (
    <div className="grid grid-cols-10 grid-rows-2">
      <div>
        <MatchStats queueType={matchInfo.queueType}
          timeEnded={matchInfo.timeEnded}
          gameDuration={matchInfo.gameDuration} />
      </div>
      <div className="col-span-2">
        <MatchPersonal individual={individualInfo} />
      </div>
      <div className="row-start-2 col-span-10">
        <MatchTeams participants={matchInfo.participants} />
      </div>
    </div>
  )
}


