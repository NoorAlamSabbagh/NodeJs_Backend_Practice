//<===========================================================>//
// Lec8Feb24: Restful Services, Introducing express, Building first Express server

//express me seperate seperate code likh sakte ha for seperate seperate path in your diferent callback function
//aapko same piece of code ko baar baar touch karne ki jarorat nhi ha isliye express use karte ha
//
/*
const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    console.log('///endPoint');
    res.send('<h2>Default page using express</h2>');
})

app.get('/login',(req, res)=>{
    console.log('///login endPoint');
    res.send('<h1>login page....</h1>')
})

app.get('/data',(req, res)=>{
    console.log('/// data endPoint');
    res.send({name:'Abhinav'});
})

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`express running at ${PORT}`);
})
*/
//<===========================================================>//

//<====================Lec9Feb27: Introducing Nodemon, Route Parameters, Handling Https========================>//
//Sara code index.js me hi ha lec9 ka

//
/*
const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    console.log('///endPoint');
    res.send('<h2>Default page using express</h2>');
})

app.get('/login',(req, res)=>{
    console.log("method", req.method);//what type of method do you have
    console.log("url", req.url);//url have combination of path and any or query parameter
    console.log("path", req.path);//the path have only routes path
    console.log("headers", req.headers);
    console.log("query", req.query);//key value pairs objects
    console.log(req);
    res.send('<h1>login page....</h1>')
})

app.get('/data',(req, res)=>{
    console.log('/// data endPoint');
    res.send({name:'Abhinav'});
})

app.get('*',(req, res)=>{
    console.log('not found page');
    res.send('<h3>Page not found !!</h3>');
})

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`express running at ${PORT}`);
})
*/

////////////////////////////////////
/*
const express = require("express");
const app = express();

// to get the data from client where body is in form of json
app.use(express.json());

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());


const product = [
  {
    id: 1,
    name: "iphone 13",
    category: "Mobile",
    price: 50000,
    color: "black",
  },
  {
    id: 2,
    name: "galaxy",
    category: "Mobile",
    price: 20000,
    color: "white",
  },
  {
    id: 3,
    name: "fridge",
    category: "appliances",
    price: 20000,
    color: "green",
  },
  {
    id: 4,
    name: "cooler",
    category: "appliances",
    price: 25000,
    color: "gray",
  },
];

app.get("/", (req, res) => {//browser se get request jata ha
    console.log("get endpoint");
    res.send("<h2>Default page GET</h2>");
  });
  
  app.post("/", (req, res) =>{
      console.log("post endpoint");
      res.send("<h2>Default page POST</h2>");
  })
  
  app.get("/login", (req, res) => {
    console.log("method", req.method);
    console.log("url", req.url);
    console.log("path", req.path);
    console.log("headers", req.headers);
    console.log("query", req.query);
    console.log(req);
    res.send("<h1>login page..</h1>");
  });
  
  app.get("/data", (req, res) => {
    console.log("data endpoint");
    res.send({ name: "Abhinav" });
  });

  // to get products
  app.get("/products", (req, res) => {
    console.log(product)
    res.send(product);
  });
   


  app.get('*',(req, res)=>{
    console.log('not found page');
    res.send('<h3>Page not found !!</h3>');
})

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`express running at ${PORT}`);
})
*/


//
/*
const express = require("express");

const app = express();

// to get the data from client where body is in form of json
app.use(express.json());

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());

const product = [
  {
    id: 1,
    name: "iphone 13",
    category: "Mobile",
    price: 50000,
    color: "black",
  },
  {
    id: 2,
    name: "galaxy",
    category: "Mobile",
    price: 20000,
    color: "white",
  },
  {
    id: 3,
    name: "fridge",
    category: "appliances",
    price: 20000,
    color: "green",
  },
  {
    id: 4,
    name: "cooler",
    category: "appliances",
    price: 25000,
    color: "gray",
  },
];

app.get("/", (req, res) => {
  //browser se get request jata ha
  console.log("get endpoint");
  res.send("<h2>Default page GET</h2>");
});

app.post("/", (req, res) => {
  console.log("post endpoint");
  res.send("<h2>Default page POST</h2>");
});

app.get("/login", (req, res) => {
  console.log("method", req.method);
  console.log("url", req.url);
  console.log("path", req.path);
  console.log("headers", req.headers);
  console.log("query", req.query);
  console.log(req);
  res.send("<h1>login page..</h1>");
});

app.get("/data", (req, res) => {
  console.log("data endpoint");
  res.send({ name: "Abhinav" });
});

// http://localhost:5500/products/2
app.get("/products/:productId", (req, res) => {
  console.log("params", req.params);
  const productItem = product.find(
    (prd) => prd.id === Number(req.params.productId)
  );
  console.log("productItem", productItem);
  if (productItem) {
    res.send(productItem);
  } else {
    res.send({});
  }
});

app.get("*", (req, res) => {
  console.log("not found page");
  res.send("<h3>Page not found !!</h3>");
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`express running at ${PORT}`);
});
*/


