//<======================Lec17March10-Introducing MVC Architecture=================================>
/*
const getUserList = (req, res) =>{
  res.send('User List')
}

module.exports = { getUserList}
*/

//<======================END: Lec17March10-Introducing MVC Architecture=================================>

//<======================Lec18March12-Better Folder Structure=================================>

const UserModel = require('../models/userModel');

// http://localhost/5800/user
const getUserList = (req, res) =>{
  // res.send('User List')
  UserModel.find()
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
    res.send(err)
  })
}

// http://localhost:5800/user/singleUser
const getUser = (req,res) => {
  // always return you a list
  // UserModel.find({name: 'Student5'})
  UserModel.find({email: 'student5@gmail.com'})
 .then((data) => {
   res.send(data)
 })
};

//Step1
const createUser = (req, res) =>{
  // get the data coming from client
  console.log('user data', req.body);
  UserModel.create(req.body)
  .then((data) => {
    console.log("data", data);
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  });
   // we have to create a user using this data in our DB
}

const getUserAddress = (req, res) =>{
  res.send('address of user')
}

const getUserOrders = (req, res) =>{
  res.send('orders of user')
}

module.exports = { getUserList, createUser, getUserAddress, getUserOrders, getUser}


//<======================End: Lec18March12=================================>

//<======================Lec19March14-Updating a document -update first Scale your Ecommerce data=================================>
/*
const UserModel = require("../models/userModel");

// http://localhost:5800/user
const getUserList = (req, res) => {
  // res.send('User List')
  UserModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

//query parameter
// http://localhost:5800/user/singleUser?age=25
const getUser = (req, res) => {
  // always return you a list
  //1)
  // console.log("query params", req.query);
  // UserModel.find({ age: Number(req.query.age) })
  // .then((data) => {
  //   res.send(data);
  // });

  //2)
  // http://localhost:5800/user/singleUser
  //json array
  // UserModel.find({email:'student5@gmail.com'})
  // .then((data) => {
  //   res.send(data)
  // })

  //3)
  // return the first match (json object)
  // UserModel.findOne({ age: 24, name: "Student11" })
  // .then((data) => {
  //   res.send(data);
  // });

  //4)
  // UserModel.findById('648b566343953e57da4d6a7e')
  // .then((data) => {
  //     res.send(data)
  // })

  //5)
  // // UserModel.find().select({name:0})
  // // UserModel.find().select({name:1,email:1})
  // // UserModel.find().select(['-name'])
  // // UserModel.find().select('name')
  // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //6)
  // UserModel
  // .find({age: 25})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //7)
  // >, <, >=, <=, !=, =, filter based on multiple values
  // UserModel
  // .find({age: {$gte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //8)
  // UserModel
  // .find({age: {$lte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //9)
  // UserModel
  // .find({age: {$in: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //10)
  // UserModel
  // .find({age: {$nin: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // 11)
  // UserModel
  // .find({age: {$ne: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //
  // and, or, nor, nand
  // 12)
  // UserModel.find({ $and: [{ age: 25 }, { name: "Student3" }] })
  //   .select({ name: 1, age: 1 })
  //   // UserModel.find().select({email:1})
  //   .then((data) => {
  //     res.send(data);
  //   });

  //13)
  // UserModel
  // .find({$or: [{age: 25}, {name: 'Student1'}]})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // 14)
  // UserModel
  // .find({$nor: [{age: 25}, {name: 'Student1'}]})
  // .countDocuments()
  // // UserModel.find().select({email:1})
  // .then((number) => {
  //   res.send({count: number})
  // })

  // 15)
  // UserModel
  // .find({$nor: [{age: 25}, {name: 'Student1'}]})
  // .select({name:1, age:1})
  // .limit(5)
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //16)
  // UserModel.find({ $nor: [{ age: 25 }, { name: "Student1" }] })
  //   .select({ name: 1, age: 1 })
  //   .skip(3)
  //   // UserModel.find().select({email:1})
  //   .then((data) => {
  //     res.send(data);
  //   });
};

//

//Step1
const createUser = (req, res) => {
  // get the data coming from client
  console.log("user data", req.body);
  // UserModel.create(req.body)
  //   .then((data) => {
  //     console.log("data", data);
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });

  // create for multiple user at once
  UserModel.insertMany(req.body)
    .then((data) => {
      console.log("data", data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  // we have to create a user using this data in our DB
  // res.send("creating user")
};

const getUserAddress = (req, res) => {
  res.send("address of user");
};

const getUserOrders = (req, res) => {
  res.send("orders of user");
};

const updateUser = (req, res) => {
  console.log("params", req.params);

  // 1)http://localhost:5800/user/648b666b4951cee4e0b19be0
  // UserModel.findByIdAndUpdate(req.params.id,
  // { $set: req.body },
  // {new: true})//used for getting updated data
  // .then((data) => {
  //   console.log("data", data);
  //   res.send(data);
  // });

  //2)http://localhost:5800/user/student13@gmail.com
  UserModel.updateOne({ email: req.params.email }, req.body, {
      upsert: true, // it will create the data if not found
    }).then((data) => {
      console.log("data", data);
      res.send(data);
    });

  //3)
  // http://localhost:5800/user/student7@gmail.com
  // UserModel.updateMany({ password: "12345" }, req.body).then((data) => {
  //   console.log(data);
  //   res.send(data);
  // });
};

module.exports = {
  getUserList,
  createUser,
  getUserAddress,
  getUserOrders,
  getUser,
  updateUser,
};
*/
//<======================End: Lec19March14=================================>

