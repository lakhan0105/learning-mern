const express = require("express");
const path = require("path");
const { dbConnection } = require("./database");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// home page route
app.get("/", async (req, res) => {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    const docs = await collection.find().toArray();

    res.send(docs);
  } catch (error) {
    console.log("something went wrong");
  }
});

app.get("/add", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.post("/add", async (req, res) => {
  try {
    const data = req.body.name;
    const db = await dbConnection();
    const collection = db.collection("users");
    const addedData = await collection.insertOne({ name: data });
    console.log(addedData.insertedId);
    res.send("added successfully");
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
