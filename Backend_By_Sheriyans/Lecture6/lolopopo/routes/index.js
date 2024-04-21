var express = require("express");
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  // res.render("index");
  res.cookie("age", 25)
  // req.session.ban = "true";
  // res.send("hello");
});

// router.get("/checkban", function (req, res) {
//   if (req.session.ban === true) {
//     res.send("You are banned");
//   }
//   else{
//     res.send("not banned")
//   }
//   // console.log(req.session);
// });

// router.get("/removeban", function(req, res){
//   req.session.destroy(function(err){
//     if(err) throw err;
//     res.send("ban removed")
//   })
// })

router.get("/read",  function (req, res){
  console.log(req.cookies.age);
  res.send("check")
})

router.get("/delete",  function (req, res){
  res.clearCookie("age")
  res.send("clear hogayi")
})
//
// router.get('/create', async function (req, res) {
//   const createdUser = await userModel.create({
//     username: "Noor Alam",
//     age: 25,
//     name: "Harsh"
//   });
//     res.send(createdUser)
// });

//
// router.get("/allusers", async function(req, res){
//   // let allusers = await userModel.find();
//   let allusers = await userModel.findOne({username: "Noor Alam"});
//   res.send(allusers)
// })

//
// router.get("/delete", async function(req, res) {
//   let delteuser = await userModel.findOneAndDelete({
//     username: "Noor Alam"
//   })
//   res.send(delteuser)
// })

module.exports = router;
