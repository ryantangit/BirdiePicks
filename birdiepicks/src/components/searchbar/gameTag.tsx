"use client"
import { useState, useEffect } from "react"
import { RegionType, RegionDataManagement } from "@/utils/RegionDataManagement"

interface GameTagProps {
  selectedRegion: RegionType
}

const regionDataManagement = new RegionDataManagement();

export default function GameTag(props: GameTagProps) {
  const [gametag, setGametag] = useState(regionDataManagement.defaultGametag(props.selectedRegion));
  const handleInputGametag = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement;
    setGametag(inputElement.value);
  }

  useEffect(() => {
    setGametag(regionDataManagement.defaultGametag(props.selectedRegion));
  }, [props.selectedRegion])

  return (
    <input value={gametag} onChange={handleInputGametag} />
  )
}


