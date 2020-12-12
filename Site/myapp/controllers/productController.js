const getProduct = require('../utils/getProducts');
let productController = {
    getProduct: (req,res)=>{
        const products = getProduct();
        res.render('product', {products: products});
    },
    getProductDetail: (req, res)=>{
        const products = getProduct();
        const product = products.find((prod)=>{
            return prod.id == req.params.id
        });
        if(!product){
            res.send('Error <404> No se encontró el producto solicitado')
        }else{
            res.render('productDetail',{products: product})
        }
    },
};

module.exports = productController;