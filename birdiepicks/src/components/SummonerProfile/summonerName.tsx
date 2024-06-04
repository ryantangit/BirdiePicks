

interface NameProp {
  summonerName: string;
  summonerTag: string;
}

export default function SummonerName(props: NameProp) {
  return (
    <div>
      <h3>
        {props.summonerName}
      </h3>
      <h3>
        {props.summonerTag}
      </h3>
    </div>
  )
}
