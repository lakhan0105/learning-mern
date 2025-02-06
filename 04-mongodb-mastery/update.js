const { dbConnection } = require("./db");

async function update() {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    const updated = await collection.updateMany(
      { name: "Lakhan" },
      { $set: { age: 1 } }
    );

    console.log("updated successfuly");
    console.log(updated);
  } catch (error) {
    console.log(error);
  }
}

update();
