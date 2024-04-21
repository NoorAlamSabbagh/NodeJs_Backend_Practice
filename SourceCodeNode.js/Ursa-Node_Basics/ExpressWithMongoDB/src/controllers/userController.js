//<========================Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>
/*
const getAllUsers = (req, res) => {
    res.send('User List')
}
module.exports = {
    getAllUsers
}
*/
//<========================END: Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>

//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
/*
const getAllUsers = (req, res) => {
    res.send('User List')
}

const createUser = (req, res) => {
    //create Operation
    console.log("create User", req.body);
    res.send("user created")
}
module.exports = {
    getAllUsers, createUser
}
*/

//
//Write kiya yaha aur mere mongodb me save hua
/*
const User = require('../models/userModel')
const getAllUsers = (req, res) => {
    res.send('User List')
}

const createUser = (req, res) => {
    //create Operation
    console.log("create User", req.body);
    //ye promise written karega(promise ko handle karne ka tariqa .then ya async await use karo)
    User.create(req.body)
    .then((data)=>{
        console.log('data', data);
        res.send("user created")
    })
    .catch((error)=>{
        console.log('Error Occured', error);
        res.send('Something went wrong')
    })
}
module.exports = {
    getAllUsers, createUser
}
*/

//
//write kar liya upar wale code me ab read karunga jo data maine write kiya ha apne mongodb me
/*
const User = require("../models/userModel");

// http://localhost:7500/user/all
const getAllUsers = (req, res) => {
  // res.send('User List')
  //Read Operation
  console.log("getting all users");
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

//Isko req.params se get kiya
// http://localhost:7500/user/alam@gmail.com
const getUserByEmail = (req, res) => {
  console.log("params", req.params);
  const { email } = req.params
  User.find({email})
  .then((user)=>{
    console.log('user found')
    res.send(user)
  })
  .catch((err)=>{
    console.log(err)
  })
};

//Isko req.querry se get kiya
// http://localhost:7500/user?age=25
const getUserByAge = (req, res) => {
    // console.log('params', req.params);
    console.log('params', req.query);
    //returns an array of documents matching the condition
    const {age} = req.params
    User.find({age: req.query.age})
    .then((user)=>{
        console.log('user found')
        res.send(user)
      })
      .catch((err)=>{
        console.log(err)
      })
}


const createUser = (req, res) => {
  //create Operation
  console.log("create User", req.body);
  //ye promise written karega(promise ko handle karne ka tariqa .then ya async await use karo)
  User.create(req.body)
    .then((data) => {
      console.log("data", data);
      res.send("user created");
    })
    .catch((error) => {
      console.log("Error Occured", error);
      res.send("Something went wrong");
    });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserByAge
};
*/

//
/*
const User = require("../models/userModel");

// http://localhost:7500/user/all
const getAllUsers = (req, res) => {
  // res.send('User List')
  //Read Operation
  console.log("getting all users");
  // return an array of all the documents
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

//Isko req.params se get kiya
//http://localhost:7500/user/alam@gmail.com
const getUserByEmail = (req, res) => {
  console.log("params", req.params);
  const { email } = req.params
  //returns an array
  User.find({email})
  .then((user)=>{
    console.log('user found')
    res.send(user)
  })
  .catch((err)=>{
    console.log(err)
  })

//OR
//Returns one Single documents
// in case of multiple match return first document
// User.findOne({email})
// .then((user)=>{
//         console.log('user found')
//         res.send(user)
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
};

//Isko req.querry se get kiya
// http://localhost:7500/user?age=24
const getUserByAge = (req, res) => {
    // console.log('params', req.params);
    console.log('params', req.query);
    //returns an array of documents matching the condition
    const {age} = req.params
    // User.find({age: req.query.age})
    // .then((user)=>{
    //     console.log('user found')
    //     res.send(user)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })

//OR
//Returns one Single documents agar multiple ha to jo sabse phele ha usko return karega
//
User.findOne({age: req.query.age})
.then((user)=>{
    console.log('user found')
    res.send(user)
  })
  .catch((err)=>{
    console.log(err)
  })
}


const createUser = (req, res) => {
  //create Operation
  console.log("create User", req.body);
  //ye promise written karega(promise ko handle karne ka tariqa .then ya async await use karo)
  User.create(req.body)
    .then((data) => {
      console.log("data", data);
      res.send("user created");
    })
    .catch((error) => {
      console.log("Error Occured", error);
      res.send("Something went wrong");
    });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserByAge
};
*/

