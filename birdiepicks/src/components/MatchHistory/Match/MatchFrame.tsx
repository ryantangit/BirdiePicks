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
    <div className="flex">
      <div className="standard-border flex flex-col justify-center content-between mx-5">
        <div className="px-2">
          <MatchStats queueType={matchInfo.queueType}
            timeEnded={matchInfo.timeEnded}
            gameDuration={matchInfo.gameDuration}
            winLose={matchInfo.won}
          />
        </div>
        <div className="px-2">
          <MatchPersonal individual={individualInfo} />
        </div>
      </div>
      <div>
        <MatchTeams participants={matchInfo.participants}
          regionRoute={props.regionRoute} />
      </div>

    </div >
  )
}


