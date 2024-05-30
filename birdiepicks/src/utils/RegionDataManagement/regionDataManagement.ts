export interface RegionType {
  id: number,
  region: string
}

export class RegionDataManagement {
  private regions: RegionType[];
  private regionGameTagMap: { [key: string]: string };
  private regionDomainToAPIMap: { [key: string]: string };
  private regionNameToDomainMap: { [key: string]: string };
  constructor() {
    this.regions = [
      { id: 0, region: "North America" },
      { id: 1, region: "Europe West" },
      { id: 2, region: "Europe Nordic/East" },
      { id: 3, region: "Korea" }
    ];
    this.regionGameTagMap = {
      "North America": "NA1",
      "Europe West": "EUW",
      "EUNE": "EUNE",
      "Korea": "KR1"
    }
    this.regionDomainToAPIMap = {
      "na": "america",
      "euw": "europe",
      "eune": "europe",
      "kr": "asia"
    }
    this.regionNameToDomainMap = {
      "North America": "na",
      "Europe West": "euw",
      "Europe Nordic/East": "eune",
      "Korea": "kr"
    }

  }

  get getRegions(): RegionType[] {
    return this.regions;
  }

  defaultGametag(region: RegionType) {
    return this.regionGameTagMap[region.region];
  }

  APIRegion(domainName: string): string {
    return this.regionDomainToAPIMap[domainName];
  }

  nameToDomain(regionName: string): string {
    return this.regionNameToDomainMap[regionName];
  }
}

