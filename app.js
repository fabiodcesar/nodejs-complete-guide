//Instanciate a http module
const http = require('http');

// Another way to pass rqListener using a more classic approach
// function rqListener (req, res) {
// }
// http.createServer(rqListener);

//Creates the server
const server = http.createServer((req, res) => {
    console.log(req);
});

//Listen for requests
server.listen(3000);