//
/*
const express = require("express");
const app = express();

// to get the data from client where body is in form of json
app.use(express.json());//enable middleware that parses incoming requests with JSON payloads.

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());

const product = [
  {
    id: 1,
    name: "iphone 13",
    category: "Mobile",
    price: 50000,
    color: "black",
  },
  {
    id: 2,
    name: "galaxy",
    category: "Mobile",
    price: 20000,
    color: "white",
  },
  {
    id: 3,
    name: "fridge",
    category: "appliances",
    price: 20000,
    color: "green",
  },
  {
    id: 4,
    name: "cooler",
    category: "appliances",
    price: 25000,
    color: "gray",
  },
];

app.get("/", (req, res) => {//browser se get request jata ha
    console.log("get endpoint");
    res.send("<h2>Default page GET</h2>");
  });
  
  app.post("/", (req, res) =>{
      console.log("post endpoint");
      res.send("<h2>Default page POST</h2>");
  })
  
  app.get("/login", (req, res) => {
    console.log("method", req.method);
    console.log("url", req.url);
    console.log("path", req.path);
    console.log("headers", req.headers);
    console.log("query", req.query);
    console.log(req);
    res.send("<h1>login page..</h1>");
  });
  
  app.get("/data", (req, res) => {
    console.log("data endpoint");
    res.send({ name: "Abhinav" });
  });
   
app.get("/products/:productId", (req, res) => {
    console.log("params", req.params);
// params property is an object that contains the properties which are mapped to the named route "parameters"
    const productItem = product.find((prd) => prd.id === Number(req.params.productId));
      console.log('productItem', productItem);
      if(productItem){
          res.send(productItem)
      }else{
          res.send({})
      }
  });

  
  // for querry parameters
  // http://localhost:5500/products?category=Mobile
  // http://localhost:5500/products?price=20000
  app.get("/products", (req, res) => {
    // console.log("params", req.params)
    // res.send(product)
    // console.log('query', req.query);
    const {category, price} = req.query;//destructuring
    console.log('category', category);
    console.log('price', price);

    if(category){
        const productList = product.filter((prd) => prd.category === category);
        res.send(productList);
    }
    if(price){
        const productList = product.filter((prd) => prd.price === Number(price));
        res.send(productList);
    }
    // refactor this logic
    // res.send(product);
});

  app.get('*',(req, res)=>{
    // console.log('not found page');
    res.send('<h3>Page not found !!</h3>');
})

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`express running at ${PORT}`);
})
*/

///////////////////////////////

/*
// http://localhost:5500/cart
// http://localhost:5500/coments
// http://localhost:5500/cart



// try this
// http://localhost:5500/products?price=20000&category=mobile
// result should be 
// {id: 2,
//     name: "galaxy",
//     category: "Mobile",
//     price: 20000,
//     color: "white
// }

// http://localhost:5500/products
// should return all products


//
// const userInfo = {
//     username: 'abhinav',
//     password: '12345'
// }

// fetch('https://myapi.com', {
//     method: POST,
//     body: JSON.stringify(userInfo),
// })

// axios.post('https://myapi.com', userInfo)
*/

//<==================End Of Lec9Feb27(line 31 se  222 tak isi index.js me code likha ha is lec me)===============>//

