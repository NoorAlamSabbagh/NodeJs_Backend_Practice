// 17Feb_Node_Lecture3_by_AnubhavKumar
// console.log("inside node js file");
// console.log('start');

// setTimeout(()=>{
//   console.log("timer 1");
// }, 1000)

// console.log("end");


//
/*
console.log("inside node js file"); 

console.log("start");

setTimeout(() => {
  console.log("timer 1");
 },0);

console.log("end");

setImmediate(() => { 
  console.log("immidiately called");
}); 
*/

//
// const fs = require('fs')
//  async function hello(){
//   await fs.open("file1.txt", (err, files) => { 
//     // console.log(err)
//     // fs.readFile(file1.txt)
//      console.log("file opened successfully");
    
//   });
//  }
//  hello();


//
// console.log("inside node js file"); 
// const fs = require("fs");

// console.log("start");

// setTimeout(() => {//1: Timer expired cb queue
//   console.log("timer 1");
//  }, 1000);

// console.log("end");

// setImmediate(() => { //3: setImmediate
//   console.log("immidiately called");
// });

// fs.open("file1.txt", () => { //2:async I/O
//   console.log("file openned successfully");
// });


//
// console.log("inside node js file"); //1(syn call)
// const fs = require("fs");

// console.log("start");//2(syn call)

// setTimeout(() => {//1:timer experied cb queue
//   console.log("timer 1");
//  }, 0); //add some delay (0 sec is not actually 0 sec, node adds a minimal delay from its side)
// // }, 1000);

// console.log("end");//3(syn call)

// //
// setImmediate(() => {//3: setImmediate cb queue
//   console.log("immidiately called");
// });

// fs.open("file1.txt", (err) => { //2: async I/O cb queue
// //   console.log(err);
//   console.log("file openned successfully");
// });

//
/*
console.log("inside node js file"); //1(syn call)

const fs = require("fs");
console.log("start");//2(syn call)

setTimeout(() => {
  console.log("timer 1");
 }, 0); //add some delay (0 sec is not actually 0 sec, node adds a minimal delay from its side)
// }, 1000);
console.log("end");//3(syn call)

setImmediate(() => {
  console.log("immidiately called");
});

fs.open("file1.txt", (err) => {
//   console.log(err);
  console.log("file openned successfully");
});

//procees aur promise vip log ha
// process. nextTick ( ) schedule a callback function to be executed in next iteration of event loop.
process.nextTick(() => {
        console.log('calling next tick');
})

Promise.resolve().then(() => console.log('log from internal promise'));
*/

//Bs itna hi code ha is Lec me
// <==============================END: 17Feb_Node_Lecture3==========================================>



// <============================20Feb_Node_Lecture4_by_AnubhavKumar============================================>
// 

// const fs = require("fs");

// setTimeout(() => {
//   console.log("timer 1");
//  }, 0); //add some delay (0 sec is not actually 0 sec, node adds a minimal delay from its side)
// // }, 1000);

// //
// setImmediate(() => {
//   console.log("immidiately called");
// });

// fs.open("file1.txt", (err) => {
// //   console.log(err);
//   console.log("file openned successfully");
// });


// //procees aur promise vip log ha
// Promise.resolve().then(() => console.log('log from promise'));

// process.nextTick(() => {
//         console.log('calling next tick');//ye phele print hua due to queue concept
//         Promise.resolve().then(() => console.log('log from internal promise'))
// })


//
/*
const fs = require("fs");

setTimeout(() => {
  console.log("timer 1");
 }, 0); //add some delay (0 sec is not actually 0 sec, node adds a minimal delay from its side)
// }, 1000);

//
setImmediate(() => {
  console.log("immidiately called");
});

fs.open("file1.txt", (err) => {
//   console.log(err);
  console.log("file openned successfully");
});


//procees aur promise vip log ha
Promise.resolve().then(() => console.log('log from promise'));

//multiple nexting
process.nextTick(() => {
        console.log('calling next tick');//ye phele print hua due to queue concept
        Promise.resolve().then(() => {
          console.log('log from internal promise');
          setImmediate(() => {
              console.log('immidiate from internal ');
          })
      })
  })
  
*/
  //Lec 4 ka itna code kiya starting me fir npm ke bare me seekha fir npm init package banana seekha fir
  //MyModule folder banaya index.js folder banaya
  // <===================End: 20Feb_Node_Lecture4=========================>