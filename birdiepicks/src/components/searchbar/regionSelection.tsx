"use client"
import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from "@headlessui/react"
import { Dispatch, SetStateAction } from "react"
import { RegionType, regionDataManagement } from "@/utils/RegionDataManagement"

interface RegionProps {
  selectedRegion: RegionType,
  setSelectedRegion: Dispatch<SetStateAction<{ id: number, region: string }>>
}

export default function RegionSelection(props: RegionProps) {
  return (
    <Listbox value={props.selectedRegion} onChange={props.setSelectedRegion}>
      <ListboxButton>{props.selectedRegion.region}</ListboxButton>
      <ListboxOptions>
        {regionDataManagement.getRegions.map((region) => (
          <ListboxOption key={region.id} value={region}>
            {region.region}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}
