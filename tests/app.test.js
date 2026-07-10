const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  test("should return success message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("CI/CD Pipeline is Working 🚀");
  });
});