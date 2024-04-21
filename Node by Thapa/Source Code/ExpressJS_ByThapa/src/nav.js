// www.thapa.com -welcome to my home page
// /about -welcome to my about page
// /contact -welcome to my contact page
// /temp -welcome to my temp page

const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req,res)=>{
  res.write("<h1>welcome to my home page</h1>");//
  res.write("<h1>welcome to my home page again</h1>");
  res.send();
})
app.get('/about', (req,res)=>{
  res.status(200).send("welcome to my about page");
})
app.get('/contact', (req,res)=>{
  res.send("welcome to my contact page");
})
// app.get('/temp', (req,res)=>{
//   res.send(
//     [
//       {
//     id: 1,
//     name: "vinod",
//      },
//       {
//     id: 1,
//     name: "vinod",
//      },
//       {
//     id: 1,
//     name: "vinod",
//      }
// ]
// );
// })

//the methods are identical when an object or array is passed,
//but res.json() will also converts non-objects, such as null and undefined, which are not valid JSON
//
app.get('/temp', (req,res)=>{
  res.json(
    [
      {
    id: 1,
    name: "vinod",
     },
      {
    id: 1,
    name: "vinod",
     },
      {
    id: 1,
    name: "vinod",
     }
]
);
})

app.listen(port,()=>{
    console.log(`listening the port no ${port}`)
})