//Instanciate a http module
const http = require('http');

const routes = require('./routes');

//console.log(routes.someText);

//Creates the server
const server = http.createServer(routes.handler);

//Listen for requests
server.listen(3000);