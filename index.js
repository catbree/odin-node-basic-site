var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    let filename = "";
    if (q.pathname === "/") {
      filename = "./index.html";
    }
    if (q.pathname === "/contact-me") {
      filename = "./contact-me.html";
    }
    if (q.pathname === "/about") {
      filename = "./about.html";
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        var html404 = fs.readFileSync("./404.html");
        res.write(html404);
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
