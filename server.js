const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  //using lodash
  const num = _.random(0, 20);

  //set hearder content type
  res.setHeader("Content-Type", "text/html");

  //setting up a routing system
  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    //setting up a redirect
    // case "/about-me":
    //   res.statusCode = 301;
    //   res.setHeader("Location", "/about");
    //   res.end();
    //   break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
