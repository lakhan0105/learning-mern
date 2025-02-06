const { dbConnection } = require("./db");

const insertDoc = async () => {
  try {
    const db = await dbConnection();
    const userCollection = db.collection("users");

    const data = [{ name: "punith" }, { name: "govu" }];

    const insertedRes = await userCollection.insertMany(data);
    console.log(insertedRes.insertedCount);
  } catch (error) {
    console.log("error in insertDoc");
    console.log(error);
  }
};

insertDoc();
