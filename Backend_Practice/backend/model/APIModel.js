/*
const fs = require("fs");
const { updateAPI } = require("../controller/ApiController");

const readAndParseDataFromFile = () => {
  //read file
  const data = fs.readFileSync("./data/API.json");
  //convert to javascript object to operate
  const API = JSON.parse(data); //buffer format se object format me kiya
  return API;
};

const getAPIData = () => {
  const { APIList } = readAndParseDataFromFile(); 
  return APIList;
  // console.log('APIList', APIList)
};

const addDataInAPI = (data) => {
  //read file
  const APIObject = readAndParseDataFromFile(); 
  console.log('data from API', APIObject)

  //add the product in the array
  // const updatedAPIList =[...API.APIList, api];
  // API.APIList = updatedAPIList;
  //OR
  APIObject.APIList.push(data);

  //save the array in the file again
  try{
    fs.writeFileSync('./data/API.json',JSON.stringify(APIObject, '', 3))
    return true
  }catch(e){
    console.log(e.message);
    return false;
  }

};

const updateDataInAPI = (id, updateData)=>{
 const APIObject = readAndParseDataFromFile();
 const {APIList} = APIObject;
 const APIIndex = APIArr.findIndex((el)=>el.id === Number(id));
 if(APIIndex !== 1){
  APIArr[APIIndex] = { ...APIArr[APIIndex], ...updateData};
 }
}

module.exports = { getAPIData, addDataInAPI, updateDataInAPI };
*/


//
//Read aur write ka code repeated lag raha ha to use ek function me daal denge
const fs = require("fs");
const { updateAPI } = require("../controller/ApiController");

const readAndParseDataFromFile = () => {
  //read file
  const data = fs.readFileSync("./data/API.json");
  //convert to javascript object to operate
  const API = JSON.parse(data); //buffer format se object format me kiya
  return API;
};

const writeDataInFile = (APIObject) => {
  try{
    fs.writeFileSync('./data/API.json',JSON.stringify(APIObject, '', 3))
    return true
  }catch(e){
    console.log(e.message);
    return false;
  }
}

const getAPIData = () => {
  const { APIList } = readAndParseDataFromFile(); 
  return APIList;
  // console.log('APIList', APIList)
};

const addDataInAPI = (data) => {
  //read file
  const APIObject = readAndParseDataFromFile(); 
  console.log('data from API', APIObject)

  //add the product in the array
  // const updatedAPIList =[...API.APIList, api];
  // API.APIList = updatedAPIList;
  //OR
  APIObject.APIList.push(data);

  //save the array in the file again
  writeDataInFile(APIObject);

};

const updateDataInAPI = (id, updateData)=>{
 const APIObject = readAndParseDataFromFile();
//  const {APIList: APIArr} = APIObject;
//  const APIIndex = APIArr.findIndex((el)=>el.id === Number(id));
//  if(APIIndex !== 1){
//   APIArr[APIIndex] = { ...APIArr[APIIndex], ...updateData};
//  }
// APIObject.APIList = APIArr;
// OR

const index = APIObject.APIList.findIndex((el) => el.id === Number(id));
APIObject.APIList[index] = { ...APIObject.APIList[index], ...updateAPI}

 writeDataInFile(APIObject)
}

module.exports = { getAPIData, addDataInAPI, updateDataInAPI };