//<==================Lec10Feb28 Handling HTTP PUT Request, handling http delete request==========================>//
/*
const express = require("express");

const app = express();

// to get the data from client where body is in form of json
app.use(express.json());//iski wajah se jo tumne postman JSON data create kiya ha wo tymhare console me aayega

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());


const product = [
  {
    id: 1,
    name: "iphone 13",
    category: "Mobile",
    price: 50000,
    color: "black",
  },
  {
    id: 2,
    name: "galaxy",
    category: "Mobile",
    price: 20000,
    color: "white",
  },
  {
    id: 3,
    name: "fridge",
    category: "appliances",
    price: 20000,
    color: "green",
  },
  {
    id: 4,
    name: "cooler",
    category: "appliances",
    price: 25000,
    color: "gray",
  },
];

app.get("/", (req, res) => {//browser se get request jata ha
    console.log("get endpoint");
    res.send("<h2>Default page GET</h2>");
  });
  
  app.post("/", (req, res) =>{
      console.log("post endpoint");
      res.send("<h2>Default page POST</h2>");
  })
  
  app.get("/login", (req, res) => {
    console.log("method", req.method);
    console.log("url", req.url);
    console.log("path", req.path);
    console.log("headers", req.headers);
    console.log("query", req.query);
    console.log(req);
    res.send("<h1>login page..</h1>");
  });
  
  app.get("/data", (req, res) => {
    console.log("data endpoint");
    res.send({ name: "Abhinav" });
  });
   
app.get("/products/:productId", (req, res) => {
    console.log("params", req.params);//params { productId: '2' }
    const productItem = product.find((prd) => prd.id === Number(req.params.productId));
      console.log('productItem', productItem);
      if(productItem){
          res.send(productItem)
      }else{
          res.send({})
      }
  });

  // for querry parameters
  // http://localhost:5500/products?price=20000
  app.get("/products", (req, res) => {
    console.log('query', req.query);//query { price: '20000' }
    const {category, price} = req.query;//destructuring
    console.log('category', category);
    console.log('price', price);

    if(category){
        const productList = product.filter((prd) => prd.category === category);
        res.send(productList);
    }
    if(price){
        const productList = product.filter((prd) => prd.price === Number(price));
        res.send(productList);
    }
    // refactor this logic
    // res.send(product);
});

//sara code same ha upar wale code me jo kiya ha bs  yaha pe postman me naya json bana ke apne
//console aur postman me json data create kar rahe ha aur display kar rahe ha
// JSON data POSTMAN me create kiya ha wo tymhare console me aayega
// app.post("/products",(req, res)=>{
//   console.log('data in body', req.body)
//   res.send('product created successfully');
// })

//is code se tumhara naya added json data show karega in your Postman
app.post("/products",(req, res)=>{
  console.log('data in body', req.body);
  // data wont be persisted as we are storing the data in a variable
  product.push(req.body);
  res.send(product);
})

  app.get('*',(req, res)=>{
    console.log('not found page');
    res.send('<h3>Page not found !!</h3>');
})

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`express running at ${PORT}`);
})
*/

