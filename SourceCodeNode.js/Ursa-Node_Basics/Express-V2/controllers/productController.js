//Lec 13 ka codeExpress V2 ka routes ke ProductRoutes se start kiya
// <====================Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>
//This file have simple function which will handle req response structure an it will be used in our routes
//is file me Express V2 ka routes ka ProductRoutes ka req response ka code isme likhenge
//1)
/*
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



const getAllProducts = (req, res) => {
  res.send(products)
}

const createProduct = (req, res) => {
  console.log('req.body', req.body);
  products.push(req.body)
  res.send(products)
}

module.exports = {
  getAllProducts,
  createProduct,
};
*/


//
/*
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
  


const getAllProducts = (req, res) => {
    res.send(products)
}

const createProduct = (req, res) => {
    console.log('req.body', req.body);
    products.push(req.body)
    res.send(products)
}

//product ko update kar diya jaise price by patch (http://localhost:8000/products/3) at postman
//Lakin is  code me MVC nhi use kar rahe ha so we use other code maine ye code run karne ke baad models me
//  productModel file banaya aur data ka folder banya jisme json data ha
const updateProduct = (req, res) => {
    console.log("params in updateProduct", req.params);//req.params is always object
    const { id } = req.params;
    const productIndex = products.findIndex((el) =>el.id === Number(id));
    if(productIndex !== -1){
    products[productIndex] = { ...products[productIndex], ...req.body}
    res.send(products);
    }
}

// const updateProduct = (req, res) => {
//     console.log("params in updateProduct", req.params);//re.params is always object
//     const { id } = req.params;
//     const status = updateProductsInData(id, req.body);
//     if (status) {
//       res.send("product updated successfully!!");
//     } else {
//       res.send("something went wrong!!");
//     }
//   };
  
  const deleteProduct = (req, res) => {};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
  */


//ye Concept acche se kar lo  yaha se hi File ke under Product ko CRUD method apply kiya aur save Kiya
//Yaha se MVC pattern follow kiya data ko data folder me dala aur model se aur model ke productModel se operation kiya
// folder banane ke baad Model ke under ProductModel aur data ke under data dala
  //
//2)
/*
const {getProductData, addProductsInData} = require('../models/productModel')//import kiya 
//is product ko hata kar model ke under ek product model ka function banaya ab waha se product lenge

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

const updateProduct = (req, res) => {
    console.log("params in updateProduct", req.params);//re.params is always object
    const { id } = req.params;
    const productIndex = products.findIndex((el) =>el.id === Number(id));
    if(productIndex !== -1){
    products[productIndex] = { ...products[productIndex], ...req.body}
    res.send(products);
    }
}
  
  const deleteProduct = (req, res) => {};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
*/

//
/*
const {getProductData, addProductsInData,updateProductsInData} = require('../models/productModel')//import kiya 
//is product ko hata kar model ke under ek product model ka function banaya ab waha se product lenge

const getAllProducts = (req, res) => {
    const productList = getProductData()
    res.send(productList)
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



const updateProduct = (req, res) => {
    console.log("params in updateProduct", req.params);//re.params is always object
    const { id } = req.params;
    const status = updateProductsInData(id, req.body);
    if (status) {
      res.send("product updated successfully!!");
    } else {
      res.send("something went wrong!!");
    }
    //OR
    // const { id } = req.params;
    // const productIndex = products.findIndex((el) =>el.id === Number(id));
    // if(productIndex !== -1){
    // products[productIndex] = { ...products[productIndex], ...req.body}
    // res.send(products);
  };

 
  
  const deleteProduct = (req, res) => {};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
*/
  // <====================END: Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>
  