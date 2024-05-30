"use client"
import GameName from "./gameName";
import RegionSelection from "./regionSelection";
import { useState } from "react";
import GameTag from "./gameTag";
import { regionDataManagement } from "@/utils/RegionDataManagement"

export default function SearchBar() {
  const [selectedRegion, setSelectedRegion] = useState(regionDataManagement.getRegions[0]);

  return (
    <div>
      <div className="px-3">
        <GameName />
      </div>
      <div className="px-3">
        <GameTag selectedRegion={selectedRegion} />
      </div>
      <div className="px-3">
        <RegionSelection selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion} />
      </div>
    </div>
  )
}
