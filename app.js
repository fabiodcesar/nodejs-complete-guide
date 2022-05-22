//Instanciate a http module
const http = require('http');

//FS allows to work with files
const fs = require('fs');

// Another way to pass rqListener using a more classic approach
// function rqListener (req, res) {
// }
// http.createServer(rqListener);

//Creates the server
const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    //TODO: Ressearch about tripple equal
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message"></input>');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST')
    {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return rs.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body>');
    res.write('Hello world from my Node.js Server!');
    res.write('</body>');
    res.write('</html>');
    res.end();
});

//Listen for requests
server.listen(3000);