import { RiotQuery } from "@/utils/RiotQuery";
import { NextResponse } from "next/server";

// /api/summoner/na/faker-NA1
export async function GET(request: Request, { params }: { params: { regionID: string[] } }) {

  const riotQuery = new RiotQuery();
  const regionRoute = params.regionID[0];
  const gameIdGameTag = params.regionID[1].split("-");
  const puuidResult = await riotQuery.accountQuery.getPuuid(gameIdGameTag[0], gameIdGameTag[1], regionRoute);
  if (!puuidResult) {
    return NextResponse.json({
      message: "Not found"
    }, {
      status: 403,
    })
  }

  return Response.json({ puuidResult });

}

//return Response.json({ params })

