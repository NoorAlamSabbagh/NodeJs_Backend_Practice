//Lec 12
/*const add = (a,b) => {
    return a+b;
}
const name = "vinod thapa"; 
// module.exports =  add; //ek module se dusre module ke code ko call kiya 
// module.exports =  name;
*/

//

const add1 = (a,b) => {
    return a+b;
}
const sub1 = (a,b) => {
    return a-b;
}
const mul1 = (a,b) => {
    return a*b;
}

const name = "Noor Alam";

// module.exports.add1 =  add;
// module.exports.sub1 =  sub;
// module.exports.mul1 =  mul;

//Destructure above 3 line code
module.exports = {add1, sub1, mul1, name};



