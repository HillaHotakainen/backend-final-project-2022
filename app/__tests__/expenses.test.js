const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");

describe("GET expenses endoint", () => {
  test("should return 200", (done) => {
    request(app).get("/api/expenses").expect(200).end(done);
  });

  test("should return 200 and valid JSON", async () => {
    const response = await request(app)
      .get("/api/expenses")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(
          {
            amount: 25,
            category: "groceries",
            date: "2022-10-24T21:00:00.000Z",
            id: 1,
            shop: "Wolt",
          },
          {
            amount: 157.56,
            category: "eating out",
            date: "2022-10-14T21:00:00.000Z",
            id: 2,
            shop: "Mardin",
          },
          {
            amount: 150.56,
            category: "groceries",
            date: "2022-11-14T22:00:00.000Z",
            id: 3,
            shop: "Lidl",
          },
          {
            amount: 63.23,
            category: "eating out",
            date: "2022-11-14T22:00:00.000Z",
            id: 4,
            shop: "Hook",
          },
          {
            amount: 75.87,
            category: "traveling",
            date: "2022-12-19T22:00:00.000Z",
            id: 5,
            shop: "VR",
          }
        ),
      ])
    );
  });

  test("should return expenses of specific month", async () => {
    const response = await request(app)
      .get("/api/expenses/10")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(
          {
            amount: 25,
            category: "groceries",
            date: "2022-10-24T21:00:00.000Z",
            id: 1,
            shop: "Wolt",
          },
          {
            amount: 157.56,
            category: "eating out",
            date: "2022-10-14T21:00:00.000Z",
            id: 2,
            shop: "Mardin",
          }
        ),
      ])
    );
  });

  test("should return 404 and Invalid input", async () => {
    const response = await request(app).get("/api/expenses/15");
    expect(response.status).toEqual(400);
    expect(response.text).toContain("Invalid input");
  });
});

describe("POST expenses endpoint", () => {
  test("should create a new expense", async () => {
    const expense = {
      date: "2022-05-14T21:00:00.000Z",
      amount: 123.23,
      shop: "Lidl",
      category: "groceries",
    };

    const response = await request(app)
      .post("/api/expenses")
      .set("Accept", "application/json")
      .send(expense);

    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.amount).toEqual(123.23);
    expect(response.body.date).toEqual("2022-05-14T21:00:00.000Z");
    expect(response.body.shop).toEqual("Lidl");
    expect(response.body.category).toEqual("groceries");
  });
});
