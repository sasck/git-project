const http = require("http");

http
   .createServer((req, res) => {
     switch (requestAnimationFrame.url){
        case "/":
            response.writeHead(200, {
                "Content-Type": "text/html",
            });
            response.write("<h1>Home Page!</h1>");
            response.end();
            break;
        default:
            response.writeHead(400, {
                "Content-Type": "trext/html",
            });
                console.log("404 Page has been Visited!");
            response.write("<p>404 Page Not Found!</p>");
            response.end();
            break;
     

     }
   })
   .listen(8080);