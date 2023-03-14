const http = require('node:http')
const server = http.createServer((request, response) => {
  let url = request.url.split("/");
  if (url[1] === "" && request.method === "GET") {
    response.end("Hello, Galvanize!");
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(3001, 'localhost', () => console.log('Server running on localhost:3001'));