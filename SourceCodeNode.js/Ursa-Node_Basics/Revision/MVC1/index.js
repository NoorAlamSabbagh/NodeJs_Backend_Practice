const express = require('express')
const app = express();

const Dotenv = require('dotenv')
Dotenv.config();

app.use(express.json());

const alamRouter = require("./routes/alamRouters")
app.use('/alam', alamRouter)

app.get("/products", (req, res)=>{
    console.log("Products List")
  res.send("ProductList")
})

const PORT = process.env.PORT || 7500
app.listen(PORT, ()=>{
    console.log(`Your server is running at ${PORT}`)
})