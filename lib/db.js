import mysql from "serverless-mysql";

if (
  !process.env.MYSQL_HOST ||
  !process.env.MYSQL_PORT ||
  !process.env.MYSQL_DATABASE ||
  !process.env.MYSQL_USER ||
  !process.env.MYSQL_PASSWORD
) {
  throw new Error("mysql missing env variables");
}

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  },
});

export default async function executeQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();

    return results;
  } catch (error) {
    return { error };
  }
}

export { db };
