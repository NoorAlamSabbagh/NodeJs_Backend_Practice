const express =require('express');
const path = require('path')
const app = express();
//lec33
const hbs = require("hbs");
const { request } = require('http');
//
const port = 8000;

//built in middleware
const staticPath = path.join(__dirname,"../public01");
//
const templatePath = path.join(__dirname,"../templates");
//lec33
const partialsPath = path.join(__dirname,"../templates/partials");

//to set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
//lec33 partials
hbs.registerPartials(partialsPath)
//
//template engine route
app.get("/", (req,res)=>{
    res.render('index.hbs')
})

// app.get("about",(req,res)=>{
//     console.log(req.query.name)
//     res.render("about")
// })

//
app.get("about",(req,res)=>{
    requests(
        
    )
})

app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomment: "Opps this about us page couldn't be found",
    })
})

// app.get("*",(req,res)=>{
//     res.render("404",{
//         errorcomment: "Opps page couldn't be found",
//     })
// })

app.use(express.static(staticPath))

app.get('/', (req, res)=>{
    res.send("hello from the express server")
})
app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})