"use client"
import { Listbox, ListboxOptions, ListboxOption, ListboxButton } from "@headlessui/react"
import { Dispatch, SetStateAction } from "react"
import { RegionDataManagement, RegionType } from "./regionDataManagement"


interface RegionProps {
	regionDataManagement: RegionDataManagement,
	selectedRegion: RegionType,
	setSelectedRegion: Dispatch<SetStateAction<{id: number, region: string}>>
}

export default function RegionSelection(props: RegionProps){
	return (
	<Listbox value={props.selectedRegion} onChange={props.setSelectedRegion}>
		<ListboxButton>{props.selectedRegion.region}</ListboxButton>
		<ListboxOptions>
		{props.regionDataManagement.getRegions.map((region) => (
			<ListboxOption key={region.id} value={region}>
				{region.region}
			</ListboxOption>
		))}
		</ListboxOptions>
	</Listbox>
	)
}
