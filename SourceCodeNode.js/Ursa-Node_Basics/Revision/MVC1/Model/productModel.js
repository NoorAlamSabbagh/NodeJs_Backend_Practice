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