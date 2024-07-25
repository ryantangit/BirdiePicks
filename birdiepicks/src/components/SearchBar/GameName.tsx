"use client"
import { Dispatch, SetStateAction, useId } from "react"
import { RouteUtils } from "@/utils/RouteUtils"
import { useRouter } from "next/navigation";

interface GameNameProps {
  gameName: string
  gametag: string;
  regionName: string;
  setGameName: Dispatch<SetStateAction<string>>
}


//TODO: Search through notable names, 
export default function GameName(props: GameNameProps) {
  const gameNameHTMLId = useId();
  const router = useRouter();
  const handleInputGameName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    props.setGameName(inputElement.value);
  }
  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const route = RouteUtils.generateSummonerRoute(props.gametag, props.gameName, props.regionName);
      router.push(route);
    }
  }
  return (
    <div>
      <label htmlFor={gameNameHTMLId}></label>
      <input id={gameNameHTMLId}
        onChange={handleInputGameName}
        onKeyUp={handleEnterKey}
        type="text"
        placeholder="Summoner Name"
        className="min-w-half w-full p-2 h-8 bg-search-grey standard-border" />
    </div>
  )
}



