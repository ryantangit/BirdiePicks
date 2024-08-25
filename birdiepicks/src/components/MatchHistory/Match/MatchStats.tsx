interface MatchStatsProps {
  winLose: boolean;
  queueType: string;
  timeEnded: string;
  gameDuration: string;
}

export default function MatchStats(props: MatchStatsProps) {
  return (
    <div>
      <p className={`${props.winLose ? "text-blue-800" : "text-rose-800"}`}>
        {props.winLose ? "Win" : "Loss"}
      </p>
      <p> {props.queueType} </p>
      <p> {props.timeEnded} </p>
      <p> {props.gameDuration} </p>
    </div>
  );
}
