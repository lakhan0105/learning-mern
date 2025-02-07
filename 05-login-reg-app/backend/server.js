const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const { connectDb } = require("./db/dbConnection.js");
const User = require("./db/user.js");

// Middleware for parsing
app.use(express.json());

// cors
app.use(cors());

connectDb();

// Registration
app.post("/register", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const newUser = new User({
      userName,
      password,
    });

    console.log("New user object:", newUser);

    await newUser.save();
    res.status(201).json({ message: "Registered" });
  } catch (error) {
    // Log the full error object to the console
    console.error("Registration error:", error);
    res
      .status(500)
      .json({ message: "Could not register", error: error.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
});

app.listen(8000, () => {
  console.log("listening on", port);
});
