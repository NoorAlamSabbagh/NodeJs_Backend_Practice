// var oneLinerJoke = require('one-liner-joke');
// var getRandomJoke = oneLinerJoke.getRandomJoke();
// console.log(getRandomJoke)

//
// var figlet = require("figlet");

// figlet("Noor Alam", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

//
const express = require('express')
const app = express()

app.use(function(req,res, next){
console.log("Hello from Middleware");
next();
});
app.use(function(req,res, next){
console.log("Hello from Middleware 2");
next();
});

app.get('/', function (req, res) {
  res.send('Hello World Noor Alam')
})

app.listen(3000);
