export interface RegionType {
	id: number,
	region: string
}

export class RegionDataManagement {
	private regions: RegionType[];
	private regionDefaultNameTagMap: {[key: string] : string};
	
	constructor(){
		this.regions = [
			{id: 0, region: "North America"},
			{id: 1, region: "Europe West"},
			{id: 2, region: "Europe Nordic/East"},
			{id: 3, region: "Korea"}
			];
		this.regionDefaultNameTagMap = {
			"North America": "NA1",
			"Europe West": "EUW",
			"EUNE": "EUNE",
			"Korea": "KR1"
		}
	}

	get getRegions(): RegionType[]{
		return this.regions;
	}

	defaultGametag(region: RegionType) {
		return this.regionDefaultNameTagMap[region.region];
	}
}

