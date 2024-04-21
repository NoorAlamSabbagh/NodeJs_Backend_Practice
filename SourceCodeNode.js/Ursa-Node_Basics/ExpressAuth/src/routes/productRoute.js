// <======================Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>
const {Router} = require('express');
const router = Router();

const { getProducts, getCart } = require('../controllers/productController');


router.get('/', getProducts);
router.get('/cart', getCart);

module.exports = router















// <======================END: Lec24 March19: SSR  using Templates Engines, handling unhandled rejections And CSR ================>