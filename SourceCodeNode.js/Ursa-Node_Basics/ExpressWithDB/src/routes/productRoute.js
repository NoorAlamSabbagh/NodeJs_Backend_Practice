//<=======================Lec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
// Time session 1:18 pe start kiya ise ek naya productModel Banaya
const express = require('express');
const { getProducts, createProducts } = require('../controllers/productController');

const router = express.Router()

router.get("/", getProducts)
router.post("/", createProducts)

module.exports = router
//<===============End ofLec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>