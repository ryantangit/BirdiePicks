import { AccountDto, AccountQuery } from "@/utils/RiotQuery/Queries/AccountQuery"
export async function GET() {
  const accountQuery: AccountQuery = new AccountQuery("birtext", "na1", process.env.RIOT_API ?? "NA");
  const result: AccountDto = await accountQuery.getPuuid();
  return Response.json({ result })
}
