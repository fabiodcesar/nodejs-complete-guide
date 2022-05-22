//Instanciate a http module
const http = require('http');

// Another way to pass rqListener using a more classic approach
// function rqListener (req, res) {
// }
// http.createServer(rqListener);

//Creates the server
const server = http.createServer((req, res) => {

    const url = req.url;

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

    //Outputs main request details
    //console.log(req.url, req.method, req.headers);

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