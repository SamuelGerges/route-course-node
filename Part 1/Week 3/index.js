// create module that exports a function to sum two numbers
// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(5, 10)); // Output: 15
// module.exports.sum = sum;


// create server that listens on port 3000 and responds with "Hello, World!"

const http = require('http');
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('test.js', 'utf8');
const image = fs.readFileSync('images/car2.jpg');

const server = http.createServer(function (request, response) {
    const {url, method} = request;
    console.log(`Request received: ${method} ${url}`);

    if(url == '/' && method == 'GET') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(html);
    }else if(url == '/style.css' && method == 'GET') {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.end(css);

    }else if(url == '/test.js' && method == 'GET') {
        response.writeHead(200, {'Content-Type': 'application/javascript'});
        response.end(js);
    }else if(url == '/images/car2.jpg' && method == 'GET') {
        response.end(image);
    }
     else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('404 Not Found');
    }
});

server.listen(5000, (error) => {
    if (error) {
        return console.error('Something went wrong', error);
    }else {
        return console.log('Server running at http://127.0.0.1:5000/');
    }
});


