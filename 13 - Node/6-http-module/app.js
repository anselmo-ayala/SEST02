// http built-in module.
// Create web servers
// Make HTTP requests
const http = require("node:http");
// Define the hostname and port
const hostname = "127.0.0.1";
const port = 3000;

// .createServer(callback): creates an http server
const server = http.createServer((request, response) => {
  // res.writeHead: send the response header
  response.writeHead(200, { "Content-Type": "text/plain" });
  // res.end: send the response body
  response.end("Hello World\n");
});

// .listen(port, hostname, callback): liten on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