//
/*
const express = require("express");

const app = express();

// to get the data from client where body is in form of json
app.use(express.json());

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());//when to use urlencoded??

const product = [
  {
    id: 1,
    name: "iphone 13",
    category: "Mobile",
    price: 50000,
    color: "black",
  },
  {
    id: 2,
    name: "galaxy",
    category: "Mobile",
    price: 20000,
    color: "white",
  },
  {
    id: 3,
    name: "fridge",
    category: "appliances",
    price: 20000,
    color: "green",
  },
  {
    id: 4,
    name: "cooler",
    category: "appliances",
    price: 25000,
    color: "gray",
  },
];

app.get("/", (req, res) => {//browser se get request jata ha
    console.log("get endpoint");
    res.send("<h2>Default page GET</h2>");
  });
  
  app.post("/", (req, res) =>{
      console.log("post endpoint");
      res.send("<h2>Default page POST</h2>");
  })
  

  app.get("/login", (req, res) => {
    console.log("method", req.method);
    console.log("url", req.url);
    console.log("path", req.path);
    console.log("headers", req.headers);
    console.log("query", req.query);
    console.log(req);
    res.send("<h1>login page..</h1>");
  });
  
  app.get("/data", (req, res) => {
    console.log("data endpoint");
    res.send({ name: "Abhinav" });
  });

   
app.get("/products/:productId", (req, res) => {
    console.log("params", req.params);
    const productItem = product.find((prd) => prd.id === Number(req.params.productId));
      console.log('productItem', productItem);
      if(productItem){
          res.send(productItem)
      }else{
          res.send({})
      }
  });

  app.get("/products", (req, res) => {
    console.log('query', req.query);
    const {category, price} = req.query;//destructuring
    console.log('category', category);
    console.log('price', price);

    if(category){
        const productList = product.filter((prd) => prd.category === category);
        res.send(productList);
    }
    if(price){
        const productList = product.filter((prd) => prd.price === Number(price));
        res.send(productList);
    }
    // refactor this logic
    // res.send(product);
});

app.post("/products", (req, res)=>{
  console.log('data in body', req.body);
  // data wont be persisted as we are storing the data in a variable
  product.push(req.body);
  res.send(product);
})

//sara code upar ka same ha bs put patch seekha is code me
// put and patch are update operations
// put --> which we use to update the whole data by replacing the whole content
// put will create a new data or element if the updating element not found

//product updated ka text show hoga postman me
// app.put('/products/:id', (req, res) => {
//   console.log('params in put req', req.params);//req.params will give you object
//   res.send('product updated');
//   })

//apne json data ko update kiya id ke help se
// http://localhost:5500/products/2
// {
//   "id":2,
//   "name":"M2",
//   "category":"Mobile",
//   "price":25000,
//   "color":"black"
// }
app.put('/products/:id', (req, res) => {
  console.log('params in put req', req.params);
  console.log('updates value', req.body);
  //
  // product.forEach((el, index) => {
  //     if(el.id === Number(req.params.id)){
  //         product[index] = req.body
  //     }
  // })

  // find index of the element
  // product ke index ko is tarah se bhi update kar sakte ha
  const elementIndex = product.findIndex((el) => el.id === Number(req.params.id));
  // update the element at that index
  product[elementIndex] = req.body
  
  res.send(product);
})

//
// patch --> updates the only value passed in request data
//to change one value try to do yourself
app.patch('/products/:id', (req, res) => {
  console.log('params in put req', req.params);
  console.log('updates value', req.body);
  // find the index of element

  // update the only key in the element

})

app.delete('/products/:id', () => {
  console.log('params in delete req', req.params);
  
  // find the element using req.params and delete it

})

app.get("*",(req,res)=>{
  res.send('product creatd successfully')
})

  app.get('*',(req, res)=>{
    console.log('not found page');
    res.send('<h3>Page not found !!</h3>');
})

const PORT = 5500;
app.listen(PORT, () =>{
    console.log(`express running at ${PORT}`);
})
*/

//
// to get the data from client where body is in form of json
// app.use(express.json());

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());
// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());
/* <form action="https://myapi.com" method="POST">
    <input name="username"/>
    <input name="password"/>
    <input type="submit"/>
</form>
{
    username: 'abhinav',
    password: '12345'
} */




// fetch("https://myapi.com", {
//     method: "post",
//     body: JSON.stringify()
// })
// .then((resp) => {
//     return resp.json()
// })

/*
//api clculator assignements
// assignments
app.post('/divide', (req, res) => {
  const {num1, num2} = req.body
  // check the types of num1 and num2
  // send response accordingly
  
  // check if the values of num1 and num2 are more than 10 lakhs
  // or value of sum is more than 10 lakhs 
  // message should be "overflow"
  

  // check if the values of num1 and num2 are less than 10 lakhs
  // or value of res is less than 10 lakhs 
  // message should be "underflow"

  if(num2 === 0){
      res.send({
          status: 'error',
          message: "Cannot divide by zero"
      })
  }else{
      res.send({
          status: "success",
          message: "The division of given numbers",
          result: num1/num2
      })
  }
})
*/
//<====================================== End of: Lec10Feb28 ============================================>/

