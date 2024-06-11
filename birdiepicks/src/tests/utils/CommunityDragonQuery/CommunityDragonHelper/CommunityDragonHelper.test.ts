import { expect, test } from 'vitest'
import { CommunityDragonHelper } from '@/utils/CommunityDragonQuery/CommunityDragonHelper/CommunityDragonHelper';

test('Fetch Icon 0 from CommmunityDragon', async () => {
  //https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/0.jpg
  const cdh: CommunityDragonHelper = new CommunityDragonHelper();
  const response = await cdh.execute("profile-icons/0.jpg");
  expect(response).toBeDefined;
  expect(response?.ok).toBe(true);
  expect(response?.headers.get("content-type")).toBe("image/jpeg");
})
