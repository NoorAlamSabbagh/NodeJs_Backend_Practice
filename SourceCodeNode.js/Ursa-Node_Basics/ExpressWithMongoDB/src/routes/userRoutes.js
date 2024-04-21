//<========================Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>
/*
const express = require('express');
const router = express.Router();

const {getAllUsers} = require('../controllers/userController')

//http://localhost:7500/user    //basePath
router.get('/', getAllUsers);
module.exports = router;
*/
//<========================END: Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>



//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
/*
const express = require('express');
const {getAllUsers, createUser, getUserByEmail, getUserByAge} = require('../controllers/userController')

const router = express.Router();

//http://localhost:7500/user    //basePath
router.get('/all', getAllUsers);
router.post('/',createUser);
router.get('/:email', getUserByEmail);
router.get('/', getUserByAge);



module.exports = router;
*/
//<========================End Lec15March6=============================>

//<====================Lec16March9: Comparision Query Operators, Logical Query Operators===================>
/*
const express = require('express');
const {getAllUsers, createUser, getUserByEmail, getUserByAge} = require('../controllers/userController')

const router = express.Router();

//http://localhost:7500/user    //basePath
router.get('/all', getAllUsers);
router.post('/',createUser);
router.get('/:email', getUserByEmail);
router.get('/', getUserByAge);

//player routes
router.post("/player", createMultiplePlayers);
router.get("/player", getPlayers);

module.exports = router;
*/


const express = require("express");
const {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserByAge,
  createMultiplePlayers,
  getPlayers,
  updatePlayer
} = require("../controllers/userController");

const router = express.Router();

//http://localhost:7500/user
router.get("/all", getAllUsers);
router.get("/", getUserByAge);
router.post("/", createUser); //ye tumhare usercontrollers se aa raha ha//ye slash default ha to kuch bhi pass mat karna
// router.get("/:email", getUserByEmail);//player routes ke liye commentoff kar diya kyoki email ko id le raha tha

//player routes
router.post("/player", createMultiplePlayers);
router.get("/player", getPlayers);
// router.patch("/player/:id", updatePlayer);//id ko acces karte ha through column:(params)

module.exports = router;

//<====================END: Lec16March9: Comparision Query Operators, Logical Query Operators===================>