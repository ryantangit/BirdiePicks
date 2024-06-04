import { SummonerProfile } from "@/components"

export default function Page({ params }: { params: { regionID: string[] } }) {

  return (
    <div>
      <SummonerProfile regionID={params.regionID} />
    </div>
  )
}


