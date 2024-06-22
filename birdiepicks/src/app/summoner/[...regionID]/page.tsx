import { SummonerPage } from "@/components"

export default function Page({ params }: { params: { regionID: string[] } }) {

  return (
    <div>
      <SummonerPage regionID={params.regionID} />
    </div>
  )
}


