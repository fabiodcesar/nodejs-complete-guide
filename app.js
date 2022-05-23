//Instanciate a http module
const http = require('http');

const routes = require('./routes');

//Creates the server
const server = http.createServer(routes);

//Listen for requests
server.listen(3000);