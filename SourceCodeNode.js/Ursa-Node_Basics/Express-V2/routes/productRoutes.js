// <======================Lec12March2-Introducing routes and Router, middleware in express,mvc architecture==========>
/*
const express = require('express');

const router = express.Router();

// http://localhost:8000/products//base route ho gaya in sabhi ka
// kyoki maine index.js me //app.use('/products', productRouter) kiya ha
router.get('/products',(req,res)=>{
  res.send('All product list')
})


// http://localhost:8000/product/mobile
router.get('/mobile',(req,res)=>{
  res.send('All mobile product list')
})

router.get('/cloth',(req,res)=>{
  res.send('cloth list')
})

module.exports = router
*/


//
// kuch is tarah likh rahe the index file me
// using Routes
// product route
// app.route('/product/:id')
// .get((req, res) => {
//     res.send('product page-- GET')
// })
// .post((req, res) => {
//     res.send('product page -- POST')
// })
// .patch((req, res) => {
//     res.send('product page -- PATCH')
// })

//
// const a = 10;
// const b = 20;
// module.exports= router
// module.exports= {a,b}

//
/*
const express = require('express');

const router = express.Router();

const products = [
  {
    id: 1,
    name: "iphone 13",
    category: "Mobile",
    price: 50000,
    color: "black",
  },
  {
    id: 2,
    name: "galaxy",
    category: "Mobile",
    price: 20000,
    color: "white",
  },
  {
    id: 3,
    name: "fridge",
    category: "appliances",
    price: 20000,
    color: "green",
  },
  {
    id: 4,
    name: "cooler",
    category: "appliances",
    price: 25000,
    color: "gray",
  },
];


// router.get('/', (req, res) => {//get:read
//     res.send(products)
// })
// router.post('/', (req, res) => {//post:create
//     products.push(req.body)
//     res.send(products)
// })

// same things I have done in above comment off code  
//I just optimize below code they have common path but different method
router.route('/')
.get((req, res) => {
    res.send(products)
})
.post((req, res) => {
    console.log('req.body', req.body);
    products.push(req.body)
    res.send(products)
})


router.get('/mobile', (req, res) =>{
    res.send('all mobile product list');
})


router.get('/cloth', (req, res) =>{
    res.send('cloths list');
})

// module.exports = {router}//multiple things from one file then use this code
module.exports = router
*/

//MVC ke bare me padha routes banae ke baad
//Iske baad controller aur model ka file banaya
// <======================END: Lec12March2-Introducing routes and Router, middleware in express,mvc architecture==========>



//
// <====================Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>
/*
const express = require('express');

const router = express.Router();

const {getAllProducts, createProduct} = require('../controllers/productController')

//http://localhost/8000/product/
// router.get('/', (req, res) => {//get:read
//     res.send(products)
// })
// router.post('/', (req, res) => {//post:create
//     products.push(req.body)
//     res.send(products)
// })

router.route('/')
// ab is route ko controllers ke productcontroller me use kar rahe ha lec13 yaha se start kiya
.get(getAllProducts)//read ka logic kaam kar raha ha
.post(createProduct)//write/create ka logic kaam kar raha ha

router.get('/mobile', (req, res) =>{
    res.send('all mobile product list');
})

router.get('/cloth', (req, res) =>{
    res.send('cloths list');
})



module.exports = router
*/

//
/*
const express = require('express');

const router = express.Router();

const {getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController')

// router.get('/', (req, res) => {//get:read
//     res.send(products)
// })
// router.post('/', (req, res) => {//post:create
//     products.push(req.body)
//     res.send(products)
// })

router.route('/')
// ab is route ko controllers ke productcontroller me use kar rahe ha lec13 yaha se start kiya
.get(getAllProducts)
.post(createProduct)

// abhi tak hamara data lost ho raha  tha par hume isko save bhi karna ha
router.route('/:id')//product ko update karne ke liye id use kiya as param
.patch(updateProduct)//to update product: pass id as params
.delete(deleteProduct)

// module.exports = {router}//multiple things from one file then use this code
module.exports = router
*/

//
// const a = 10
// const b =20
// const name = 'Abhinav'

// const info  = {
//     name: 'Abhinav',
// }

// using Routes
// product route
// app.route('/product/:id')
// .get((req, res) => {
//     res.send('product page-- GET')
// })
// .post((req, res) => {
//     res.send('product page -- POST')
// })
// .patch((req, res) => {
//     res.send('product page -- PATCH')
// })
// <====================END Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>