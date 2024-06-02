"use client"
import { Dispatch, SetStateAction, useId } from "react"

interface GameNameProps {
  gameName: string
  setGameName: Dispatch<SetStateAction<string>>
}


//TODO: Search through notable names, 
export default function GameName(props: GameNameProps) {
  const gameNameHTMLId = useId();
  const handleInputGameName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    props.setGameName(inputElement.value);
  }
  return (
    <div>
      <label htmlFor={gameNameHTMLId}></label>
      <input id={gameNameHTMLId}
        onChange={handleInputGameName}
        type="text"
        placeholder="Summoner Name"
        className="min-w-half w-full p-2 h-8 bg-search-grey standard-border" />
    </div>
  )
}



