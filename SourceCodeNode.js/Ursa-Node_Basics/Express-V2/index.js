// <===============Lec11March1: Building Restful API using Express-CRUD for Ecommerce API===============>//
//1)
/*
const express = require('express');

const app = express();

const {checkLogInStatus} = require('./middleware');

app.use(checkLogInStatus)//middleware ki tarah use kiya

app.get ('/product', (req,res) =>{
    console.log('inside product route');
    res.send('product page')
})

app.get ('/profile', (req,res) =>{
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

app.listen(5800, () =>{
    console.log(`app running at 5800`)
})
*/
//Iske baad midleware me code likha


//check code in middleware 2 code to realted this code
/*
//2)
const express = require('express');

const app = express();

const {checkLogInStatus, checkUser} = require('./middleware');

app.use(checkUser)

app.get ('/product', (req,res) =>{
    console.log('inside product route');
    res.send('product page')
})

app.use(checkLogInStatus);

app.get ('/profile', (req,res) =>{
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

app.listen(5800, () =>{
    console.log(`app running at 5800`)
})
*/

//
/*
const express = require('express');

const app = express();

const {checkLogInStatus, checkUser} = require('./middleware');

app.use(checkUser)

app.get ('/product', (req,res) =>{
    console.log('inside product route');
    res.send('product page')
})


app.get ('/profile',checkLogInStatus, (req,res) =>{
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders',checkLogInStatus, (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

app.listen(5800, () =>{
    console.log(`app running at 5800`)
})
*/

//
/*
const express = require('express');

const app = express();

const {checkLogInStatus, checkUser} = require('./middleware');
// app.use(checkUser)//agar sabke liye chalana ha to middleware ko top pe rakho
// app.use(checkLogInStatus)
// express.static-->middleware to serve static files


// app.get ('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--GET')
// })

// app.post('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--POST')
// })

// app.patch('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--PATCHcls')
// })

//using Route for same code of get,post, patch as above code written
//product route
// http://localhost:5800/product/2
app.route('/product/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page-- POST')
})
.patch((req, res) => {
    res.send('product page-- PATCH')
})
//

//
//user Route
// http://localhost:5800/user/2
app.route('/user/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page-- POST')
})
.patch((req, res) => {
    res.send('product page-- PATCH')
})

app.get ('/profile',checkLogInStatus, (req,res) =>{//to write middleware for specific
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

app.listen(5800, () =>{
    console.log(`app running at 5800`)
})
*/

//3)
/*
const express = require('express');

const app = express();

//after installing dotenv
const dotEnv = require('dotenv')
dotEnv.config();


const {checkLogInStatus, checkUser} = require('./middleware');
app.use(checkUser)//agar sabke liye chalana ha to middleware ko top pe rakho
// app.use(checkLogInStatus)
// express.static-->middleware to serve static files


// app.get ('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--GET')
// })

// app.post('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--POST')
// })

// app.patch('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--PATCHcls')
// })

//using Route for same code of get,post, patch as above code written
//product route
app.route('/product/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page-- POST')
})
.patch((req, res) => {
    res.send('product page-- PATCH')
})
//

//
//user Route
app.route('/user/:id')
.get((req, res) => {
    res.send('product page-- GET')
})
.post((req, res) => {
    res.send('product page-- POST')
})
.patch((req, res) => {
    res.send('product page-- PATCH')
})

app.get ('/profile',checkLogInStatus, (req,res) =>{//to write middleware for specific
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

//
const PORT = process.env.PORT || 5800
// console.log(process);
app.listen(PORT, () =>{
    console.log(`app running on ${PORT}`)//maine bs 
})

// 
// I am hiding my port using dotenv (npm i dotenv --save)
// app.listen(process.env.PORT, () =>{
//     console.log(`app running at ${process.env.PORT}`)//maine bs 
// })
*/

// <===============End of Lec11March1===============>//






// <======================Lec12March2-Introducing routes and Router, middleware in express,mvc architecture==========>

