const http = require("http");

http
    .createServer((req, res) => {
        console.log(res);
        res.write("<h1>Home Page!</h1>");
    })
    .listen(8080);