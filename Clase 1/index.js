const fs = require("fs");

const http = require("http");
const { findSourceMap } = require("module");

const server = http.createServer((request, response) => {
  if (request.url === "/peliculas") {
    fs.readFile("./movies.json", "utf-8", (error, data) => {
      response.end(data);
    });
  } else if (request.url === "/series") {
    fs.readFile("./series.json", "utf-8", (error, data) => {
      response.end(data);
    });
  } else response.end("404");
});
server.listen(8080);