//
/*
const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  // res.send('User List')
  //Read Operation
  console.log("getting all users");
  // return an array of all the documents
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

//Isko req.params se get kiya
// http://localhost:7500/user/noor@gmail.com
const getUserByEmail = (req, res) => {
  console.log("params", req.params);
  const { email } = req.params
  //returns an array
  // User.find({email})
  User.findOne({email, age: 24})
  .then((user)=>{
    console.log('user found')
    res.send(user)
  })
  .catch((err)=>{
    console.log(err)
  })

//OR
//Returns one Single documents
// in case of multiple match return first document
// User.findOne({email})
// .then((user)=>{
//         console.log('user found')
//         res.send(user)
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
};

//Isko req.querry se get kiya
// http://localhost:7500/user?age=24
const getUserByAge = (req, res) => {
    // console.log('params', req.params);
    console.log('params', req.query);
    //returns an array of documents matching the condition
    const {age} = req.params
    // User.find({age: req.query.age})
    // .then((user)=>{
    //     console.log('user found')
    //     res.send(user)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })

//OR
//Returns one Single documents agar multiple ha to jo sabse phele ha usko return karega
//
User.findOne({age: req.query.age})
.then((user)=>{
    console.log('user found')
    res.send(user)
  })
  .catch((err)=>{
    console.log(err)
  })
}


const createUser = (req, res) => {
  //create Operation
  console.log("create User", req.body);
  //ye promise written karega(promise ko handle karne ka tariqa .then ya async await use karo)
  User.create(req.body)
    .then((data) => {
      console.log("data", data);
      res.send("user created");
    })
    .catch((error) => {
      console.log("Error Occured", error);
      res.send("Something went wrong");
    });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserByAge
};

*/
//

/*
const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  // res.send('User List')
  //Read Operation
  console.log("getting all users");
  // return an array of all the documents
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

//Isko req.params se get kiya
// http://localhost:7500/user/noor@gmail.com
const getUserByEmail = (req, res) => {
  console.log("params", req.params);
  const { email } = req.params
  // find returns an array
  // User.find({email})
  User.findOne({email, age: 24})
  .then((user)=>{
    console.log('user found')
    res.send(user)
  })
  .catch((err)=>{
    console.log(err)
  })

//OR
//Returns one Single documents
// in case of multiple match return first document
//findOne return a document
// User.findOne({email})
// .then((user)=>{
//         console.log('user found')
//         res.send(user)
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
};

//Isko req.querry se get kiya
// http://localhost:7500/user?age=25
const getUserByAge = (req, res) => {
    // console.log('params', req.params);
    console.log('params', req.query);
    //returns an array of documents matching the condition
    // const {age} = req.params
    // User.find({age: req.query.age})
    // .then((user)=>{
    //     console.log('user found')
    //     res.send(user)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })

//OR
//Returns one Single documents agar multiple ha to jo sabse phele ha usko return karega
//
// http://localhost:7500/user?age=25
// User.findOne({age: req.query.age})
// .then((user)=>{
//     console.log('user found')
//     res.send(user)
//   })
//   .catch((err)=>{
//     console.log(err)
//   })

//to select some specific fields from doc
// User.find({age: req.query.age}).select('username')//to select specific 
// User.find({age: req.query.age}).select('username email')//to select specific 
// .then((user)=>{
//   console.log('user found')
//   res.send(user)
// })
//OR dusra method
// User.find({age: req.query.age}).select({username:1, email:1})//to select specific 
// .then((user)=>{
//   console.log('user found')
//   res.send(user)
// })
//OR
// aur agar mujhe srif ek ko chod ko sabhi info chahiye to
// User.find({age: req.query.age}).select({username: 1})//to add specific 
// User.find({age: req.query.age}).select({username: 0})//to remove specific 
// User.find({age: req.query.age}).select(['-username'])//to remove specific 
// .then((user)=>{
//   console.log('user found')
//   res.send(user)
// })

//agar mujhe bs kuch 2 ya 3 hi chahiye tab limit use karenge matlab ki age same ha sabhi ka par mujhe ek do ka hi doc chahiye
User.find({age: req.query.age}).select({username:1, age:1}).limit(3)//to get limited doc  
.then((user)=>{
  console.log('user found')
  res.send(user)
})
}


const createUser = (req, res) => {
  //create Operation
  console.log("create User", req.body);
  //ye promise written karega(promise ko handle karne ka tariqa .then ya async await use karo)
  User.create(req.body)
    .then((data) => {
      console.log("data", data);
      // res.send("user created");
      res.send(data);
    })
    .catch((error) => {
      console.log("Error Occured", error);
      res.send("Something went wrong");
    });
};

module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserByAge
};
*/
//<========================End Lec15March6=================================================================>

