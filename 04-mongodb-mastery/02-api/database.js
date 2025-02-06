const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "myFirstDatabase";

async function dbConnection() {
  try {
    await client.connect();
    console.log("connected");

    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.log("connection failed");
    console.log(error);
    return;
  }
}

module.exports = { dbConnection };
