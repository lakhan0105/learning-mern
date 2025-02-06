const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());
app.use("/", bookRoutes);

// listen
app.listen(3000, () => {
  console.log("Listening on 3000");
});
