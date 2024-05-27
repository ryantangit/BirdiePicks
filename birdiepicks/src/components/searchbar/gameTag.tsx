"use client"
import { useState, useEffect } from "react"
import { RegionDataManagement, RegionType } from "./regionDataManagement"

interface GameTagProps{
	selectedRegion: RegionType
	regionDataManagement: RegionDataManagement
}

export default function GameTag(props: GameTagProps){
	const [gametag, setGametag] = useState(props.regionDataManagement.defaultGametag(props.selectedRegion));
	const handleInputGametag = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputElement = event.target as HTMLInputElement;
		setGametag(inputElement.value);
	}

	useEffect(()=>{
		setGametag(props.regionDataManagement.defaultGametag(props.selectedRegion));
	}, [props.selectedRegion])

	return (
		<input value={gametag} onChange={handleInputGametag}/>	
	)
}


