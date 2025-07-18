const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  response.end('Hello from GitHub Actions Demo App!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error:', err);
  }
  console.log(`Server is listening on ${port}`);
});

