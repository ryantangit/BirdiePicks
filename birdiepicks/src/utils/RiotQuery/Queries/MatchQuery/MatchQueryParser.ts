import { MatchDto } from "../QueryDataTypes";

export interface MatchParsedData {
  queueType: string;
  timeEnded: string;
  gameDuration: string;
}


export class MatchQueryParser {
  parsedData: MatchParsedData;

  constructor() {
    //Initial state should have errors
    this.parsedData = {
      queueType: "Undefined Queue",
      timeEnded: "Undefined TimeEnded",
      gameDuration: "Undefined gameDuration"
    }
  }

  public parse(matchData: MatchDto, puuid: string) {
    this.parsedData.queueType = this.gameType(matchData.info.queueId);
    this.parsedData.timeEnded = this.timeEndtoString(matchData.info.gameEndTimestamp)
    this.parsedData.gameDuration = this.calcGameTimeDuration(matchData.info.gameStartTimestamp, matchData.info.gameEndTimestamp);

    const playerStats = matchData.info.participants.find((participant) => participant.puuid === puuid);
    console.log(playerStats?.win);
    console.log(playerStats?.kills);
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
