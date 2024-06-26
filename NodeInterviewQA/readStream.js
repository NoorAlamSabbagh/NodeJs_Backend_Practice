//Stream in Node.Js
//Read: read data to source
// Write: Write data to destination 
// Duplex: Read Write
// Transform : to manipulate
const fs = require('fs');
let content = ''

let readStream = fs.createReadStream('input.txt');

readStream.on('data', function(chunk){
    content += chunk;
})

readStream.on('end', function(){
    console.log(content);
})

readStream.on('error', function(err){
    console.log(err);
})