const http = require("http");

http.createServer((_req, res) => {
     res.writeHead(200, {"Content-Type": "text/html"});
     res.write("<h1>Hello World</h1>");
     res.write("<h2>Hello Http</h2>");
     res.end();
}).listen(8080);
