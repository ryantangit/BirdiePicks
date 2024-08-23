import { RiotQuery } from "@/utils/RiotQuery";
import MatchFrame from "./Match/MatchFrame";
import {RiotQuery}

interface MatchHistoryProps {
  puuid: string;
  routeRegion: string;
}

export default async function MatchHistory(props: MatchHistoryProps) {
  const riotQuery = new RiotQuery();
  const matchQuery = await riotQuery.matchQuery.getLast10Matches(props.puuid, props.routeRegion);
  if (!matchQuery || matchQuery.length === 0) {
    return <p> No match found </p>
  }
  return (
    <ul className="grid">
      {matchQuery.map((matchId: string) => (
        <li key={matchId} className="p-10">
          <MatchFrame matchId={matchId} regionRoute={props.routeRegion} puuid={props.puuid} />
        </li>
      ))}
    </ul>
  )
}
