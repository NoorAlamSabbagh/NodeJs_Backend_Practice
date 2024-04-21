const {getProductData, addProductsInData} = require("../Model/productModel");

const getAllProducts = (req, res) => {
    const productList = getProductData();
    res.send([productList]);
  }
  
  const createProduct = (req, res) => {
    console.log("req.body", req.body);
    const status = addProductsInData(req.body);
    if (status) {
      res.send("product created successfully!!");
    } else {
      res.send("something went wrong!!");
    }
  };

  module.exports = {getAllProducts, createProduct};