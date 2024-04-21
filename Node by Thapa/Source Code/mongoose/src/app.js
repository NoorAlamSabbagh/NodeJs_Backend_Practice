/*
const mongoose = require("mongoose");

//connection creation and creation in new db
mongoose
  .connect("mongodb://localhost:27017/nooralamchanell", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful..."))
  .catch((err) => console.log(err));

//Schema
// mongoose schema defines structure of the document

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//A Mongoose model is a wrapper on the Mongoose schema.
//provides interface to the database for creating, querying, updating, deleting, records, etc

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document or insert

const createDocument = async () => {
  try {
    const jsPlaylist = new Playlist({
      name: "JavaScript",
      ctype: "Front End",
      videos: 150,
      author: "Alam Technical",
      active: true,
    });

    const mongoDBPlaylist = new Playlist({
      name: "MongoDB JS",
      ctype: "Database",
      videos: 10,
      author: "Alam Technical",
      active: true,
    });

    const mongoosePlaylist = new Playlist({
      name: "mongoose JS",
      ctype: "Database",
      videos: 4,
      author: "Alam Technical",
      active: true,
    });

    const expressPlaylist = new Playlist({
      name: "Express JS",
      ctype: "Back End",
      videos: 20,
      author: "Alam Technical",
      active: true,
    });

    // const result = await reactPlaylist.save();
    const result = await Playlist.insertMany([
      jsPlaylist,
      mongoDBPlaylist,
      mongoosePlaylist,
      expressPlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument()

//
// const getDocument = async () => {
//   try {
//     const result = await Playlist
//     .find({ ctype: "Front End" })
//       .select({ name: 1, ctype: Number(1) })
//       .limit(1);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getDocument();

//
//Comparision operator
// const getDocument =async() => {
// try{
//     const result = await Playlist
//     // .find({videos : {$gt:50}})
//     .find({ctype : {$in:["Back End", "Database"]}})
//     .select({name:1})
//     // .limit(1)
//     console.log(result)
// }catch(err){
//     console.log(err)
// }
// }
// getDocument()

//
//Lec16(7)
//Logical Query
// const getDocument = async () => {
//   try {
//     const result = await Playlist
//       // .find({videos : {$gt:50}})
//       .find({ $or: [{ ctype: "Back End" }, { author: "Alam Technical" }] })
//       .select({ name: 1 });
//     // .limit(1)
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getDocument();


//Lec17(8)
//Sorting and Query
const getDocument = async () => {
    try {
      const result = await Playlist
        .find({ author: "Alam Technical"})
        .select({ name: 1 })
        // .countDocuments()
        .sort({name:1})
        // .sort({name:-1})
      // .limit(1)
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
//   getDocument();


//
//Lec18(9): Update the documents
// const updateDocument = async (_id) => {
//     try {
//       const result = await Playlist.findByIdAndUpdate({_id},{
//         $set : {
//         name : "JavaScript Alam Technical"
//       }
//     },{
//         new : true,
//         useFindModify: false
//     });
//     console.log(result)
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   updateDocument("6411745124d40c278ad21cc0");


//
//lec19(10): Delete Query document
// const deleteDocument = async (_id) => {
//     try {
//     //   const result = await Playlist.deleteOne({_id});
//       const result = await Playlist.findByIdAndDelete({_id});
       
//     console.log(result)
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   deleteDocument("6411745124d40c278ad21cc0");

*/
//
//<======================================================================================>
//Lec20(11)
const mongoose = require("mongoose");

//lec22Validator
const validator = require("validator");

//connection creation and creation in new db
mongoose
  .connect("mongodb://localhost:27017/nooralamchanell", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
  })
  .then(() => console.log("connection successful..."))
  .catch((err) => console.log(err));

//Schema
// mongoose schema defines structure of the document

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim:true,
    minlength:[2, "minimum 2 letters"],
    maxlength:30
    // uppercase: true
  },
  ctype: {
    type: String,
    required: true,
    lowercase: true,
    enum:["frontend", "backend", "database"]
  },
  videos: {
    type:Number,
  validate(value){
    if(value<0){
      throw new Error("videos count should not be negative");
    }
  }
  //or
  // validate:{
  //   validator:function(value){
  //     return value.length<0
  //   },
  //   message:"videos count should not be negative"
  // }
  },
  author: String,
  //Lec22 Validator
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Email is invalid")
      }
    }
    
  },
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document or insert

const createDocument = async () => {
  try {
    // const jsPlaylist = new Playlist({
    //   name: "JavaScript",
    //   ctype: "Front End",
    //   videos: 150,
    //   author: "Alam Technical",
    //   active: true,
    // });

    // const mongoDBPlaylist = new Playlist({
    //   name: "MongoDB JS",
    //   ctype: "Database",
    //   videos: 10,
    //   author: "Alam Technical",
    //   active: true,
    // });

    // const expressPlaylist = new Playlist({
    //   name: "Express JS",
    //   ctype: "Back End",
    //   videos: 20,
    //   author: "Alam Technical",
    //   active: true,
    // });

    const mongoosePlaylist = new Playlist({
      name: "mongoose JS",
      ctype: "Database",
      videos: 4,
      author: "Alam Technical",
      // email:"thapa.yo@go",
      email:"thapa@gmail.com",
      active: true,
    });

    
    const result = await Playlist.insertMany([mongoosePlaylist]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument()

