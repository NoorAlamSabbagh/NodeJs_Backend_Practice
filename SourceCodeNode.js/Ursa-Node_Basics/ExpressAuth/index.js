//<=======================Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
//<=======================Lec22March Same code ha aur userController se start kiya===============>
//<======================Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments============>
/*
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();
require('./connectDb')

app.use(express.json()) //iske bina body undefined show karega

const userRouter = require('./src/routes/userRoutes');
app.use('/user', userRouter);

const PORT = process.env.PORT

    app.listen(PORT, ()=>{
        console.log(`auth server running at ${PORT}`);
    })
*/    
//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>


// <======================Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>
//lec 24 me srif index me thoda bht code likha bss aur baki pug padha static file dekha
const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

require('./connectDb')
app.use(express.json()) //iske bina body undefined show karega
//cors allow your server resources with all different function
const cors = require('cors')
app.use(cors());

app.use(express.static('./src/views'))//for static file to render


app.set('view engine', 'pug')//template engine
app.set('views', './src/views')
const userRouter = require('./src/routes/userRoutes');
const productRouter = require('./src/routes/productRoute');

app.use('/user', userRouter);
app.use('/product', productRouter);

const PORT = process.env.PORT

    app.listen(PORT, ()=>{
        console.log(`auth server running at ${PORT}`);
    })
    
// <======================Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>

