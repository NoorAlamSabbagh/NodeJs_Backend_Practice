//<====================Lec16March9: Comparision Query Operators, Logical Query Operators===================>
//usermodel ka code pura copy kiya
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: String,
    score: Number,
    team: String
}, {versionKey: false})

// first arg --> name of the collection, 
// 2nd arg --> schema we created
const Player = mongoose.model("player", playerSchema);

module.exports = Player

//<====================END: Lec16March9: Comparision Query Operators, Logical Query Operators===================>