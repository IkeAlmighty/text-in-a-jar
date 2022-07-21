// test for putting a text in the jar!
const { test, expect } = require("@playwright/test");

test("test-api-jar-put", async ({ request }) => {
  let response = await request.post("http://localhost:3000/api/jar/put", {
    data: JSON.stringify({ text: "test message" }),
  });

  expect(response.status === 200);
});
