const { dbConnection } = require("./db");

async function main() {
  try {
    const db = await dbConnection();

    const collection = db.collection("users");
    const docs = await collection.find().toArray();
    console.log(docs);
  } catch (error) {}
}

main();
