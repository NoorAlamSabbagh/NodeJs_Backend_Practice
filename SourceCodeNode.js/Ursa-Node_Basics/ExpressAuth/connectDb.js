//<=======================Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
const {connect} = require('mongoose');

const URL = process.env.MONGODB_CONNECTION_URL
const options = {
    dbName: 'NodeRevision'
}
connect(URL, options)
.then(() => {
    console.log(`Database connection is successful`);
})
.catch(() => {
    console.log(`something went wrong`);
})

//<=======================END: Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>