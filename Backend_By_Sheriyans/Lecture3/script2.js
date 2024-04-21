const express = require('express')
const app = express()

app.use(function(req,res, next){
    console.log("Hello from Middleware 1");
next();
});

app.use("/", function(req,res, next){
console.log("Hello from Middleware 2");
next();
});

app.get('/profile', function (req, res) {
  res.send('Hello from profile')
})

app.get('/profile/harsh', function (req, res) {
  res.send('Hello from harsh')
})

app.get('/profile/:username', function (req, res) {
  res.send(`Hello from ${req.params.username}`)
})

app.listen(3000);