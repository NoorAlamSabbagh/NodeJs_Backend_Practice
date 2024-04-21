//<======================= Lec7Feb23: after studying eventjs folder ====================================>//
// Lec7Feb23: Creating and working files, Events module, Emitting Events

// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log('req received');
// })

// const PORT = 8000
// server.listen(PORT, () => {
//     console.log(`server is running at ${PORT}`);
// })


//
/*
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('req received');
    res.end("sending Respnse")
})

const PORT = 8000
server.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})
*/

//
/*
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('req received');
    res.end("sending Response")
})

//server internally implements event module
server.on('error', (req,res)=>{
    console.log('error inside server')
})
server.emit('error');

const PORT = 8000
server.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})
*/

//
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log('req is', req);
//     console.log('headers', req.headers);//header ka pura aayega
//     console.log('url',req.url)//route bana dega
//     res.end('sending response');
// })

// const PORT = 8000;
// server.listen(PORT, ()=>{
//     console.log(`server is running at ${PORT}`);
// })


//
// function calculate(a,b){
//     return a+b
// }

// const res = calculate(10,40)
// console.log(res);

//
// //broweser pe post request kiya
// fetch('http:localhost/3000', {
//     method: "POST"
// })
// // http internally implements Event module
// server.on('error', () => {
//     console.log('error inside server ');
// })
// server.emit('error');


//
// const http = require('http');
// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if(req.url === '/'){
//         res.write("{name: 'Abhinav'}");
//         // res.end('<h2>default page</h2>')
//     }else if(req.url === '/home'){
//         res.end('<h2>Home Page</h2>')
//     }else if(req.url === '/login'){
//         res.end('<h2>Login Page</h2>')
//     }else{
//         res.end('sending Response');
//     }
//     res.end()
//     // res.end('sending Response');
// })

// const PORT = 8000
// server.listen(PORT, () => {
//     console.log(`server is running at ${PORT}`);
// })


//
// const http = require('http');
//      const server = http.createServer((req,res)=>{
//     // console.log('headers', req.headers);
//     console.log('url', req.url);
//     if(req.url === '/'){
        
//     }else if(req.url === '/home'){
//         res.end('<h2>Home Page</h2>')
//     }else if(req.url === '/login'){
//         res.end('<h2>Login Page</h2>')
//     }else{
//         res.end('sending Response');
//     }
//     res.end("sending response")
// })

// const PORT = 8000;
// server.listen(PORT,()=>{
//     console.log("server is running at 8000")
// })




//<===========================================================>//

//<===========================================================>//
// Lec8Feb24: Restful Services, Introducing express, Building first Express server
// server to server request bhejne ke liye
const http = require('http');
const server = http.createServer((req, res) => {
    console.log('url', req.url);
    if(req.url === '/'){
        res.write("{name: 'Abhinav'}");
    }else if(req.url === '/home'){
        res.end('<h2>Home Page</h2>')
    }else if(req.url === '/login'){
        res.end('<h2>Login Page</h2>')
    }else{
        res.end('sending Response');
    }
    res.end()
    // res.end('sending Response');
})


const PORT = 8000
server.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})

//<===========================================================>//
//iske baad request file banaya