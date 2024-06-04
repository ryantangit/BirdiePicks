
interface IconProp {
  profileIconId: number
}

export default function SummonerIcon(props: IconProp) {
  return (
    <>
      <p>{props.profileIconId}</p>
    </>
  )
}

