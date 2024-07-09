import { individualData } from "@/utils/RiotQuery/Queries/MatchQuery/MatchQueryParser";
import { CommDragonQuery } from "@/utils/CommunityDragonQuery/CommunityDragonQuery";
import Image from "next/image";

interface MatchPersonalProps {
  individual: individualData
}

export default async function MatchPersonal(props: MatchPersonalProps) {

  const champIconData = CommDragonQuery.championIconImage(props.individual.championId);
  const sumSpell1Data = CommDragonQuery.sumSpellIconImage(props.individual.summoner1Id);
  const sumSpell2Data = CommDragonQuery.sumSpellIconImage(props.individual.summoner2Id);

  return (
    <>
      <p> {props.individual.kills} / {props.individual.deaths} / {props.individual.assists} </p>
      <Image
        src={champIconData.imageSrc}
        alt={champIconData.imageSrc}
        height={champIconData.imageHeight}
        width={champIconData.imageWidth}>
      </Image>
      <Image
        src={sumSpell1Data.imageSrc}
        alt={sumSpell1Data.imageAlt}
        height={sumSpell1Data.imageHeight}
        width={sumSpell1Data.imageWidth}>
      </Image>
      <Image
        src={sumSpell2Data.imageSrc}
        alt={sumSpell2Data.imageAlt}
        height={sumSpell2Data.imageHeight}
        width={sumSpell2Data.imageWidth}>
      </Image>
    </>
  )
}
