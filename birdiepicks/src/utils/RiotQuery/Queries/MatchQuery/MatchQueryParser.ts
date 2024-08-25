import { MatchDto } from "../QueryDataTypes";

export interface MatchParsedData {
  gameDuration: string;
  participants: participantData[];
  queueType: string;
  timeEnded: string;
  won: boolean;
}

export interface participantData {
  assists: number;
  championId: number;
  csTotal: number;
  csPerMin: string;
  deaths: number;
  kills: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
  riotId: string;
  riotTag: string;
  puuid: string;
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
      participants: [],
      queueType: "Undefined Queue",
      timeEnded: "Undefined TimeEnded",
      won: false,
    };
  }

  public parse(matchData: MatchDto, puuid: string) {
    this.parsedData.queueType = this.gameType(matchData.info.queueId);
    this.parsedData.timeEnded = this.timeEndtoString(
      matchData.info.gameEndTimestamp,
    );
    this.parsedData.gameDuration = this.calcGameTimeDuration(
      matchData.info.gameStartTimestamp,
      matchData.info.gameEndTimestamp,
    );
    const playerStats = matchData.info.participants.find(
      (participant) => participant.puuid === puuid,
    );
    if (!playerStats) {
      throw new Error(
        "Player stats not found in their own match looked up via puuid",
      );
    }
    this.parsedData.won = playerStats.win;

    //Participants
    for (const participant of matchData.info.participants) {
      const parsedParticipant: participantData = {
        assists: participant.assists,
        championId: participant.championId,
        csTotal:
          participant.totalMinionsKilled + participant.neutralMinionsKilled,
        csPerMin: this.calcCSperMin(
          participant.totalMinionsKilled + participant.neutralMinionsKilled,
          matchData.info.gameStartTimestamp,
          matchData.info.gameEndTimestamp,
        ),
        deaths: participant.deaths,
        kills: participant.kills,
        item0: participant.item0,
        item1: participant.item1,
        item2: participant.item2,
        item3: participant.item3,
        item4: participant.item4,
        item5: participant.item5,
        item6: participant.item6,
        riotId: participant.riotIdGameName,
        riotTag: participant.riotIdTagline,
        puuid: participant.puuid,
        summoner1Id: participant.summoner1Id,
        summoner2Id: participant.summoner2Id,
        teamId: participant.teamId,
        teamPosition: participant.teamPosition,
      };
      this.parsedData.participants.push(parsedParticipant);
    }
    return this.parsedData;
  }
  private calcGameTimeDuration(
    gameStartTimeStamp: number,
    gameEndTimestamp: number,
  ) {
    const duration = gameEndTimestamp - gameStartTimeStamp;
    const convertedDuration = duration / 1000;
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

  private calcCSperMin(
    cs: number,
    gameStartTimestamp: number,
    gameEndTimestamp: number,
  ) {
    const duration = gameEndTimestamp - gameStartTimestamp;
    const convertedDuration = duration / 1000;
    const minutes = convertedDuration / 60; //1.5 is time before minion spawns
    return `${(cs / minutes).toFixed(1)}`;
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
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  const days = Math.ceil(hours / 24);
  if (days < 30) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }

  const months = Math.floor(days / 30); // Approximation
  if (months < 12) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }

  const years = Math.floor(days / 365); // Approximation
  return `${years} year${years > 1 ? "s" : ""} ago`;
}
