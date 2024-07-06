import { RiotQuery } from "@/utils/RiotQuery";
import Image from "next/image";

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
  const championIconURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/";
  return (
    <>
      <p> {props.matchId} </p>
      <p> {matchInfo.queueType} </p>
      <p> {matchInfo.timeEnded} </p>
      <p> {matchInfo.gameDuration} </p>
      <p> {matchInfo.kills}/{matchInfo.deaths}/{matchInfo.assists} </p>
      <Image
        src={`${championIconURL}/${matchInfo.championId}.png`}
        alt="championIcon image"
        height={50}
        width={50}>
      </Image >
      <Image
      >
      </Image>
    </>
  )
}


