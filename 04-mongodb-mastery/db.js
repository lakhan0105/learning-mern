const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbConnection = async () => {
  try {
    await client.connect();
    console.log("connection successfull");

    const db = client.db("myFirstDatabase");
    return db;
  } catch (error) {
    console.log("Failed to connect", error);
  }
};

module.exports = { dbConnection };
