import { participantData } from "@/utils/RiotQuery/Queries/MatchQuery/MatchQueryParser";
import MatchTeamMember from "./MatchTeamMember";

interface MatchTeamsProps {
  participants: participantData[]
}

export default function MatchTeams(props: MatchTeamsProps) {
  const team1 = props.participants.filter((participant) => participant.teamId === 100);
  const team2 = props.participants.filter((participant) => participant.teamId === 200);
  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-rows-5">
        {teamMembers(team1)}
      </div>
      <div className="grid grid-rows-5">
        {teamMembers(team2)}
      </div>
    </div>
  )
}

function teamMembers(team: participantData[]) {
  return (team.map((member) => {
    return (
      <MatchTeamMember key={member.puuid}
        participant={member}
      />
    )
  }))

}
