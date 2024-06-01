import { RegionDataManagement } from "@/utils/RegionDataManagement";

interface SearchButtonProps {
  gametag: string;
  gameName: string;
  regionName: string;
}

export default function SearchButton(props: SearchButtonProps) {

  //TODO: finish route
  generateSummonerRoute(props.gametag, props.gameName, props.regionName)
  return (
    <button>
      Search
    </button>
  )
}

function generateSummonerRoute(gametag: string, gameName: string, regionName: string) {
  const regionDataManagement = new RegionDataManagement();
  const DELIMITER = "-"
  const regionRoute = regionDataManagement.nameToRoute(regionName);
  const gameNameGameTag = `${gameName.toLowerCase()}${DELIMITER}${gametag.toLowerCase()}`

  let summonerRoute = `/summoner/${regionRoute}/${gameNameGameTag}`
  const encodedSummonerRoute = encodeURI(summonerRoute);
  return encodedSummonerRoute;
}
