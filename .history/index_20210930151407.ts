//when not highlighted means not in use
import http from 'http';
import path from 'path';
import fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => 
{
  // removed because we don't know the response yet
  // res.statusCode = 200; 
  // changes in mime types
  // res.setHeader('Content-Type', 'text/plain');
  // removed to replace with displayHome
  // res.end('Hello, World!');
  res.setHeader('Content-Type', 'text/html');
  displayHome(res);
});

server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});

function displayHome(res: http.ServerResponse): void 
{
  fs.readFile("index.html", (err, data) => 
  {
    if (err)
    {
      res.writeHead(404);// if there's an error
      res.end("ERROR: 404 - Page not found");// displays this
      console.log("Error");
      return;
    }
    res.writeHead(200);// if everything is okay...
    res.end(data); // as a response
  });
}