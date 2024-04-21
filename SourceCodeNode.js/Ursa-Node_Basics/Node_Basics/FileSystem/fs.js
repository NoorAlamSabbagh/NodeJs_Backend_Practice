//<============================Lec5Feb21: Using Core Module, OS Module===============================>//
// File system CRUD

// const fs = require("fs");
// fs.mkdir('new', (err) => {
//   console.log(err);
// })

//

// const fs = require("fs");
// // const fsPromise = require('fs/promises');//(most latest way of handelling promises)
// // const { clearScreenDown } = require("readline");
// // working with Directories
// // below code create new directory
// fs.mkdir('new', (err) => {
//     console.log(err);
// })


// fs.mkdir('FileSystem/new', (err) => {
//     console.log(err);
// })


//
// const fs = require("fs");
// console.log('start');
// fs.mkdir('myDir/alam/file.txt', {recursive: true}, (err) => {//for multiple directory we use recursive
//     if(err){
//         console.log(err);
// }else{
//     console.log('created successfully');
// }
// });
// console.log('end');

//
// sycronous execution of mkdir

// const fs = require("fs");
// fs.mkdirSync('my')//already file ha isliye aage ka code run nhi karega
// console.log('end');


// Read Directory operation
// const fs = require("fs");
// fs.readdir("my", (e, files) => {
//   if (e) {
//     console.log(`error occured: ${e.message}`);
//   } else {
//     console.log("getting files here");
//     console.log(files);
//   }
// });


//<============================END: Lec5Feb21_Using Core Module, OS Module===============================>//

//
//<============================Lec6Feb21_Creating and writing files,Events Module, Emmiting Module Module===============================>//
// const fs = require("fs");
// fs.readdir('new', (e, files) => {
//     if(e){
//         console.log(`error occured: ${e.message}`);
//     } else{
//         console.log('getting files here');
//         console.log(files);
//     }
// })

//
// const fs = require("fs");
// fs.rmdir('my', {recursive: true}, (err) => {
//   if(err){
//       console.log(`error occured: ${err.message}`);
//   } else{
//       console.log('deleted succesfully');
//   }
// })
// done with directory

//

//<===========================================================>//

//
// CRUD on files

// if file is not there then it will create one, and then write the content
// if file is there already then it will overwrite the content in that file
/*
const fs = require("fs");
fs.writeFile('myFile.txt', 'hi this is Abhinav', (err) => {
    if(err){
      console.log(`error occured: ${err.message}`);
    }
  })
*/

// if file is not there then it will create one, and then write the content
// if file is there already then it will append the content in that file

// const fs = require('fs');
// // fs.appendFile('Filesystem/File.txt', '\nHi this line no 2', (err) => {
// fs.appendFile("File.txt", "\nHi this line no 2", (err) => {
//   if (err) {
//     console.log(`error occured: ${err.message}`);
//   } else {
//     console.log("file appended successfully");
//   }
// });

  // fs.open('Filesystem/File.txt', 'r')
// open

// fs.open('Filesystem/File.txt', 'r', (err, file) => {
// fs.open('File.txt', 'r', (err, file) => {
//     if(err){
//       console.log(`error occured: ${err.message}`);
//     }else{
//       console.log(file);
//       console.log('file appended successfully');
//     }
//   })

//
// const fs = require("fs");
  // fs.readFile('File.txt', 'utf-8', (err, file) => {
  //   if(err){
  //     console.log(`error occured: ${err.message}`);
  //   }else{
  //     // console.log(file+'');
  //     console.log(file);
  //     console.log('file reading successfully');
  //   }
  // })

//to delete file

// const fs = require("fs");
// fs.unlink('myFile.txt', (err) => {
//   if(err){
//     console.log(`error occured: ${err.message}`);
//   } else{
//     console.log('file deleted successfully');
//   }
// })

//same code as above, now using async method
// const fs = require("fs");
// const fsPromise = require('fs/promises');//(most latest way of handelling promises)
// const deleteFile = async() => {
//   await fsPromise.unlink('Filesystem/myFile.txt');
// }

// deleteFile();

/*
 (function(){
  
  })()
*/

//
//revise
// const deleteFile = async() => {
//   await fsPromise.unlink('Filesystem/myFile.txt');
// }

// deleteFile();

// (function(){

// })()

// const myFileWriter = (filename, content) => {
//   fs.writeFile(filename, content, (err) => {
//     if(err)
//     console.log(err);
//   })
// }

// const myFileReader = async(filename) => {
//   const fileContent = await fsPromise.readFile(filename)
//   return fileContent.toString()
// }

//callback
/*
fetch('https://myapi.com')
.then((data) => {
})

.catch(() => {

})
*/

//
// const callmyApi = async() => {
//   await fetch('https://myapi.com')
// }

//<============================END: Lec6Feb21_Creating and writing files,Events Module, Emmiting Module Module===============================>//
//Iske baad EvenEmitter sikha folder banaya
