import { MatchDto } from "../QueryDataTypes";

export interface MatchParsedData {
  gameDuration: string;
  individual: individualData;
  participants: participantData[]
  queueType: string;
  timeEnded: string;
  won: boolean;
}

export interface individualData {
  assists: number;
  championId: number;
  deaths: number;
  kills: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  summoner1Id: number;
  summoner2Id: number;
}

export interface participantData {
  assists: number;
  championId: number;
  deaths: number;
  kills: number;
  riotId: string;
  riotTag: string;
  summoner1Id: number;
  summoner2Id: number;
  teamId: number;
  teamPosition: string;
}

export class MatchQueryParser {
  parsedData: MatchParsedData;

  constructor() {
    //Initial state should have errors
    this.parsedData = {
      gameDuration: "Undefined gameDuration",
      individual: {
        assists: 0,
        championId: 0,
        deaths: 0,
        item0: 0,
        item1: 0,
        item2: 0,
        item3: 0,
        item4: 0,
        item5: 0,
        item6: 0,
        kills: 0,
        summoner1Id: 0,
        summoner2Id: 0,
      },
      participants: [],
      queueType: "Undefined Queue",
      timeEnded: "Undefined TimeEnded",
      won: false,
    }

  }

  public parse(matchData: MatchDto, puuid: string) {
    this.parsedData.queueType = this.gameType(matchData.info.queueId);
    this.parsedData.timeEnded = this.timeEndtoString(matchData.info.gameEndTimestamp)
    this.parsedData.gameDuration = this.calcGameTimeDuration(matchData.info.gameStartTimestamp, matchData.info.gameEndTimestamp);
    const playerStats = matchData.info.participants.find((participant) => participant.puuid === puuid);
    if (!playerStats) {
      throw new Error("Player stats not found in their own match looked up via puuid");
    }
    //Main banner
    this.parsedData.won = playerStats.win;
    this.parsedData.individual.kills = playerStats.kills;
    this.parsedData.individual.assists = playerStats.assists;
    this.parsedData.individual.deaths = playerStats.deaths;
    this.parsedData.individual.championId = playerStats.championId;
    this.parsedData.individual.summoner1Id = playerStats.summoner1Id;
    this.parsedData.individual.summoner2Id = playerStats.summoner2Id;
    this.parsedData.individual.item0 = playerStats.item0;
    this.parsedData.individual.item1 = playerStats.item1;
    this.parsedData.individual.item2 = playerStats.item2;
    this.parsedData.individual.item3 = playerStats.item3;
    this.parsedData.individual.item4 = playerStats.item4;
    this.parsedData.individual.item5 = playerStats.item5;
    this.parsedData.individual.item6 = playerStats.item6;

    //Participants
    for (const participant of matchData.info.participants) {
      const parsedParticipant: participantData = {
        assists: participant.assists,
        championId: participant.championId,
        deaths: participant.deaths,
        kills: participant.kills,
        riotId: participant.riotIdGameName,
        riotTag: participant.riotIdTagline,
        summoner1Id: participant.summoner1Id,
        summoner2Id: participant.summoner2Id,
        teamId: participant.teamId,
        teamPosition: participant.teamPosition
      }
      this.parsedData.participants.push(parsedParticipant);
    }
    return this.parsedData;
  }
  private calcGameTimeDuration(gameStartTimeStamp: number, gameEndTimestamp: number) {
    const duration = gameEndTimestamp - gameStartTimeStamp;
    const convertedDuration = duration / 1000
    const minutes = Math.floor(convertedDuration / 60);
    const seconds = Math.floor(convertedDuration % 60);

    return `${minutes}m ${seconds}s`;
  }

  private timeEndtoString(gameEndTimestamp: number) {
    //Calculate time of ending of the match relative to current time
    const currTime = Math.floor(new Date().getTime());
    const elapsed = currTime - gameEndTimestamp;
    return timeSince(elapsed);
  }

  private gameType(queueId: number): string {
    switch (queueId) {
      case 400: {
        return "Normal Draft";
      }
      case 420: {
        return "Ranked Solo";
      }
      case 430: {
        return "Normal Blind";
      }
      case 440: {
        return "Ranked Flex";
      }
      case 450: {
        return "ARAM";
      }
      case 700: {
        return "Clash";
      }
      case 720: {
        return "ARAM Clash";
      }
      default: {
        return "Undetected Mode";
      }
    }
  }
}

//Helper
function timeSince(elapsed: number) {

  //TODO: CONVERT TO DATE, Subtract Current with Past time, change parameters
  if (elapsed < 0) {
    throw new Error("Time cannot be in the future");
  }
  const seconds = Math.floor(elapsed / 1000);
  if (seconds < 60) {
    return `Just now`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  const days = Math.ceil(hours / 24);
  if (days < 30) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  const months = Math.floor(days / 30);  // Approximation
  if (months < 12) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }

  const years = Math.floor(days / 365);  // Approximation
  return `${years} year${years > 1 ? 's' : ''} ago`;


}
