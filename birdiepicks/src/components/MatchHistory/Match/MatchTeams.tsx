import { participantData } from "@/utils/RiotQuery/Queries/MatchQuery/MatchQueryParser";
import MatchTeamMember from "./MatchTeamMember";

interface MatchTeamsProps {
  participants: participantData[]
}

export default function MatchTeams(props: MatchTeamsProps) {
  const team1 = props.participants.filter((participant) => participant.teamId === 100);
  const team2 = props.participants.filter((participant) => participant.teamId === 200);
  console.log(team1);
  console.log(team2);
  return (
    <div>
      <div>
      </div>
    </div>
  )
}
