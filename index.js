const server = require("./api/server");

const port = 9000;

console.log("Hello World");

server.listen(port, () => {
  console.log("server is listening on " + port);
});

// START YOUR SERVER HERE
