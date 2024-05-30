import { RiotRateLimiter } from "@fightmegg/riot-rate-limiter";


const riotRateLimiter = new RiotRateLimiter(
  {
    debug: false,
    concurrency: 1,
    retryAfterDefault: 5000,
    retryCount: 4,
    datastore: 'local'
  }
);
export {
  riotRateLimiter,
}
