//Lec 18
/*
const bioData = {
    name : "vinod",
    age : 26,
    channel: "thapa technical",
};

console.log(bioData.channel);

// {"name":"vinod","age":26,"channel":"thapa technical"}
const jsonData = JSON.stringify(bioData);//object to JSON convert
// console.log(jsonData)
// console.log(jsonData.channel)//nhi kar sakte ye cheez

//
const objData = JSON.parse(jsonData);//JSON to object convert
// console.log(objData)
console.log(objData.channel)
// { name: 'vinod', age: 26, channel: 'thapa technical' }
*/

//
/*
const fs = require("fs")//to create file 
const bioData = {
    name : "vinod",
    age : 26,
    channel: "thapa technical",
};

// 1:convert To JSON
// 2: dusre file me add karna Ha
// 3: readFile
// 4: again convert back to js obj original 
// 5: console.log

//json file banya aur json me convert kiya 
const jsonData = JSON.stringify(bioData)
fs.writeFile('json1.json',jsonData, (err)=>{
    console.log("done");
});

//json se object banaya
fs.readFile("json1.json", "utf-8",(err, data)=>{
    // console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})
*/