// <====================== 20Feb_Node_Lecture4=================>
// npm init --y package banake is code ko npm pe daala publish kiya
//create own module and publish it on npm and use it 

const a = 20;

const multiply = (a, b) => {
    console.log(`multiplication of numbers are ${a*b}`);
};

const add = (a, b) => {
    console.log(`addition of numbers are ${a+b}`);
};

const subtract = (a,b) => {
    console.log(`substraction of numbers are ${a+b}`);
};

// module.exports = {
//     multiply: multiply,
//     add: add,
//     subtract: subtract
// };

// object shortend syntax
module.exports = {
    multiply,
    add,
    subtract,
};


//ES6 modules
//export default multiply
//export const
// import multiply from './index'

//
//using commonJS
//module.exports= 
//const multiply = require('./index')

// <====================== END: 20Feb_Node_Lecture4=================>