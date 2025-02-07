const mongoose = require("mongoose");

// UserSchema
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// UserModel
const User = mongoose.model("User", UserSchema);
module.exports = User;
