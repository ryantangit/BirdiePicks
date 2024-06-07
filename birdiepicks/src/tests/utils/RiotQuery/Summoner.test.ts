import { expect, test } from "vitest";
import { RiotQuery } from "@/utils/RiotQuery";

test("Summoner Retrival: Phase 1 / 3, PUUID", async () => {
  const riotQuery = new RiotQuery();
  const puuid = riotQuery.accountQuery.getPuuid("Birtext", "NA1", "na");


})
