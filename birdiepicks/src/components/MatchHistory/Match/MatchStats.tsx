
interface MatchStatsProps {
  queueType: string;
  timeEnded: string;
  gameDuration: string;
}

export default function MatchStats(props: MatchStatsProps) {
  return (
    <div>
      <p> {props.queueType} </p>
      <p> {props.timeEnded} </p>
      <p> {props.gameDuration} </p>
    </div>
  )

}
