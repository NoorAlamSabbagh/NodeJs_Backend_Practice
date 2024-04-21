const path = require("path");
// console.log(path.dirname('D:/Newton/Backend/Node by Thapa/Source Code/PathModule/path.js'))
// console.log(path.extname('D:/Newton/Backend/Node by Thapa/Source Code/PathModule/path.js'))
// console.log(path.basename('D:/Newton/Backend/Node by Thapa/Source Code/PathModule/path.js'))
// console.log(path.parse('D:/Newton/Backend/Node by Thapa/Source Code/PathModule/path.js'))
const myPath = path.parse('D:/Newton/Backend/Node by Thapa/Source Code/PathModule/path.js');
console.log(myPath.root);