//<====================Lec16March9: Comparision Query Operators, Logical Query Operators===================>
/*

const User = require('../models/userModel');
const Player = require('../models/PlayerModel');


// http://localhost:7500/user/all
const getAllUsers = (req, res) => {
    // Read Operation
    console.log('getting all users');
    // return an array of all the documents
    User.find()
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send({err})
    })
}

// http://localhost:7500/user/noor@gmail.com
const getUserByEmail = (req, res) => {
    console.log('params',req.params); 
    const {email} = req.params
    // returns an array 
    User.find({email, age: 24})
    .then((user) => {
        console.log('user found');
        res.send(user)
    })

    //returns a document
    // User.findOne({email})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })
}


// http://localhost:7500/user?age=24
const getUserByAge = (req, res) => {
    console.log('params',req.query); 
    const {age} = req.params
    // returns an array of documents matching the conditions
    // User.find({age:req.query.age})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

     // return one single document
    // in case of multiple match return first document
    // User.findOne({age: req.query.age })
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })



     // to select some specific fields from doc
    // User.find({age: req.query.age}).select('username email')
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })

     // User.find({age: req.query.age}).select({username: 1})
    // User.find({age: req.query.age}).select(['-username'])

    // to remove some specific fields

    // User.find({age: req.query.age}).select({username: 0})
    // .then((user) => {
    //     console.log('user found');
    //     res.send(user)
    // })


     // limit the no of document returned
     //Method chaining
    //  User.find({age: req.query.age})
    //  .select({username: 1, age: 1})
    //  .limit(2)
    //  .then((user) => {
    //      console.log('user found');
    //      res.send(user)
    //  })

    //
    // User.find()
    //  .limit(3)
    //  .then((user) => {
    //      console.log('user found');
    //      res.send(user)
    //  })

    //skips the number of values passed as arguments
    // User.find()
    //  .skip(3)
    //  .then((user) => {
    //      console.log('user found');
    //      res.send(user)
    //  })

    //
    //This code will show number of documents count
    // User.find()
    // // .count()
    // .countDocuments()
    // .then((userCount) => {
    //     console.log('user found');
    //     res.send({count: userCount})
    // })
 
    //
    //  User.find({age: req.query.age}).select({username: 1, age: 1}).limit(4)
    //  .then((user) => {
    //      console.log('user found');
    //      res.send(user)
    //  })
 
 }

//
const createUser = (req, res) => {
    //create operation
    console.log('create user', req.body)
     // this returns a promise(promise ko handle karne ke 2 tarike .then dusra aync await)
     User.create(req.body)
     .then((data) => {
         console.log('data', data);
        //  res.send('user created');
         res.send(data);
     })
     .catch((err) => {
         console.log('error occured', err);
         res.send('Something went wrong')
     })
}


//Model me PlayerModel ka schema banaya aur isko import kiya is file me 
//fir iska code likha aur Mongodb me player naam ka ek json file ban gaya
const createMultiplePlayers = (req, res) => {
  console.log('create user', req.body);
  //this will create multiple players in one go
  //req.body should be an array
  Player.insertMany(req.body)
  .then((playerData)=>{
    console.log('playerData', playerData);
    res.send('players created successfully')
  })
}


const getPlayers = (req, res) => {
  // Player.find()
  // .then((player) => {
  //   res.send(player)
  // })

  // Player.find({score: 115})
  Player.find({name: "Virat Kholi"})
  .then((player) => {
    res.send(player)
  })

  

}
module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail,
    getUserByAge,
    createMultiplePlayers,
    getPlayers
}
*/

