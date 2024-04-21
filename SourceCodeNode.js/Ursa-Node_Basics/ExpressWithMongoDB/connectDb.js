//<========================Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>
/*
const mongoose = require('mongoose');

// used to connect our node server with mongoDB
// connect methods returns a promise
mongoose.connect("mongodb://localhost:27017/NSJune2022")//monogodb ka server ha ye
.then(() => {
    console.log(`database connection successful`);
})
.catch((err) => {
    console.log(`Error: ${err.message}`);
})
*/
//<========================END: Lec14March4:Advanced Express & MVC Architecture, Implementing “User” routes, Introducing=============================================>


//
//<====================Lec15March6: Schemas Models, saving a document, querrying a document===================>
const mongoose = require('mongoose');

// used to connect our node server with mongoDB
// connect methods returns a promise
// mongoose.connect("mongodb://localhost:27017/NSJune2023")//monogodb ka server ha ye(DatabaseName ha ye)
mongoose.connect("mongodb://NoorAlam:alam123@ac-j66t1or-shard-00-00.metbcrk.mongodb.net:27017,ac-j66t1or-shard-00-01.metbcrk.mongodb.net:27017,ac-j66t1or-shard-00-02.metbcrk.mongodb.net:27017/NSJUNE2023?ssl=true&replicaSet=atlas-4yyyrd-shard-0&authSource=admin&retryWrites=true&w=majority")

.then(() => {
    console.log(`database connection successful`);
    
})
.catch((err) => {
    console.log(`Error: ${err.message}`);
})

//<====================END: Lec15March6: Schemas Models, saving a document, querrying a document===================>