//jo cheeze hum ek hi file me likh rahe the userRoute aur ProductRoute ko 
// usko ab alag alag file me likha routes ki help se
// 1)
/*
//iske liye middleware bhi chalana ha
const express = require('express');

const app = express();

//after installing dotenv
const dotEnv = require('dotenv')
dotEnv.config();

const productRouter = require('./routes/productRoutes')//import kiya route ko

const {checkLogInStatus, checkUser} = require('./middleware');

app.use('/', productRouter)//yaha route use kiya


// app.use(checkUser)//agar sabke liye chalana ha to middleware ko top pe rakho
// app.use(checkLogInStatus)
// express.static-->middleware to serve static files


// app.get ('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--GET')
// })

// app.post('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--POST')
// })

// app.patch('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--PATCHcls')
// })

//using Route for same code of get,post, patch as above code written
//cannot manageable such long code so use Routes
//ise comment off kiya kyoki ise hume routes ke folder me bana rakha ha
//using Routes

//
//Lec 12 ka code yaha se suru kiya ha for nested route
// app.get('/product/mobile',(req, res) =>{
    
// })

// app.get('/product/clothing',() =>{

// })
//


app.get ('/profile',checkLogInStatus, (req,res) =>{//to write middleware for specific
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders',checkLogInStatus, (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

//
const PORT = process.env.PORT || 5800
// console.log(process);//bht bada process log dega
app.listen(PORT, () =>{
    console.log(`app running on ${PORT}`)//maine bs 
})
*/


//
/*
const express = require('express');

const app = express();

//after installing dotenv
const dotEnv = require('dotenv')
dotEnv.config();

app.use(express.json());//bina express midleware ke body use nhi kar paoge

const productRouter = require('./routes/productRoutes')//import kiya route ko
const userRouter = require('./routes/userRoutes');//import userRoutes

const {checkLogInStatus, checkUser} = require('./middleware');

app.use('/products', productRouter)//yaha route use kiya
app.use('/', userRouter)//yaha route use kiya

// app.use(checkUser)//agar sabke liye chalana ha to middleware ko top pe rakho
// app.use(checkLogInStatus)
// express.static-->middleware to serve static files


// app.get ('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--GET')
// })

// app.post('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--POST')
// })

// app.patch('/product', (req,res) =>{
//     console.log('inside product route');
//     res.send('product page--PATCHcls')
// })

//using Route for same code of get,post, patch as above code written
//cannot manageable such long code so use Routes
//ise comment off kiya kyoki ise hume routes ke folder me bana rakha ha
//using Routes

//
//Lec 12 ka code yaha se suru kiya ha for nested route
// app.get('/product/mobile',(req, res) =>{
    
// })

// app.get('/product/clothing',() =>{

// })
//


app.get ('/profile',checkLogInStatus, (req,res) =>{//to write middleware for specific
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

//
const PORT = process.env.PORT || 5800
// console.log(process);
app.listen(PORT, () =>{
    console.log(`app running on ${PORT}`)//maine bs 
})
*/


//Routes ka folder  banaya productRoutes se code start kiya
//isme humne routes ke help se code ko readibility aur manage kiya code ko


// <======================END: Lec12March2-Introducing routes and Router, middleware in express,mvc architecture==========>



//
// <====================Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>
//Iske bina apna controller ka productController kaam nhi karega
/*
const express = require('express');
const app = express();

//after installing dotenv
const dotEnv = require('dotenv')
dotEnv.config();

app.use(express.json());//bina express midleware ke body use nhi kar paoge

const productRouter = require('./routes/productRoutes')//import kiya route ko
const userRouter = require('./routes/userRoutes');//import userRoutes

const {checkLogInStatus, checkUser} = require('./middleware');

app.use('/products', productRouter)//yaha route use kiya
app.use('/', userRouter)//yaha route use kiya

app.get ('/profile',checkLogInStatus, (req,res) =>{//to write middleware for specific
    console.log('inside profile route');
    res.send('profile page')
})

app.get ('/orders', (req,res) =>{
    console.log('inside order route');
    res.send('orders page')
})

//
const PORT = process.env.PORT || 5800
app.listen(PORT, () =>{
    console.log(`app running on ${PORT}`)
})
*/

// <====================END: Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>