//<========================Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>
//Yaha se code start kiya Lec 14 ka
/*
const express = require("express");
const app = express();

const PORT = process.env.PORT || 5500
app.listen(PORT, ()=>{
    console.log(`express server running on ${PORT}`)
})
*/

//
/*
//yaha env folder use kiya(npm i dotenv)
const express = require('express')
const dotenv = require('dotenv')

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log(`express server running at ${PORT}`)
})
*/

//
/*
const express = require('express')
const dotenv = require('dotenv')

const app = express();
dotenv.config();

const userRoute = require('./src/routes/userRoutes');

require('./connectDb')//require run whole file
app.use('/user', userRoute)

const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log(`express server running at ${PORT}`)
})
*/

//<========================END: Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>

//

//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
//Lec 16 me kuch nhi kiya is code me
//Lec 17 se Juno ke sath firse MVC padha aur ExpressWithDB folder banaya

const express = require('express');

const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRoute = require("./src/routes/userRoutes");//to connectuserRoutes

//middleware is something which is sit in between of your req and response
//The middleware in node. js is a function that will have all the access for requesting an object, responding to an object,
//and moving to the next middleware function in the application request-response cycle.
app.use(express.json());//req.body ko read karne ke liye middleware chahiye jo humne postman me Json create kiya ha
//url encoded ek dusra tariqa ha middleware ka

require('./connectDb')//to connnect mongodb with my index.js(require runs the whole file not only that code)
app.use('/user', userRoute)//middleware to connect router in your main file(index.js)

const PORT = process.env.PORT || 5500
app.listen(PORT,()=>{
    console.log(`express server running at ${PORT}`);
})

//<========================End Lec15March6=============================>


