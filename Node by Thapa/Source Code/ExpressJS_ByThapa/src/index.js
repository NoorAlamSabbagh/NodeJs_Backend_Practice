/*const path = require('path')
const express = require("express");
const app = express();

//relative absolute
// console.log(__dirname);

const staticPath = path.join(__dirname, '../public');

//builtin middleware
app.use(express.static(staticPath))

app.get("/",(req, res)=>{
 res.send("Hello from the express");
})

app.get("/about", (req,res)=>{
    res.send("hello from the about section")
})

app.listen(8000,()=>{
    console.log('listening the port at 8000')
})
//the callback function has 2 parameters, request(req) and response(res),
//the request object (req) represents the HTTP request and 
// has properties for the request query string, parameters, body
//HTTP headers etc

//Similarly, the response object represents the HTTP response
//that the Express app sends when it recieves an HTTP request

*/