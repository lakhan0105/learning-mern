// create a server using node
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("About page");
  }
});

server.listen(3000, () => {
  console.log("server running on 3000");
});
