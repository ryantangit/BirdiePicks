import { RiotRateLimiterWrapper } from "../../RiotRateLimiterWrapper";
import { RegionDataManagement } from "@/utils/RegionDataManagement";

interface MatchDto {
  metaData: MetadataDto;
  info: InfoDto;
}

interface MetadataDto {
  dataVersion: string;
  matchId: string;
  participants: string[];
}

interface InfoDto {
  endOfGameResult: string; //Note: indicates if the game has ended, not win/loss
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants: ParticipantDto[];
  platformId: string;
  queueId: number;
  teams: TeamDto[];
  tournamentCode: string;
}

interface ParticipantDto {
  allInPings: number;
  assistMePings: number;
  assists: number;
  baronKills: number;
  bountyLevel: number;
  champExperience: number;
  champlevel: number;
  championId: number;
  championName: string;
  commandPings: number;
  championTransform: number;
  consumablesPurchased: number;
  challenges: any;
  damageDealtToBuildings: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  damageselfMitigated: number;
  deaths: number;
  detectorWardsPlaced: number;
  doubleKills: number;
  dragonKills: number;
  eligibleForProgression: boolean;
  enemyMissingPings: number;
  enemyVisionPings: number;
  firstBloodAssist: boolean;
  firstBloodKill: boolean;
  firstTowerAssist: boolean;
  firstTowerKill: boolean;
  gameEndedInEarlySurrender: boolean;
  gameEndedInSurrender: boolean;
  holdPings: number;
  getBackPings: number;
  goldEarned: number;
  goldSpent: number;
  individualPosition: string;
  inhibitorKills: number;
  inhibitorTakedowns: number;
  inhibitorsLost: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  itemsPurchased: number;
  killingSprees: number;
  kills: number;
  lane: string;
  largestCriticalStrike: number;
  largestKillingSpree: number;
  largestMultiKill: number;
  longestTimeSpentLiving: number;
  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;
  missions: any;
  neutralMinionsKilled: number;
  needvisionPings: number;
  nexusKills: number;
  nexusTakedowns: number;
  nexusLost: number;
  objectivesStolen: number;
  objectiveStolenAssists: number;
  onMyWayPings: number;
  participantId: number;
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerscore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
  playerScore10: number;
  playerScore11: number;
  pentaKills: number;
  perks: any;
  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;
  placement: number;
  playerAugment1: number;
  playerAugment2: number;
  playerAugment3: number;
  playerAugment4: number;
  playerSubteamId: number;
  pushPings: number;
  profileIcon: number;
  puuid: string;
  quadraKills: number;
  riotIdGameName: string;
  riotIdName: string;
  riotIdTagline: string;
  role: string;
  sightWardsBoughtInGame: number;
  spell1Casts: number;
  spell2Casts: number;
  spell3Casts: number;
  spell4Casts: number;
  subteamPlacement: number;
  summoner1Casts: number;
  summoner1Id: number;
  summoner2Casts: number;
  summoner2Id: number;
  summonerId: string;
  summonerLevel: number;
  summonerName: string;
  teamEarlySurrendered: boolean;
  teamId: number;
  teamPosition: string;
  timeCCingOthers: number;
  timePlayed: number;
  totalAllyJungleMinionsKilled: number;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;
  totalEnemyJungleMinionsKilled: number;
  totalHeal: number;
  totalHealsOnTeammates: number;
  totalMinionsKilled: number;
  totalTimeCCDealt: number;
  totalTimeSpentDead: number;
  totalUnitshealed: number;
  tripleKills: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;
  turretKills: number;
  turretsLost: number;
  unrealKills: number;
  visionScore: number;
  visionClearedPings: number;
  visionWardsBoughtInGame: number;
  wardsKilled: number;
  wardsPlaced: number;
  win: boolean;
}

interface TeamDto {
  bans: BanDto[];
  objectives: ObjectivesDto[];
  teamId: number;
  win: boolean;
}

interface BanDto {
  championId: number;
  pickTurn: number;
}

interface ObjectivesDto {
  baron: ObjectiveDto;
  champion: ObjectiveDto;
  dragon: ObjectiveDto;
  horde: ObjectiveDto;
  inhibitor: ObjectiveDto;
  riftHerald: ObjectiveDto;
  tower: ObjectiveDto;
}

interface ObjectiveDto {
  first: boolean;
  kills: number
}



const regionDataManagement = new RegionDataManagement();
export class MatchQuery {

  public async getLast10Matches(puuid: string, regionRoute: string) {
    const apiPath = `/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=1` //TODO: change this later
    const riotRateLimiter = new RiotRateLimiterWrapper(regionDataManagement.RouteToAPICluster(regionRoute), apiPath);
    try {
      const matchListResults: string[] = await riotRateLimiter.execute();
      if (!matchListResults) {
        throw new Error("Match List Query returned nothing");
      }
      return matchListResults;
    } catch (error) {
      console.error(error);
    }
  }

  public async getMatchInfo(matchId: string, regionRoute: string) {
    const apiPath = `/lol/match/v5/matches/${matchId}`
    const riotRateLimiter = new RiotRateLimiterWrapper(regionDataManagement.RouteToAPICluster(regionRoute), apiPath);
    try {
      const matchData: MatchDto = await riotRateLimiter.execute();
      if (!matchData) {
        throw new Error("Match data fetch query returned nothing");
      }
      return matchData;
    } catch (error) {
      console.error(error);
    }
  }
}
