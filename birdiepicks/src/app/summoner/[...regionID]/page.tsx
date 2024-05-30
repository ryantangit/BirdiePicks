
export default function Page({ params }: { params: { regionID: string[] } }) {
  return (
    <div>
      <h1> Summoner Name: {params.regionID[1]}</h1>
      <h1> Region: {params.regionID[0]}</h1>
    </div>
  )

} 
