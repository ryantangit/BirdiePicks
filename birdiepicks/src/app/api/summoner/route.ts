import { AccountQuery, AccountDto } from "@/utils/RiotQuery";


// /api/summoner/na/faker#NA1
export async function GET() {
  const accountQuery: AccountQuery = new AccountQuery("birtext", "na1", process.env.RIOT_API ?? "NA");
  const result: AccountDto = await accountQuery.getPuuid();
  return Response.json({ result })
}
