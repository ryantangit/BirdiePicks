"use client";
import {
  Listbox,
  ListboxOptions,
  ListboxOption,
  ListboxButton,
} from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";
import { RegionType, RegionDataManagement } from "@/utils/RegionDataManagement";

interface RegionProps {
  selectedRegion: RegionType;
  setSelectedRegion: Dispatch<SetStateAction<{ id: number; region: string }>>;
}

const regionDataManagement = new RegionDataManagement();

export default function RegionSelection(props: RegionProps) {
  return (
    <div className="">
      <Listbox value={props.selectedRegion} onChange={props.setSelectedRegion}>
        <ListboxButton className="w-full py-1 standard-border">
          {props.selectedRegion.region}
        </ListboxButton>
        <ListboxOptions anchor="bottom" className="standard-border">
          {regionDataManagement.getRegions.map((region) => (
            <ListboxOption
              key={region.id}
              value={region}
              className="flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3"
            >
              {region.region}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
