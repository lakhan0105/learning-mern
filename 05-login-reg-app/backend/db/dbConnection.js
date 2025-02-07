const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect("mongodb://localhost:27017/myUsersDatabase1");
    console.log("connected to mongodb database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectDb };
