const http = require("http");

const PORT = 3000;

// Create the server and store it in a variable
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from the HTTP server!"); // Add this line
});

// Call .listen on the server instance
server.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl+C to stop the server.");
  console.log("You can access it at http://localhost:" + PORT);
});