//

const User = require("../models/userModel");
const Player = require("../models/PlayerModel");

// http://localhost:7500/user/all
const getAllUsers = (req, res) => {
  // Read Operation
  console.log("getting all users");
  // return an array of all the documents
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ err });
    });
};

// http://localhost:7500/user/noor@gmail.com
const getUserByEmail = (req, res) => {
  console.log("params", req.params);
  const { email } = req.params;
  // returns an array
  User.find({ email, age: 24 }).then((user) => {
    console.log("user found");
    res.send(user);
  });

  //returns a document
  // User.findOne({email})
  // .then((user) => {
  //     console.log('user found');
  //     res.send(user)
  // })
};

// http://localhost:7500/user?age=24
const getUserByAge = (req, res) => {
  console.log("params", req.query);
  // const {age} = req.params
  // returns an array of documents matching the conditions
  // User.find({age:req.query.age})
  // .then((user) => {
  //     console.log('user found');
  //     res.send(user)
  // })

  // return one single document
  // in case of multiple match return first document
  // User.findOne({age: req.query.age })
  // .then((user) => {
  //     console.log('user found');
  //     res.send(user)
  // })

  // to select some specific fields from doc
  // User.find({age: req.query.age}).select('username email')
  // .then((user) => {
  //     console.log('user found');
  //     res.send(user)
  // })

  // User.find({age: req.query.age}).select({username: 1})
  // User.find({age: req.query.age}).select(['-username'])

  // to remove some specific fields

  // User.find({age: req.query.age}).select({username: 0})
  // .then((user) => {
  //     console.log('user found');
  //     res.send(user)
  // })

  // limit the no of document returned
  //Method chaining
  //  User.find({age: req.query.age})
  //  .select({username: 1, age: 1})
  //  .limit(2)
  //  .then((user) => {
  //      console.log('user found');
  //      res.send(user)
  //  })

  //
  // User.find()
  //  .limit(3)
  //  .then((user) => {
  //      console.log('user found');
  //      res.send(user)
  //  })

  //skips the number of values passed as arguments
  // User.find()
  //  .skip(3)
  //  .then((user) => {
  //      console.log('user found');
  //      res.send(user)
  //  })

  //no of documents count
  // User.find()
  //   // .count()
  //   .countDocuments()
  //   .then((userCount) => {
  //     console.log("user found");
  //     res.send({ count: userCount });
  //   });

   User.find({age: req.query.age}).select({username: 1, age: 1}).limit(4)
   .then((user) => {
       console.log('user found');
       res.send(user)
   })
};

//
const createUser = (req, res) => {
  //create operation
  console.log("create user", req.body);
  // this returns a promise(promise ko handle karne ke 2 tarike .then dusra aync await)
  User.create(req.body)
    .then((data) => {
      console.log("data", data);
      //  res.send('user created');
      res.send(data);
    })
    .catch((err) => {
      console.log("error occured", err);
      res.send("Something went wrong");
    });
};

