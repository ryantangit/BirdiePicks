export interface RegionType {
  id: number,
  region: string
}

export class RegionDataManagement {
  private regions: RegionType[];
  private regionToDefaultGameTagMap: { [key: string]: string };
  private regionRouteToAPIClusterMap: { [key: string]: string };
  private regionNameToRouteMap: { [key: string]: string };
  private regionRouteToAPIHeadMap: { [key: string]: string };

  constructor() {
    this.regions = [
      { id: 0, region: "North America" },
      { id: 1, region: "Europe West" },
      { id: 2, region: "Europe Nordic/East" },
      { id: 3, region: "Korea" }
    ];
    this.regionToDefaultGameTagMap = {
      "North America": "NA1",
      "Europe West": "EUW",
      "Europe Nordic/East": "EUNE",
      "Korea": "KR1"
    }
    this.regionRouteToAPIClusterMap = {
      "na": "americas",
      "euw": "europe",
      "eune": "europe",
      "kr": "asia"
    }
    this.regionNameToRouteMap = {
      "North America": "na",
      "Europe West": "euw",
      "Europe Nordic/East": "eune",
      "Korea": "kr"
    }
    this.regionRouteToAPIHeadMap = {
      "na": "na1",
      "euw": "euw1",
      "eune": "eun1",
      "kr": "kr"

    }
  }

  get getRegions(): RegionType[] {
    return this.regions;
  }

  defaultGametag(region: RegionType) {
    return this.regionToDefaultGameTagMap[region.region];
  }

  RouteToAPICluster(routeName: string): string {
    return this.regionRouteToAPIClusterMap[routeName];
  }

  nameToRoute(regionName: string): string {
    return this.regionNameToRouteMap[regionName];
  }

  RouteToAPIHead(routeName: string): string {
    return this.regionRouteToAPIHeadMap[routeName];
  }
}

