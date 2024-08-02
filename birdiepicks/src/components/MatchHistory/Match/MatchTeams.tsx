import { participantData } from "@/utils/RiotQuery/Queries/MatchQuery/MatchQueryParser";
import MatchTeamMember from "./MatchTeamMember";

interface MatchTeamsProps {
  participants: participantData[]
  regionRoute: string
}

export default function MatchTeams(props: MatchTeamsProps) {
  const team1 = props.participants.filter((participant) => participant.teamId === 100);
  const team2 = props.participants.filter((participant) => participant.teamId === 200);
  return (
    <div className="grid grid-cols-2">
      <div className="grid grid-rows-5">
        {teamMembers(team1, props.regionRoute)}
      </div>
      <div className="grid grid-rows-5">
        {teamMembers(team2, props.regionRoute)}
      </div>
    </div>
  )
}

function teamMembers(team: participantData[], regionRoute: string) {
  return (team.map((member) => {
    return (
      <div key={member.puuid} className="py-1">
        <MatchTeamMember
          participant={member}
          regionRoute={regionRoute}
        />
      </div>
    )
  }))

}
