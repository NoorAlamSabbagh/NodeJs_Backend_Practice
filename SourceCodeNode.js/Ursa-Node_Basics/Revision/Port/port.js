const express = require('express');
const app = express();

app.get('/home', (req, res)=>{
    console.log("Hey Noor Alam, How are you!!!")
    res.send("I am good, What about you dear!!! ")
})


const PORT = 3500
app.listen(PORT, () =>{
    console.log(`Your Port is running on server ${PORT}`)
})