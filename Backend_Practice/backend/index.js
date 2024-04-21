const express = require("express");
const app = express();
const mongoose = require('mongoose');

const dotEnv = require('dotenv')
dotEnv.config();
  
app.use(express.json());

const apiRouter = require('./routes/ApiRoutes');
app.use('/API', apiRouter);
mongoose.connect(process.env.MONGO_URL)

// app.get('/DummyApi',(req,res)=>{
//     console.log('inside DummyApi routes');
//     res.send('DummyAPI')
// })

const PORT = process.env.PORT || 6000
app.listen(PORT,()=>{
    console.log(`app running on ${PORT}`);
})
