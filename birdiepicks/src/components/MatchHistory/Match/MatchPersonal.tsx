import { CommDragonQuery } from "@/utils/CommunityDragonQuery/CommunityDragonQuery";
import { ImageData } from "@/utils/CommunityDragonQuery/CommunityDragonQuery";
import { participantData } from "@/utils/RiotQuery/Queries/MatchQuery/MatchQueryParser";
import Image from "next/image";

interface MatchPersonalProps {
  individual: participantData;
}

export default async function MatchPersonal(props: MatchPersonalProps) {
  const champIconData = CommDragonQuery.championIconImage(
    props.individual.championId,
  );
  const sumSpell1Data = CommDragonQuery.sumSpellIconImage(
    props.individual.summoner1Id,
  );
  const sumSpell2Data = CommDragonQuery.sumSpellIconImage(
    props.individual.summoner2Id,
  );
  const itemIDs = [];
  itemIDs.push(
    props.individual.item0,
    props.individual.item1,
    props.individual.item2,
    props.individual.item3,
    props.individual.item4,
    props.individual.item5,
    props.individual.item6,
  );
  const itemsImageData: ImageData[] = [];
  itemIDs.forEach((item) => {
    itemsImageData.push(CommDragonQuery.itemIconImage(item, true));
  });
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-10">
        <Image
          src={champIconData.imageSrc}
          alt={champIconData.imageSrc}
          height={champIconData.imageHeight}
          width={champIconData.imageWidth}
        ></Image>
        <div className="flex flex-row gap-1 justify-start">
          <Image
            src={sumSpell1Data.imageSrc}
            alt={sumSpell1Data.imageAlt}
            height={sumSpell1Data.imageHeight}
            width={sumSpell1Data.imageWidth}
            className="self-center standard-border"
          ></Image>
          <Image
            src={sumSpell2Data.imageSrc}
            alt={sumSpell2Data.imageAlt}
            height={sumSpell2Data.imageHeight}
            width={sumSpell2Data.imageWidth}
            className="self-center standard-border"
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-7 col-span-4 py-1">
        {itemsImageData.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.imageSrc}
              alt={item.imageAlt}
              height={item.imageHeight}
              width={item.imageWidth}
              className="standard-border"
            ></Image>
          );
        })}
      </div>
      <div className="flex flex-col gap-1 grid-rows-4 col-span-2">
        <p>
          {`K/D/A: ${props.individual.kills}/${props.individual.deaths}/${props.individual.assists}`}
        </p>
        <p>
          CS: {props.individual.csTotal} [{props.individual.csPerMin}]
        </p>
      </div>
    </div>
  );
}
