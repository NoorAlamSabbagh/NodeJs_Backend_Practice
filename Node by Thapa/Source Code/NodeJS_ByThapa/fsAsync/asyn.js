const fs = require("fs");


//synchoronous
// const data = fs.readFileSync("read.txt", "utf-8");
// console.log(data);

//Asynchoronous
fs.readFile("read.txt", 'utf-8', (err, data)=>{
    console.log("data")
})
console.log("after the data")