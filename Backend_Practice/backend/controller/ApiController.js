const {getAPIData, addDataInAPI} = require('../model/APIModel');

const getAllAPI = (req, res) => {
  const APIList = getAPIData();
  res.send(APIList);
};

const createAllAPI = (req, res) => {
  console.log("req.body", req.body);
  const status = addDataInAPI(req.body);
  if(status){
    res.send('product created successfully!!');
  }else{
    res.send('something went wrong');
 }
};






const updateAPI = (req, res) => {
  console.log("params in updateAPI", req.params); //string
  const { id } = req.params;
  const APIIndex = APIList.findIndex((el) => el.id === Number(id));
  if (APIIndex !== -1) {
    APIList[APIIndex] = { ...APIList[APIIndex], ...req.body }; //phele get kiya fir usko spread kiya aur update kiya aur updtated cheez req.body se lia
    res.send(APIList);
  }
};

// const deleteAPI = (req, res) => {};

module.exports = { getAllAPI, createAllAPI, updateAPI};
