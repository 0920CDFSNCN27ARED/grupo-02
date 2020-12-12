const { fstat } = require('fs');
const getProduct = require('../utils/getProducts');
let productController = {
    getProduct: (req,res)=>{
        const products = getProduct.getProducts();
        res.render('product', {products: products});
    },
    getProductDetail: (req, res)=>{
        const products = getProduct.getProducts();
        const product = products.find((prod)=>{
            return prod.id == req.params.id
        });
        (!product) ? res.send('Error <404> No se encontró el producto solicitado') : res.render('productDetail',{products: product});
    },
    newProductForm: (req, res)=>{
        res.render('new-Product');
    },
    newProductPost: (req, res) => {
        let productos = getProduct.getProducts();
        let newProduct = {
            id: productos[productos.length -1].id + 1,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            category: req.body.category
        };
        productos.push(newProduct);
        getProduct.addProduct(productos);
        res.redirect('/product/newProduct');
    },
};

module.exports = productController;