// <===============Lec11March1: Building Restful API using Express-CRUD for Ecommerce API===============>//
//PATCH aur DELETE ka code likha
/*
const express = require("express");
const app = express();

// to get the data from client where body is in form of json
app.use(express.json());

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());

const product = [
  {
    id: 1,
    name: "iphone 13",
    category: "Mobile",
    price: 50000,
    color: "black",
  },
  {
    id: 2,
    name: "galaxy",
    category: "Mobile",
    price: 20000,
    color: "white",
  },
  {
    id: 3,
    name: "fridge",
    category: "appliances",
    price: 20000,
    color: "green",
  },
  {
    id: 4,
    name: "cooler",
    category: "appliances",
    price: 25000,
    color: "gray",
  },
];

app.get("/", (req, res) => {
  console.log("get endpoint");
  res.send("<h2>Default page GET</h2>");
});

app.post("/", (req, res) =>{
    console.log("post endpoint");
    res.send("<h2>Default page POST</h2>");
})

app.get("/login", (req, res) => {
  console.log("method", req.method);
  console.log("url", req.url);
  console.log("path", req.path);
  console.log("headers", req.headers);
  console.log("query", req.query);
  console.log(req);
  res.send("<h1>login page..</h1>");
});

app.get("/data", (req, res) => {
  console.log("data endpoint");
  res.send({ name: "Abhinav" });
});

app.get("/products/:productId", (req, res) => {
  console.log("params", req.params);
  const productItem = product.find((prd) => prd.id === Number(req.params.productId));
    console.log('productItem', productItem);
    if(productItem){
        res.send(productItem)
    }else{
        res.send({})
    }
});

app.get("/products", (req, res) => {
    console.log('query', req.query);
    const {category, price} = req.query;
    console.log('category', category);
    console.log('price', price);

    if(category){
        const productList = product.filter((prd) => prd.category === category);
        res.send(productList);
    }
    if(price){
        const productList = product.filter((prd) => prd.price === Number(price));
        res.send(productList);
    }
    // refactor this logic
    res.send(product);
});

app.post("/products", (req, res) => {
    console.log('data in body', req.body);
    // data wont be persisted as we are storing the data in a variable
    product.push(req.body)
    res.send(product);
})

// put and patch are update operations
// put --> which we use to update the whole data by replacing the whole content
// put will create a new data or element if the updating element not found

app.put('/products/:id', (req, res) => {
    console.log('params in put req', req.params);
    console.log('updates value', req.body);
    // product.forEach((el, index) => {
    //     if(el.id === Number(req.params.id)){
    //         product[index] = req.body
    //     }
    // })

    // find index of the element
    const elementIndex = product.findIndex((el) => el.id === Number(req.params.id));
    // update the element at that index
    product[elementIndex] = req.body
    res.send(product);
})

//sara code same ha bs yaha patch aur delete ka code likha
// patch --> updates the only value passed in request data
app.patch('/products/:id', (req, res) => {
    console.log('params in put req', req.params);
    console.log('updates value', req.body);
    // find the index of element
    const elementIndex = product.findIndex (
      (el) => el.id === Number(req.params.id)
    );
    // update the only key in the element
    if (elementIndex !== -1)
 product [elementIndex] = {...product[elementIndex], ...req.body};//
res.send(product)
})


//http://localhost:5500/products/3 maine id:3 delete kiya 
app.delete('/products/:id', (req,res) => {
    console.log('params in delete req', req.params);
    // find the element using req.params and delete it
    const elementIndex = product.findIndex(
      (el) => el.id === Number(req.params.id)
    );
    if(elementIndex !== -1) product.splice(elementIndex, 1)//splice make changes in the same array whereas slice return new array
res.send(product);

})

app.get("*", (req, res) => {
  console.log("not found page");
  res.send("<h3>Page Not Found !!</h3>");
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`express server running at ${PORT}`);
});
*/

// <===============End of Lec11March1===============>//
//iske baad middleware padha
//Express-V2 ka folder banaya usme index aur middleware ka file banaya
//npm i nodemon --save-dev
//npm i express commond use kiya use file me
//phele Express-V2 me index js me route banaya fir Express-V2 me Middleware me code likha
//MIDDLEWARE
// middleware is a piece of code that is used in between request and response
//middleware functions are functions that have access to the request object, response object, and the next function in the application
// request response cycle

// to get the data from client where body is in form of json
// app.use(express.json());

// to get the data from a form which will have the format as urlencoded
// app.use(express.urlencoded());//when to use urlencoded??);
