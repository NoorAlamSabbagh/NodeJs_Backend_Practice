//challenge Time

// 1: Create a folder name Alam 
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the exiting data.
// 4: Read the data without getting the buffer data at first.
// file encoding 
// 5: rename the file to mybio.txt
// 6: now delte both the file and the folder

const fs = require("fs");

// fs.mkdir("thapa", (err) => {
//     console.log("folder created");
// })

// fs.writeFile("./thapa/bio.txt", "my name is Noor Alam", (err)=>{console.log('files created')});
// fs.appendFile("./thapa/bio.txt", " a full stack web developer", (err)=>{console.log('data appened')});
// fs.readFile("./thapa/bio.txt", 'utf-8', (err, data)=>{console.log(data)});
// fs.rename("./thapa/bio.txt", "./thapa/myBio.txt",
// (err)=>{console.log("rename done")
// });

// fs.unlink("./thapa/myBio.txt",
// (err)=>{console.log("file deleted");
// });

//
fs.rmdir('./thapa', (err)=>{
    console.log("folder deleted");
});