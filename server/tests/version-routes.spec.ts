const request = require('supertest');
const localapp = require("../src/local");

describe("Smoke test", () => {

  it("get a successful response", async () => {
    const api = await request(localapp).get('/api')

    expect(api.statusCode).toBe(200)
  });
});
