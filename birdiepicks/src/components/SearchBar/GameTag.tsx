"use client"
import { Dispatch, SetStateAction, useEffect, useId } from "react"
import { RegionType, RegionDataManagement } from "@/utils/RegionDataManagement"


interface GameTagProps {
  gametag: string;
  selectedRegion: RegionType;
  setGametag: Dispatch<SetStateAction<string>>
}

const regionDataManagement = new RegionDataManagement();

export default function GameTag(props: GameTagProps) {
  const handleInputGametag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    props.setGametag(inputElement.value);
  }
  const gameTagInputHTMLId = useId();
  const setGameTag = props.setGametag;
  const selectedRegion = props.selectedRegion;

  useEffect(() => {
    setGameTag(regionDataManagement.defaultGametag(selectedRegion));
  }, [setGameTag, selectedRegion])

  return (
    <div>
      <label htmlFor={gameTagInputHTMLId}># </label>
      <input id={gameTagInputHTMLId}
        value={props.gametag}
        onChange={handleInputGametag}
        className="w-5/12 h-8 p-1 bg-search-grey standard-border" />
    </div>
  )
}


