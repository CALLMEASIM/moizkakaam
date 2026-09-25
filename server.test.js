const request = require("supertest");
const server = require("./server");

describe("Server", () => {
  test("returns Hello from Node.js server!", async () => {
    const response = await request(server).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello from Node.js server!");
  });
});
