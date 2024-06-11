import { test, expect } from "vitest";
import { LeagueQueryParser } from "@/utils/RiotQuery/Queries/LeagueQuery/LeagueQueryParser";
import { LeagueEntryDTO } from "@/utils/RiotQuery/Queries/LeagueQuery/LeagueQuery";

const testLeagueEntryDTO: LeagueEntryDTO[] = [
  {
    leagueId: '6a8b9d59-917a-4b8a-8781-98e98fdc1a03',
    queueType: 'RANKED_SOLO_5x5',
    tier: 'SILVER',
    rank: 'I',
    summonerId: 'HzUC6ooiJNlqCq120hbrnDIlAjHiLmiWNWSX0oIesycfg3A',
    leaguePoints: 30,
    wins: 3,
    losses: 4,
    veteran: false,
    inactive: false,
    freshBlood: false,
    hotStreak: false
  },
  {
    leagueId: '6a8b9c5d-917a-4b8a-8781-98e98fdc1a03',
    queueType: 'RANKED_FLEX',
    tier: 'NOT REAL',
    rank: 'I',
    summonerId: 'HzUC6ooiJNlqCq120hbrnDIlAjHiLmiWNWSX0oIesycfg3A',
    leaguePoints: 30,
    wins: 3,
    losses: 4,
    veteran: false,
    inactive: false,
    freshBlood: false,
    hotStreak: false
  }
]

test("LeagueParser Basic", () => {
  const parser = new LeagueQueryParser();
  const parsedResult = parser.parse(testLeagueEntryDTO);
  expect(parsedResult).toBeDefined;
  expect(parsedResult?.leaguePoints).toBe(30);
  expect(parsedResult?.wins).toBe(3);
  expect(parsedResult?.losses).toBe(4);
  expect(parsedResult?.tier).toBe("SILVER");
  expect(parsedResult?.rank).toBe("I");
})

test("LeagueParser Unranked", () => {
  const parser = new LeagueQueryParser();
  const parsedResult = parser.parse([]);
  expect(parsedResult).toBeUndefined;
})
