// <====================Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>
//productController aur product Routes aur index me CRUD method kiya iske baad MVC pattern follow kiya
//Yaha se mvc pattern follow kar rahe ha
//
/*
const fs = require("fs");

const getProductData = () => {
  const data = fs.readFileSync("./data/products.json", "utf-8");
  console.log("data from json file", data);
};

module.exports = { getProductData }; //isko productController me import kiya
*/


//
/*
const fs = require("fs");

const getProductData = () => {
  const data = fs.readFileSync("./data/products.json");//buffer format
  const products= JSON.parse(data);//convert it in obj format
  const{productList} = products;
  return productList
  // console.log('productList', productList)
};

module.exports = { getProductData }; 
*/

//
/*
//ab yaha se data ko read karna ha aur edit bhi karna ha apne file me
//sequence samjho is code ko samjho baki run nhi karega
const fs = require("fs");

const getProductData = () => {
  //read file
  const data = fs.readFileSync("./data/products.json");//buffer format
//convert to javaScript obj to operate on 
  const products= JSON.parse(data);
  const{productList} = products;
  return productList
};

//ye sequence me code likhna ha 
const addProductsInData=()=>{
  //read file
  //add product in the array
  //save the array in the file again
}
module.exports = { getProductData };
*/

//
//ye Concept acche se kar lo  yaha se hi File ke under Product ko CRUD method apply kiya aur save Kiya
/*
const fs = require("fs");

const readAndParseDataFromFile = () => {
  // read file
  const data = fs.readFileSync("./data/products.json");
  //   convert to javascript obj to operate on
  const products = JSON.parse(data);
  return products;
};

//yaha pe productList me se product nikal liya
const getProductData = () => {
  //read file
  const { productList } = readAndParseDataFromFile();
  return productList;
};

//ye sequence me code likhna ha
const addProductsInData = (product) => {
  //read file and parse data
  const productObj = readAndParseDataFromFile(); //product mila
  console.log("product from file", product);
  //add product in the array
  //   const updatedProductList = [...product.productList, prd]//seedha push kar liya neeche
  // product.productList = updatedProductList//seedha push kar liya neeche

  productObj.productList.push(product);

  //save the array in the file again
  //sync me path, content aur try catch hota ha
  try{
    fs.writeFileSync('./data/products.json', JSON.stringify(productObj, '', 3));//yaha tak hum data ko javascript obj form me read kar rahe the par hume ab save JSON me karna
    return true;
}catch(e){
  console.log(e.message);
  return false;
}
};
module.exports = { getProductData, addProductsInData};
*/


//
/*
const fs = require("fs");

const readAndParseDataFromFile = () => {
  // read file
  const data = fs.readFileSync("./data/products.json");
  //   convert to javascript obj to operate on
  const products = JSON.parse(data);
  return products;
};

//code repeat ho raha tha read aur write isliye isko ek function me daal diya
const writeDataInFile=(productObj)=>{
  try{
    fs.writeFileSync('./data/products.json', JSON.stringify(productObj, '', 3));//yaha tak hum data ko javascript obj form me read kar rahe the par hume ab save JSON me karna
    return true;
}catch(e){
  console.log(e.message);
  return false;
}
}

//yaha pe productList me se product nikal liya
const getProductData = () => {
  //read file
  const { productList } = readAndParseDataFromFile();
  return productList;
};

//ye sequence me code likhna ha
const addProductsInData = (product) => {
  //read file and parse data
  const productObj = readAndParseDataFromFile(); //product mila
  console.log("product from file", product);
  //add product in the array
  //   const updatedProductList = [...product.productList, prd]//seedha push kar liya neeche
  // product.productList = updatedProductList//seedha push kar liya neeche

  productObj.productList.push(product);
  writeDataInFile(productObj);
};

//updateProducts ko simple way me bhi kiya ha neeche wale code me
const updateProductsInData = (id, updateData) => {
  const productObj = readAndParseDataFromFile();
  const {productList:productArr } = productObj
  const productIndex = productArr.findIndex((el) => el.id === Number(id));
  if (productIndex !== -1) {
      productArr[productIndex] = { ...productArr[productIndex], ...updateData};
  }
      productObj.productList = productArr;
      writeDataInFile(productObj);
  }

  module.exports = { getProductData, addProductsInData, updateProductsInData};
*/


//
/*
const fs = require("fs");

const readAndParseDataFromFile = () => {
  // read file
  const data = fs.readFileSync("./data/products.json");
  //   convert to javascript obj to operate on
  const products = JSON.parse(data);
  return products;
};

//code repeat ho raha tha read aur write isliye isko ek function me daal diya
const writeDataInFile=(productObj)=>{
  try{
    fs.writeFileSync('./data/products.json', JSON.stringify(productObj, '', 3));//yaha tak hum data ko javascript obj form me read kar rahe the par hume ab save JSON me karna
    return true;
}catch(e){
  console.log(e.message);
  return false;
}
}

//yaha pe productList me se product nikal liya
const getProductData = () => {
  //read file
  const { productList } = readAndParseDataFromFile();
  return productList;
};

//ye sequence me code likhna ha
const addProductsInData = (product) => {
  //read file and parse data
  const productObj = readAndParseDataFromFile(); //product mila
  console.log("product from file", product);
  //add product in the array
  //   const updatedProductList = [...product.productList, prd]//seedha push kar liya neeche
  // product.productList = updatedProductList//seedha push kar liya neeche

  productObj.productList.push(product);
  return writeDataInFile(productObj);
};


//to update object with updated array
const updateProductsInData = (id, updateData) => {
  const productObj = readAndParseDataFromFile();

  const index = productObj.productList.findIndex((el)=>el.id===Number(id));
  productObj.productList[index]={
    ...productObj.productList[index],
    ...updateData,
  };
    
    return writeDataInFile(productObj);
      
  }

  module.exports = { getProductData, addProductsInData, updateProductsInData};
*/
// <====================END: Lec13March3-Adding Controllers. Adding Models, storing data in files via model==========>