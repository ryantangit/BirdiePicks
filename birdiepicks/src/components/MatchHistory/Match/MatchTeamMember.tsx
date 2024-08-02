import { participantData } from "@/utils/RiotQuery/Queries/MatchQuery/MatchQueryParser";
import { CommDragonQuery } from "@/utils/CommunityDragonQuery/CommunityDragonQuery";
import { ImageData } from "@/utils/CommunityDragonQuery/CommunityDragonQuery";
import Link from "next/link";
import Image from "next/image";
import { RouteUtils } from "@/utils/RouteUtils";

interface MatchTeamMemberProps {
  participant: participantData;
  regionRoute: string;
}

export default function MatchTeamMember(props: MatchTeamMemberProps) {
  //name / champion / summoners / items / stats
  const nameRoute = `/summoner/${props.regionRoute}/${props.participant.riotId}-${props.participant.riotTag}`;
  const champIconData = CommDragonQuery.championIconImage(props.participant.championId, false);
  const sumSpell1Data = CommDragonQuery.sumSpellIconImage(props.participant.summoner1Id);
  const sumSpell2Data = CommDragonQuery.sumSpellIconImage(props.participant.summoner2Id);
  const itemIDs = [];
  itemIDs.push(props.participant.item0, props.participant.item1, props.participant.item2, props.participant.item3, props.participant.item4,
    props.participant.item5, props.participant.item6);
  const itemsImageData: ImageData[] = [];
  itemIDs.forEach((item) => {
    itemsImageData.push(CommDragonQuery.itemIconImage(item));
  });
  return (
    <div className="grid grid-cols-10">
      <Link className="col-start-1 col-span-2"
        href={nameRoute}>
        {props.participant.riotId}
      </Link>
      <p className="col-start-3">
        <Image
          src={champIconData.imageSrc}
          alt={champIconData.imageAlt}
          width={champIconData.imageWidth}
          height={champIconData.imageHeight}>
        </Image>
      </p>
      <div className="grid grid-cols-2 col-start-4">
        <Image
          src={sumSpell1Data.imageSrc}
          alt={sumSpell1Data.imageAlt}
          height={sumSpell1Data.imageHeight}
          width={sumSpell1Data.imageWidth}
        >
        </Image>
        <Image
          src={sumSpell2Data.imageSrc}
          alt={sumSpell2Data.imageAlt}
          height={sumSpell2Data.imageHeight}
          width={sumSpell2Data.imageWidth}
        >
        </Image>
      </div>
      <div className="grid grid-cols-7 px-1 col-start-5 col-span-3 justify-items-center">
        {
          itemsImageData.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.imageSrc}
                alt={item.imageAlt}
                height={item.imageHeight}
                width={item.imageWidth}
                className="standard-border h-max w-max">
              </Image>
            )
          })
        }
      </div>
      <div className="grid grid-rows-2 col-start-8 col-span-2">
        <p>
          {`${props.participant.kills}/${props.participant.deaths}/${props.participant.assists}`}
        </p>
        <p>
          {props.participant.csPerMin}
        </p>
      </div>
    </div>
  )
}

