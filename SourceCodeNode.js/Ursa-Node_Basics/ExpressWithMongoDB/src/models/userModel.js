//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
//Yaha se start hua Lec15
// schema --> architecture/structure of a document
// the keys/properties in the document which will be receiving values from client


// Model: which allows us to do operations on Data --> CRUD

//database related ke liye mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema

//I have created my schema
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number
}, {versionKey: false})

// first arg --> name of the collection, 
// 2nd arg --> schema we created
//user yaha collection name ha
const User = mongoose.model("user", userSchema);//model banaya aur ye user naam ka folder ban jayega hamare mongodb ke under

module.exports = User

//<========================End Lec15March6=============================>