import { expect, test } from 'vitest'

test("Ping server", async () => {
  const result = fetch("http://localhost:3000/api/ping");
  console.log(result);
}
)
