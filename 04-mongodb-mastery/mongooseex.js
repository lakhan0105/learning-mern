const mongoose = require("mongoose");

// schema
const UsersShema = new mongoose.Schema({
  name: String,
  age: Number,
});

// model
const UserModel = mongoose.model("users", UsersShema);

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myFirstDatabase");
    console.log("connected to mongodb");

    const newData = new UserModel({
      name: "Manju",
      age: 22,
    });

    await newData.save();
    console.log("Data added successfully");
  } catch (error) {}
};

main();
