//<===============Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
/*
const {Router} = require('express');
const router = Router()

const { createUser } = require('../controllers/userController');


router.post('/', createUser);

module.exports = router;
*/

//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>

//<===============Lec22March17:Registering User, Hashing Password by using bcrypt, Authenticating Users, Json=============>
/*
const {Router} = require('express');
const { createUser, loginUser, getProfile} = require('../controllers/userController');
const router = Router()


router.post('/signup', createUser);//http://localhost:6800/user/signup
router.post('/login', loginUser);
router.get('/profile', getProfile);


module.exports = router;
*/

//<===============End of Lec22March17:Registering User, Hashing Password by using bcrypt, Authenticating Users, Json=============>

//<===============Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>
/*
const {Router} = require('express');
const { createUser, loginUser, getProfile, getBatchName} = require('../controllers/userController');
const router = Router()


router.post('/signup', createUser);//http://localhost:6800/user/signup
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.get("/batch", getBatchName)

module.exports = router;
*/

//
//Auth Ka concept ha ye
/*
const {Router} = require('express');
const { createUser, loginUser, getProfile, getBatchName} = require('../controllers/userController');
const {auth} = require('../middleware/authMiddleware')

const router = Router()


router.post('/signup', createUser);//http://localhost:6800/user/signup
router.post('/login', loginUser);
router.get('/profile', auth, getProfile);
router.get("/batch", getBatchName)

module.exports = router;
*/

/*
const {Router} = require('express');
const { createUser, loginUser, getProfile, getBatchName, getAllUsers} = require('../controllers/userController');
const {auth} = require('../middleware/authMiddleware')

const router = Router()


router.post('/signup', createUser);//http://localhost:6800/user/signup
router.post('/login', loginUser);
router.get('/profile', auth, getProfile);
router.get("/batch", auth, getBatchName);
router.get('/allUsers', auth, getAllUsers)

module.exports = router;
*/


/*
const { Router } = require("express");
const {
  createUser,
  loginUser,
  getProfile,
  getBatchName,
  getAllUsers,
} = require("../controllers/userController");
const { auth, roleBasedAuthrisation } = require("../middleware/authMiddleware");

const router = Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/profile",auth, getProfile); //auth lagaya kyoki login me authenication check karna ha
// router.get("/batch", getBatchName); //just want to check
router.get("/batch", auth, getBatchName); //just want to check
router.get("/allusers", auth, roleBasedAuthrisation, getAllUsers);

module.exports = router;
*/
//<===============END: Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments============>


// <======================Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>
const { Router } = require("express");
const {
  createUser,
  loginUser,
  getProfile,
  getBatchName,
  getAllUsers,
} = require("../controllers/userController");
const { auth, roleBasedAuthrisation } = require("../middleware/authMiddleware");

const router = Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/profile",auth, getProfile); //auth lagaya kyoki login me authenication check karna ha
// router.get("/batch", getBatchName); //just want to check
router.get("/batch", auth, getBatchName); //just want to check
router.get("/allusers", auth, roleBasedAuthrisation, getAllUsers);

module.exports = router;
