

interface NameProp {
  summonerName: string;
  summonerTag: string;
  summonerLevel: number;
}

export default function SummonerName(props: NameProp) {
  return (
    <div className="grid grid-cols-1 gap-y-3">
      <h3 >
        {props.summonerName}
      </h3>
      <h3 >
        #{props.summonerTag}
      </h3>
      <h3 >
        Lv. {props.summonerLevel}
      </h3>
    </div>
  )
}
