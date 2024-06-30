import { MatchDto } from "../QueryDataTypes";

export class MatchQueryParser {

  public parse(matchData: MatchDto) {
    const queueType = this.gameType(matchData.info.queueId);
    return queueType;
  }

  private timeOfEnd() {
    //Calculate time of ending of the match 
  }
  private gameType(queueId: number) {
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
