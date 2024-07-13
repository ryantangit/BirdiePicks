import MatchTeamMember from "./MatchTeamMember";

interface MatchTeamsProps {

}

export default function MatchTeams(props: MatchTeamsProps) {
  const team1 = [];
  const team2 = [];
  return (
    <div>
      <div>
        <MatchTeamMember />
      </div>
    </div>
  )
}
