import Image from "next/image";

interface IconProp {
  profileIconId: number
}

const ICON_URL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons";
export default function SummonerIcon(props: IconProp) {
  const iconSourceUrl = `${ICON_URL}/${props.profileIconId}.jpg`;
  const iconHeight = 100;
  const iconWidth = 100;

  return (
    <>
      <Image
        src={iconSourceUrl}
        alt="Summoner Icon"
        width={iconHeight}
        height={iconWidth}
        className="standard-border"
      />
    </>
  )
}

