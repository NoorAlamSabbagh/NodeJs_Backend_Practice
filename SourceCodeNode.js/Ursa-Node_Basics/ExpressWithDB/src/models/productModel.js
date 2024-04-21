//<=======================Lec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
// Time session 1:18 pe start kiya ise ek naya productModel Banaya isme Validator seekha
/*
const {Schema, model } = require('mongoose');

const productSchema = new Schema({
        name: String,
        category: String,
        price: String,
        inStock: Boolean
    }, {versionKey: false})
        

const Product = model('product', productSchema)

module.exports = Product
*/

//
//Validator seekha
/*
const {Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 10,
        minLength: [4, 'please pass a valid name for product'],
        trim: true,
        upperCase: true,
        // lowerCase: true
    },
    category: {
        type: String,
        enum: ["mobile", "clothing", "appliances"]
    },
    price: {
    type: Number,
    required: true,
    cast: false,
    min: 10000,
    max: 70000
    },
    inStock: Boolean
},{versionKey: false})

const Product = model('product', productSchema)

module.exports = Product
*/

//<===============End ofLec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
// {
//     "name": "   Iphone 11",
//     "category": "mobile",
//     "price": 15000,
//     "inStock": true,
//     "colors":["black"]
//     }

//<=======================Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
// Lec21 me max code validation ka productmodel me kiya starting me userController me kiya
// fir uske baad Authorizarion aur authentication pada aur ExpressAuth ka folder banaya

const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 10,
      minLength: [4, "please pass a valid name for product"],
      trim: true,
      uppercase: true,
      // lowercase: true
    },
    category: {
      type: String,
      enum: ["mobile", "clothing", "appliances"],
    },
    price: {
      type: Number,
      required: true,
      cast: false,
      min: 100,
      max: 100000,
    },
    //Lec 21 ka code yaha se start hua
    color: {
      type: Array,
      // 1)
      //  validate: (data) => {
      //     console.log('data in validator', data);
      //   return data.length>0
      // }

      // 2)UserDefined Validator
      // validate: {
      //     validator: (data) => {
      //         console.log('data in validator', data);
      //         return data.length>1
      //     },
      //     // message: `colors should be having more than 1 value`
      //     //OR
      //      message: (dataInMesg) => {
      //         console.log('dataInMesg', dataInMesg);
      //         return `validation failed for colors`
      //     }
      // }

      // 3)
      // isAsync: true, ---> deprecated(purane version me aisa tha)
      // validate: {
      //   validator: async (data) => {
      //     // return Promise.resolve('data')
      //     // return Promise.reject('data is not valid')
      //     // return await Promise.reject('data is not valid');
      // return await Promise.resolve(false);
      //   }


      // 4)
      validate: {
        validator: async (data) => {
          return new Promise((res, rej) => {
            // res('123')
            rej("error");
          })
            .then((data) => {})
            .catch((err) => {
              return false;
            });
        },
      },
    },
    inStock: Boolean,
  },
  { versionKey: false }
);

const Product = model("product", productSchema);

module.exports = Product;

//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
