//<=======================Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
//lec22 ka same code
/*
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // minLength: 6,
    },
    email: {
      type: String,
      required: true,
      // minLength: 8,
      // maxLength: 25,
    },
    password: {
      type: String,
      required: true,
      // minLength: 6,
      // maxLength: 15,
    },
    mobile: {
      type: Number,
      minLength: 10,
      required: true,
    },
    batch: {
      type: String,
      enum: ["Ursa", "Juno"],
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;
*/
//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>

//<===============Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>
/*
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // minLength: 6,
    },
    email: {
      type: String,
      required: true,
      // minLength: 8,
      // maxLength: 25,
    },
    password: {
      type: String,
      required: true,
      // minLength: 6,
      // maxLength: 15,
    },
    mobile: {
      type: Number,
      minLength: 10,
      required: true,
    },
    batch: {
      type: String,
      enum: ["Ursa", "Juno"],
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;
*/

//role ka code likha
/*
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // minLength: 6,
    },
    email: {
      type: String,
      required: true,
      // minLength: 8,
      maxLength: 25,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      // maxLength: 15,
    },
    mobile: {
      type: Number,
      minLength: 10,
      required: true,
    },
    batch: {
      type: String,
      enum: ["Ursa", "Juno"],
    },
    role:{
      type: String,
      default: "user",
      enum: ["user", "admin", "superAdmin"]
    }
  },
  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;
*/
//<===============END: Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>


// <======================Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      // minLength: 6,
    },
    email: {
      type: String,
      required: true,
      // minLength: 8,
      maxLength: 25,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      // maxLength: 15,
    },
    mobile: {
      type: Number,
      minLength: 10,
      required: true,
    },
    batch: {
      type: String,
      enum: ["Ursa", "Juno"],
    },
    role:{
      type: String,
      default: "user",
      enum: ["user", "admin", "superAdmin"]
    }
  },
  { versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;