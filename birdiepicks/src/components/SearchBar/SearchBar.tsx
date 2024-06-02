"use client"
import { useState } from "react";
import GameName from "./GameName";
import GameTag from "./GameTag";
import SearchButton from "./SearchButton";
import RegionSelection from "./RegionSelection";
import { RegionDataManagement } from "@/utils/RegionDataManagement"

const regionDataManagement = new RegionDataManagement();
export default function SearchBar() {
  const [selectedRegion, setSelectedRegion] = useState(regionDataManagement.getRegions[0]);
  const [gametag, setGametag] = useState(regionDataManagement.defaultGametag(selectedRegion));
  const [gameName, setGameName] = useState("");


  return (
    <div className="grid grid-cols-6 justify-center items-center gap-2">
      <div className="col-span-2 col-start-2 w-full p-3">
        <GameName gameName={gameName}
          setGameName={setGameName}
        />
      </div>
      <div className="col-span-1 p-3">
        <GameTag selectedRegion={selectedRegion}
          gametag={gametag}
          setGametag={setGametag} />
      </div>
      <div className="col-span-1 p-3">
        <RegionSelection selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion} />
      </div>
      <div className="col-span-1 p-3">
        <SearchButton gameName={gameName} gametag={gametag} regionName={selectedRegion.region} />
      </div>
    </div>
  )
}
