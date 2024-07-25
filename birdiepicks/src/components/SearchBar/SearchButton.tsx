import Link from "next/link";
import { RouteUtils } from "@/utils/RouteUtils";

interface SearchButtonProps {
  gametag: string;
  gameName: string;
  regionName: string;
}

export default function SearchButton(props: SearchButtonProps) {

  const route = RouteUtils.generateSummonerRoute(props.gametag, props.gameName, props.regionName)
  return (
    <Link href={route}
      className="standard-border p-1">
      Search
    </Link>
  )
}


