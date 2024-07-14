import { individualData } from "@/utils/RiotQuery/Queries/MatchQuery/MatchQueryParser";
import { CommDragonQuery } from "@/utils/CommunityDragonQuery/CommunityDragonQuery";
import { ImageData } from "@/utils/CommunityDragonQuery/CommunityDragonQuery";
import Image from "next/image";

interface MatchPersonalProps {
  individual: individualData
}

export default async function MatchPersonal(props: MatchPersonalProps) {

  const champIconData = CommDragonQuery.championIconImage(props.individual.championId);
  const sumSpell1Data = CommDragonQuery.sumSpellIconImage(props.individual.summoner1Id);
  const sumSpell2Data = CommDragonQuery.sumSpellIconImage(props.individual.summoner2Id);
  const itemIDs = [];
  itemIDs.push(props.individual.item0, props.individual.item1, props.individual.item2, props.individual.item3, props.individual.item4,
    props.individual.item5, props.individual.item6);
  const itemsImageData: ImageData[] = [];
  itemIDs.forEach((item) => {
    itemsImageData.push(CommDragonQuery.itemIconImage(item));
  });
  return (
    <div className="grid grid-rows-2 grid-cols-3">
      <Image
        src={champIconData.imageSrc}
        alt={champIconData.imageSrc}
        height={champIconData.imageHeight}
        width={champIconData.imageWidth}>
      </Image>
      <div className="grid grid-cols-2">
        <Image
          src={sumSpell1Data.imageSrc}
          alt={sumSpell1Data.imageAlt}
          height={sumSpell1Data.imageHeight}
          width={sumSpell1Data.imageWidth}
          className="justify-end standard-border">
        </Image>
        <Image
          src={sumSpell2Data.imageSrc}
          alt={sumSpell2Data.imageAlt}
          height={sumSpell2Data.imageHeight}
          width={sumSpell2Data.imageWidth}
          className="standard-border">
        </Image>
      </div>
      <div className="grid grid-cols-7 col-span-3 py-1">
        {
          itemsImageData.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.imageSrc}
                alt={item.imageAlt}
                height={item.imageHeight}
                width={item.imageWidth}
                className="standard-border">
              </Image>
            )
          })
        }
      </div>

    </div>
  )
}
