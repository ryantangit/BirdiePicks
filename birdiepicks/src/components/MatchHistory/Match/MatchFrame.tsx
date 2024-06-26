import { RiotQuery } from "@/utils/RiotQuery";


interface MatchFrameProps {
  matchId: string;
  regionRoute: string;
}

export default async function MatchFrame(props: MatchFrameProps) {
  const riotQuery = new RiotQuery();
  const matchInfo = await riotQuery.matchQuery.getMatchInfo(props.matchId, props.regionRoute);
  console.log(matchInfo);
  return (
    <>
      {props.matchId}
    </>
  )
}


