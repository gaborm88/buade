const request = require('supertest');
const app = require("../src/local");

describe("Smoke test", () => {
  it("succeeds with correct credentials", async () => {
    request(app)
      .get('/user')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });

  });
});