//Model me PlayerModel ka schema banaya aur isko import kiya is file me
//fir iska code likha aur Mongodb me player naam ka ek json file ban gaya
const createMultiplePlayers = (req, res) => {
  console.log("create user", req.body);
  //this will create multiple players in one go
  //req.body should be an array
  Player.insertMany(req.body).then((playerData) => {
    console.log("playerData", playerData);
    res.send("players created successfully");
  });
};

// http://localhost:7500/user/player
const getPlayers = (req, res) => {
  // Player.find()
  // .then((player) => {
  //   res.send(player)
  // })

  //1)
  // Player.find({score: 115})
  // .then((player) => {
  //   res.send(player)
  // })

  //2)
  // Player.find({score: {$gt:50}}) //$gt:greater than>50
  // .then((player)=>{
  //     res.send(player)
  // })


  //3)
  //  Player.find({score: {$gte:50}}) //$gt:greater than >=50
  //     .then((player)=>{
  //         res.send(player)
  //     })

  //4)
  // Player.find({score: {$lt:50}}) //$lt:less than<50
  // .then((player)=>{
  //     res.send(player)
  // })

  //5)
  // Player.find({score: {$lte:50}}) //$gt:greater than <=50
  // .then((player)=>{
  //     res.send(player)
  // })

  //6)
  // Player.find({score: {$ne: 50}})
  // .then((player) => {
  //     res.send(player)
  // })

  // 7)
  // Player.find({score: {$in: [6, 46, 62]}})
  // .then((player) => {
  //     res.send(player)
  // })

  //8)
  // Player.find({score: {$nin: [50]}})
  // .then((player) => {
  //     res.send(player)
  // })

  //9)
  // logical operators ---> AND, OR, NOR, NOT
  // Player.find({ $and: [{ team: "Australia" }, { score: 15 }] }).then(
  //   (player) => {
  //     res.send(player);
  //   }
  // );

  //10)
  // Player.find({$or: [{team: 'Australia'}, {score: 50}]})
  // .then((player) => {
  //     res.send(player)
  // })


  // neglect cases(whether the team India or Australia)
//11)
  // Player.find({team: {$regex: 'Aus|India'}})
  // Player.find({team: {$regex: 'Aus|NewzLand', $options: 'i'}})//optinos typecast se bachne ke liye use kiya ha
  // .then((player) => {
  //     res.send(player)
  // })

  // Player.find({team: {$regex: /dia/, $options: 'i'}})//include Tra
  // Player.find({name: {$regex: /^M/, $options: 'i'}})//for start with ^ R
  // Player.find({team: {$regex: /a$/, $options: 'i'}})//for end with  $a
  // .then((player) => {
  //     res.send(player)
  // })

  // Player.find({name: {$regex: /^R/, $options: 'i'}})
  // .then((player) => {
  //     res.send(player)
  // })

  // ends with sharma
  // Player.find({name: {$regex: /Sharma$/, $options: 'i'}})
  // .then((player) => {
  //     res.send(player)
  // })
  
};

// http://localhost:7500/user/player/64831842d7de0a84a6c33fe5
const updatePlayer = (req, res) => {
  console.log('id', req.params.id);
    // needs id of the document
    // returns the document data back
    // Player.findByIdAndUpdate(req.params.id, {$set: req.body})
    // .then((data) => {
    //     console.log(data);//it will show older data that have changed using id
    // res.send('player updated successfully')   
    // })

    // http://localhost:7500/user/player/6482351d44549d0e0f1456e9
    Player.updateOne({name: 'Arron Finch'}, req.body)
    .then((info) => {
        console.log('info', info);
        res.send('updated successfully')
    })

}


module.exports = {
  getAllUsers,
  createUser,
  getUserByEmail,
  getUserByAge,
  createMultiplePlayers,
  getPlayers,
  updatePlayer
};




  

