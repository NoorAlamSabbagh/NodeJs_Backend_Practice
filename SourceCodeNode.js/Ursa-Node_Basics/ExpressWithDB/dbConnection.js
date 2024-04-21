//<======================Lec18March12-Better Folder Structure=================================>
const { connect } = require("mongoose");

// connect('mongodb://localhost:27017/NSUrsaWithJunoBatch')
connect("mongodb://NoorAlam:alam123@ac-j66t1or-shard-00-00.metbcrk.mongodb.net:27017,ac-j66t1or-shard-00-01.metbcrk.mongodb.net:27017,ac-j66t1or-shard-00-02.metbcrk.mongodb.net:27017/NSUrsaWithJunoBatch?ssl=true&replicaSet=atlas-4yyyrd-shard-0&authSource=admin&retryWrites=true&w=majority")
  .then(() => {
    console.log(`connection with DB successful`);
  })
  .catch(() => {
    console.log(`something went wrong!!`);
  });
//<======================End: Lec18March12=================================>
