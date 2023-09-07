// Load the http module
const http = require("http");

// Set the port number for the server to listen on
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Set the response content
    res.write("Hello, world!");
    res.end();
});

// Start listening for incoming requests
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
