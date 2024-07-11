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
    <>
      <p> {props.individual.kills} / {props.individual.deaths} / {props.individual.assists} </p>
      <Image
        src={champIconData.imageSrc}
        alt={champIconData.imageSrc}
        height={champIconData.imageHeight}
        width={champIconData.imageWidth}>
      </Image>
      <div>
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
      </div>
      <div>
        {
          itemsImageData.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.imageSrc}
                alt={item.imageAlt}
                height={item.imageHeight}
                width={item.imageWidth}>
              </Image>
            )
          })
        }
      </div>
    </>
  )
}
