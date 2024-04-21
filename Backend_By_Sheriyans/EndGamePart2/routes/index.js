var express = require("express");
var router = express.Router();
const userModel = require("./users");

const passport = require("passport");
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/profile", isLoggedIn, function (req, res) {
  // res.send("profile");
  res.render("profile");
});

router.post("/register", function (req, res) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });
  userModel
    .register(userdata, req.body.password)
    .then(function (registeredUser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/",
}), function(req, res){});

router.get("/logout", function(req, res, next){
req.logout(function(err){
  if(err) return next(err);
  res.redirect("/")
})
})


function isLoggedIn(req,res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
}

// router.get("/create", async function (req, res) {
//   let userdata = await userModel.create({
//     username: "Harshi",
//     nickname: "Harshiiiiiiiiiiiii",
//     description:
//       "Harshii bahut hasti ha ",
//     categories: ["fashion", "life"]
//   });
//   res.send(userdata)
// });

// router.get("/find", async function(req, res){
//   // // var regex = new RegExp("^Harshi", "i")
//   // // var regex = new RegExp("Harshi$", "i")
//   // // let user = await userModel.find({username: regex});
//   // // let user = await userModel.find();
//   // let user = await userModel.find({categories: {$all:['node', "js"]}});
//   // res.send(user)

//   //
//   // var date1 = new Date('2023-12-11');
//   // var date2 = new Date('2023-13-11');
//   // let user = await userModel.find({datecreated: {$gte: date1, date2}})
//   // res.send(user)

//   //
//     // let user = await userModel.find({categories: {$exits: true}});
//     let user = await userModel.find({
//      $expr: {
//       $and: [
//         {$gte: [{$strLenCP: '$nickname'}, 0]},
//         {$lte: [{$strLenCP: '$nickname'}, 12]},
//       ]
//      }
//     });
//     res.send(user);
//   })

module.exports = router;

//
// router.get('/failed', function(req, res) {
//   req.flash("age", 25);
//   req.flash("name", "Noor Alam");
//   res.send("bangaya");
// });
// router.get('/checkkaro', function(req, res) {
//   console.log(req.flash("age"), req.flash("name"));
//   res.send("check karo ke terminal per")
// });
