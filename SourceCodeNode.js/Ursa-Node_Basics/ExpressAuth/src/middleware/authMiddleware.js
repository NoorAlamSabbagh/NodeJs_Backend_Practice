//<===============Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>
/*
const auth = (req, res, next)=> {
console.log('from Auth middleware');
next()
}

module.exports = {auth}
*/

//
/*
//user verification ka kaam kiya ek login ke time kiya tha
const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
const {authorization} = req.headers;

if(authorization){
            const authData = authorization.split(" ");
            const token = authData[1];
            try{
                const userInfo = jwt.verify(token, process.env.SECRET_KEY)
                req.userId = userInfo.id
               next();
        } catch(err){
            console.log('inside error')
            res.send(err)
        }
        }else{
        res.send('you have to login first !!')
        }
    }

    module.exports = {auth}
  */  


// Is code me authorization ka code likha
/*
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const authData = authorization.split(" ");
    const token = authData[1];
    try {
      const userInfo = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = userInfo.id;
      next();
    } catch (err) {
      console.log("inside error");
      res.send(err);
    }
  } else {
    res.json({
        err: 'you have to login first!!'
      });
  }
};


//
const roleBasedAuthrisation = (req, res, next) => {
    console.log('from roleBaseAuthrisation')

    UserModel.findById(req.userId)
    .then((user) => {
        console.log('user', user);
        if(user.role === 'admin'){
            next();
        }else{
            res.send('you are not authorised to view this')
        }
    })
    .catch((err) => {
        res.send(err)
    })
};

module.exports = {auth, roleBasedAuthrisation}
*/
//<===============END: Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>


// <======================Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    const authData = authorization.split(" ");
    const token = authData[1];
    try {
      const userInfo = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = userInfo.id;
      next();
    } catch (err) {
      console.log("inside error");
      res.send(err);
    }
  } else {
    res.json({
        err: 'you have to login first!!'
      });
  }
};


//
const roleBasedAuthrisation = (req, res, next) => {
    console.log('from roleBaseAuthrisation')

    UserModel.findById(req.userId)
    .then((user) => {
        console.log('user', user);
        if(user.role === 'admin'){
            next();
        }else{
            res.send('you are not authorised to view this')
        }
    })
    .catch((err) => {
        res.send(err)
    })
};

module.exports = {auth, roleBasedAuthrisation}
