const express = require("express");
const router =  express.Router();

const {getAllProducts, createProduct} = require("../controller/productController");

router.route('/')
.get(getAllProducts)
.post(createProduct)

router.get('/mobile', (req, res) =>{
    res.send('all mobile product list');
})
module.exports = router;