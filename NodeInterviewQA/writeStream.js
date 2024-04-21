const fs = require('fs');

let data = 'My Name is Noor Alam, I am a Full Stack Web Developer'

let writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'utf-8')
writeStream.end();

writeStream.on('finish', function(){
    console.log('Writing Completed');
})