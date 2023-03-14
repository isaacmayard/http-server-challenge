// const http = require("node:http");
// const fs = require("fs");

// const server = http.createServer((request, response) => {
//   let url = request.url.split("/");
//   if (url[1] === "" && request.method === "GET") {
//     response.end("Hello, Galvanize!");
//   } else {
//     response.statusCode = 404;
//     response.end();
//   }
// }).listen(3001, 'localhost', () => console.log('Server running on localhost:3001'));

// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// function myFunction(inputFileName, outputFileName) {
//   // use the below methods in your code (you will need to change the passed in parameters)
//   //Reads an input file and returns the contents as a string
//   let csvContents = fs.readFileSync(inputFileName, "utf-8");
//   let line = csvContents.split("\n").slice(1);
//   let names = line.map((e) => {
//     return e.split(",");
//   });
//   let namesArray = [];
//   let completedNames = [];
//   names.forEach((e) => {
//     e.forEach((a) => {
//       namesArray.push(a);
//     });
//   });
//   completedNames.push({
//     "First Name": namesArray[0],
//     "Last Name": namesArray[1],
//   });
//   completedNames.push({
//     "First Name": namesArray[2],
//     "Last Name": namesArray[3],
//   });
//   console.log(completedNames);

//   //   writes the contents to a file
//   fs.writeFileSync(outputFileName, JSON.stringify(completedNames));

//   // deletes a file
//   fs.unlinkSync(inputFileName);
// }

// myFunction("test.csv", "newtest.csv");