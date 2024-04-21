//Lec12
/*
const  add = require ("./operator")//ek module se dusre module ke code ko call kiya 
console.log(add(5,5));
console.log(sub(10,5));
// console.log(add);
*/

//
// const operator = require("./operator");
// console.log(operator)
// console.log(operator.add(5,5));
// console.log(operator.sub(10,5));

//same code using object destructuring
const {add1, sub1, mul1, name } = require("./operator")
console.log(add1(5,5));
console.log(sub1(10,5));
console.log(mul1(10,5));
console.log(name);