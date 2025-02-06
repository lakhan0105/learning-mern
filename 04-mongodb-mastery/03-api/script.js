const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/myFirstDatabase");
console.log("connected to mongodb");

// UsersSchema
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Model
const UserModal = mongoose.model("users", UserSchema);

// read the users data in /users
app.get("/users", async (req, res) => {
  try {
    const usersData = await UserModal.find();
    res.json(usersData);
  } catch (error) {}
});

// middleware
app.use(express.json());

// post new user
app.post("/add-user", async (req, res) => {
  try {
    const { name, age } = req.body;

    const newUser = new UserModal({
      name: name,
      age: age,
    });

    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
