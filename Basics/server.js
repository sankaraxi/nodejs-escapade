const http = require('node:http');

const server = http.createServer((req, res) => {
    if(req.url === '/getsomething') {
        res.end("Here is nothing");
    }
  res.end("Hello Pixelated Cafe");
});

server.listen(2128, () => {
  console.log("Server is running on port 2128");
});
// This is a simple server that listens on port 2128 and sends a response of "Hello Pixelated Cafe" to any request it receives.