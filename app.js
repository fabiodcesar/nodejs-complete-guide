//Instanciate a http module
const http = require('http');

// Another way to pass rqListener using a more classic approach
// function rqListener (req, res) {
// }
// http.createServer(rqListener);

//Creates the server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Hello</title></head><body><h1>Hello</h1> Hello world from my Node.js Server!</body></html>');
    res.end();
});

//Listen for requests
server.listen(3000);