//<=======================Lec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
/*
const UserModel = require("../models/userModel");

const getUserList = (req, res) => {
  // res.send('User List')
  UserModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

//query parameter
// http://localhost:5800/user/singleUser?age=25
const getUser = (req, res) => {
  // always return you a list
  //1)
  // console.log("query params", req.query);
  // UserModel.find({ age: Number(req.query.age) })
  // .then((data) => {
  //   res.send(data);
  // });

  //2)
  //json array
  // UserModel.find({email:'student2@gmail.com'})
  // .then((data) => {
  //   res.send(data)
  // })

  //3)
  // return the first match (json object)
  // UserModel.findOne({ age: 25, name: "Student1" })
  // .then((data) => {
  //   res.send(data);
  // });

  //4)
  // UserModel.findById('648b566343953e57da4d6a7e')
  // .then((data) => {
  //     res.send(data)
  // })

  //5)
  // // UserModel.find().select({name:0})
  // // UserModel.find().select({name:1,email:1})
  // // UserModel.find().select(['-name'])
  // // UserModel.find().select('name')
  // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //6)
  // UserModel
  // .find({age: 25})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //7)
  // >, <, >=, <=, !=, =, filter based on multiple values
  // UserModel
  // .find({age: {$gte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //8)
  // UserModel
  // .find({age: {$lte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //9)
  // UserModel
  // .find({age: {$in: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //10)
  // UserModel
  // .find({age: {$nin: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // 11)
  // UserModel
  // .find({age: {$ne: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //
  // and, or, nor, nand
  // 12)
  // UserModel.find({ $and: [{ age: 25 }, { name: "Student3" }] })
  //   .select({ name: 1, age: 1 })
  //   // UserModel.find().select({email:1})
  //   .then((data) => {
  //     res.send(data);
  //   });

  //13)
  // UserModel
  // .find({$or: [{age: 25}, {name: 'Student1'}]})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // 14)
  // UserModel
  // .find({$nor: [{age: 25}, {name: 'Student1'}]})
  // .countDocuments()
  // // UserModel.find().select({email:1})
  // .then((number) => {
  //   res.send({count: number})
  // })

  // 15)
  // UserModel
  // .find({$nor: [{age: 25}, {name: 'Student1'}]})
  // .select({name:1, age:1})
  // .limit(5)
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  //16)
  // UserModel.find({ $nor: [{ age: 25 }, { name: "Student1" }] })
  //   .select({ name: 1, age: 1 })
  //   .skip(3)
  //   // UserModel.find().select({email:1})
  //   .then((data) => {
  //     res.send(data);
  //   });

  // 17)
  // Lec 20 ka code kiya yaha se
  // $options denote typecaste of letter like small and capital letter
  // http://localhost:5800/user/singleUser
  // UserModel.find({ email: { $regex: /^s/, $options: "i" } }) //start with ^ and $ end with
  // .then(
  //   (data) => {
  //     res.send(data);
  //   }
  // );

  // 18)
  // UserModel.find({ email: { $regex: /@gmail.com$/, $options: "i" } }).then(
  //   (data) => {
  //     res.send(data);
  //   }
  // );

  //19)
  // pagination
  // http://localhost:5800/user/singleuser
  // 1)
  // UserModel.paginate({})
  // .then((data) => {
  //   console.log(data);
  //   res.send(data);
  // });

  //2)http://localhost:5800/user/singleuser?page=2&limit=5
  //   const { limt, page } = req.query
  //    UserModel.paginate({}, {limit: 2, page: 2})
  //  .then((data) => {
  //     console.log(data);
  //     res.send(data);
  //   });

  // 3)http://localhost:5800/user/singleuser?page=2&limit=5
  const { limt, page } = req.query;
  UserModel.paginate({ email: { $regex: /@gmail.com$/, $options: "i" }},    { limit: 3, page: 1 })
  .then((data) => {
        console.log(data);
        res.send(data);
      })
      
      // task --> try on your own
      // pagination using limit and skip
    };

//
//Step1
const createUser = (req, res) => {
  // get the data coming from client
  console.log("user data", req.body);
  // UserModel.create(req.body)
  //   .then((data) => {
  //     console.log("data", data);
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });

  // create for multiple user at once
  UserModel.insertMany(req.body)
    .then((data) => {
      console.log("data", data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
  // we have to create a user using this data in our DB
  // res.send("creating user")
};

const getUserAddress = (req, res) => {
  res.send("address of user");
};

const getUserOrders = (req, res) => {
  res.send("orders of user");
};

const updateUser = (req, res) => {
  console.log("params", req.params);

  //1)
  // UserModel.findByIdAndUpdate(req.params.id,
  // { $set: req.body },
  // {new: true})//used for getting updated data
  // .then((data) => {
  //   console.log("data", data);
  //   res.send(data);
  // });

  //2)
  // UserModel.updateOne({ email: req.params.email }, req.body, {
  //     upsert: true, // it will create the data if not found
  //   }).then((data) => {
  //     console.log("data", data);
  //     res.send(data);
  //   });

  //3)
  // http://localhost:5800/user/student7@gmail.com
  UserModel.updateMany({ password: "12345" }, req.body).then((data) => {
    console.log(data);
    res.send(data);
  });
};

//
// const deleteUser = (req, res)=>{
//   console.log('params', req.params)
//   const {id} = req.params;
// UserModel.findByIdAndDelete(id)
// .then((data)=>{
// res.send(data)
// });
// };

//By using async await
const deleteUser = async (req, res) => {
  console.log("params", req.params);
  const { id } = req.params;

  //0)http://localhost:5800/user/648b666b49
  // UserModel.findByIdAndDelete(id)
  // .then((data)=>{
  //   res.send(data)
  // })

  // 1)http://localhost:5800/user/email
  // try {
  //   const result = await UserModel.deleteOne({ email: "student13@gmail.com" });
  //   console.log(result);
  //   res.send("user deleted successfully");
  // } catch (err) {
  //   res.send("something went wrong!!");
  // }

  // 2)
  // try {
  //   const result = await UserModel.deleteMany({ age: 26 });
  //   console.log(result);
  //   res.send("user deleted successfully");
  // } catch (err) {
  //   res.send("something went wrong!!");
  // }

  // 3)
  UserModel.findOneAndDelete({ email: "Student3@mail" }).then((data) => {
    res.send(data);
  });
};

module.exports = {
  getUserList,
  createUser,
  getUserAddress,
  getUserOrders,
  getUser,
  updateUser,
  deleteUser,
};
*/

//<===============End ofLec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
