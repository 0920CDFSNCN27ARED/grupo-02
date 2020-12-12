const getProduct = require('../utils/getProducts');
let productController = {
    getProduct: (req,res)=>{
        const products = getProduct();
        res.render('product', {products: products});
    },
};

module.exports = productController;