const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: String,
    age: Number,
    graduation: String,
    branch: String
}, {versionKey: false})

const User = model('students', userSchema)
module.exports = User


