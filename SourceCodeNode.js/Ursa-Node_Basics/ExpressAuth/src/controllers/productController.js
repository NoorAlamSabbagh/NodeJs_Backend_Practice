// <======================Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>

const getProducts = (req, res) => {
  // res.sendFile(
  //     "D:\\Newton\\Backend\\SourceCodeNode.js\\Ursa-Node_Basics\\ExpressAuth\\src\\views\\home.html"
  //     )

  //
  //    Better way
    // res.sendFile("src/views/home.html", { root: process.env.BASE_PATH });

    //
    const productInfo = {
      name: 'Samsung TV',
      price: 20000,
      type: 'appliances',
      size: 32
    }
    res.render('home/homeP.pug', productInfo)
  }
const getCart = (req, res) => {
  // res.sendFile(
  //     "D:\\Newton\\Backend\\SourceCodeNode.js\\Ursa-Node_Basics\\ExpressAuth\\src\\views\\cart.html"
  //     )

  //
  // res.sendFile("src/views/cart.html", { root: process.env.BASE_PATH });

  res.render('about/about.pug')
};


module.exports = { getProducts, getCart };


// <======================END: Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>
