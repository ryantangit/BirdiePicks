import Image from "next/image";
import { CommDragonQuery } from "@/utils/CommunityDragonQuery/CommunityDragonQuery";

interface IconProp {
  profileIconId: number
}

export default function SummonerIcon(props: IconProp) {
  const iconImageData = CommDragonQuery.summonerIconImage(props.profileIconId);

  return (
    <>
      <Image
        src={iconImageData.imageSrc}
        alt="Summoner Icon"
        width={iconImageData.imageWidth}
        height={iconImageData.imageHeight}
        className="standard-border"
      />
    </>
  )
}

