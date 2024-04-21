//Lec 16
//The http.createServer() method includes request and response parameters which is supplied by Node.js

//The request object can be used to get the information about the current  HTTP request
//e.g., url, request, header, and data.

//The response object can be used to be send a response for a current HTTP request.

//If the response from the HTTP server is supposed to be displayed as HTML,
//you should include an HTTP header with correct content type:

//server banaya
/*
const http = require("http");
const server = http.createServer((req, res) =>{
    res.end('Hello from the other sides Noor Alam');
});
server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port no 8000")
});
*/

/*
//Lec 17 Node.js Routing
const http = require("http");
const server = http.createServer((req, res) =>{
    console.log(req.url);
    if(req.url == "/"){
        res.end('Hello from the other sides Noor Alam');
    }else if (req.url == "/about"){
        res.end("Hello from the AboutUs sides");
    }
    else if (req.url == "/contact"){
        res.end("Hello from the contactUs sides");
    }
    else{
        res.writeHead(404, {"Content-type": "text/html" });
        res.end("<h1>404 error pages. Page doesn't exit </h1>");
    }
});
server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening to the port no 8000")
});
*/

//<=========================Lec 19 Create simple api in NodeJs ============================>
/*const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the other sides Noor Alam");
  } else if (req.url == "/about") {
    res.end("Hello from the AboutUs sides");
  } else if (req.url == "/contact") {
    res.end("Hello from the contactUs sides");
    }
    // else if (req.url == "/userapi") {
    // fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
    //   console.log(data);
    //   res.end(data); //ye line tumhare local host pe show karega api data ko
    // });
    // // res.end("Hello from the userAPI sides");
     
    //
    // else if (req.url == "/userapi") {
    //     fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
    //       console.log(data);
    //       const objData = JSON.parse(data);
    //     //   res.end(data); 
    //       res.end(objData[2].name); 
    //     });
        //}
    
    //
  else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error pages. Page doesn't exit </h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
*/

//2)
/*const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //
  const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
  const objData = JSON.parse(data);

  console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the other sides Noor Alam");
  } else if (req.url == "/about") {
    res.end("Hello from the AboutUs sides");
  } else if (req.url == "/contact") {
    res.end("Hello from the contactUs sides");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "Content-type": "application/json" });//for json file
    res.end(objData[2].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });////for html file
    res.end("<h1>404 error pages. Page doesn't exit </h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
*/
//<============================  End of lec 19 create simple api in node js  ===========================>//