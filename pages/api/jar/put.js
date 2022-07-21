import executeQuery from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(400).send("only post methods allowed");
    return;
  }

  const { text } = JSON.parse(req.body);

  const initTableQuery = `
    CREATE TABLE IF NOT EXISTS messages(
      text TEXT
    )
  `;

  const insertTextQuery = `
    INSERT INTO messages (text)
    VALUES (${text})
  `;

  let initResponse = await executeQuery({ query: initTableQuery });
  let insertResponse = await executeQuery({ query: insertTextQuery });

  console.log(initResponse, insertResponse);
  res.end();
}
