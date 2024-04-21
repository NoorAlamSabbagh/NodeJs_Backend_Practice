//<===========================================================>//
// Lec8Feb24: Restful Services, Introducing express, Building first Express server

// server to server request bhejne ke liye
// const http = require('http')

// http.request('http://localhost:8000/home', (res) => {
//     console.log('response recieved');
// })
// .end();

//////////////////////////////////////////////////
// server to server request bhejne ke liye
/*
const http = require('http');

http.request('http://localhost:8000/login', (res) => {
    console.log('response recieved');
    res.setEncoding('utf-8')
    res.on('data', (mydata) => {
        console.log('getting response data here');
        console.log(mydata);
    })

})
.end()
*/

//
/*
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 8000,
  path: '/login',
  method: 'GET'
};

const request = http.request(options, (res) => {
  console.log('response received');
  res.setEncoding('utf-8');
  res.on('data', (mydata) => {
    console.log('getting response data here');
    console.log(mydata);
  });
});

request.end();
*/
// In this code, I've added the options object, which contains the hostname, port, path, and method for the request. 
// You can modify these values to match your specific use case. Then, the http.request() method is assigned to the request variable, and the .end() method is called on the request variable to send the request.




//Bs yaha tak Node js ka basics tha iske baad Express ka folder banaya 


//<===========================================================>//