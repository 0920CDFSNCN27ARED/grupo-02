const fs = require('fs');
const getProduct = require('../utils/getProducts');
const path = require('path');
let productController = {
    getProduct: (req,res)=>{
        const products = getProduct.getProducts();
        res.render('products/product', {products: products});
    },
    getProductDetail: (req, res)=>{
        const products = getProduct.getProducts();
        const product = products.find((prod)=>{
            return prod.id == req.params.id
        });
        (!product) ? res.send('Error <404> No se encontró el producto solicitado') : res.render('products/productDetail',{products: product});
    },
    newProductForm: (req, res)=>{
        res.render('products/new-Product');
    },
    newProductPost: (req, res, next) => {
        let productos = getProduct.getProducts();
        let newProduct = {
            id: productos[productos.length -1].id + 1,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.files[0].filename,
            category: req.body.category
        };
        productos.push(newProduct);
        getProduct.addProduct(productos);
        res.redirect('/product/newProduct');
    },
    editProductForm: (req, res) => {
        const products = getProduct.getProducts();
        const product = products.find((prod)=>{
            return prod.id == req.params.id
        });
        if (!product){
            res.status(404).send('Error <404> No se encontró el producto solicitado')
        }else{
            res.render('products/edit-product',{products: product});
        }
    },
    updateProduct: (req,res, next) => {
        const products = getProduct.getProducts();
        for (let i = 0; products.length; i++) {
            if (req.body.id == products[i].id) {
                products[i].name = req.body.name;
                products[i].description = req.body.description;
                products[i].price = req.body.price;
                products[i].category = req.body.category;
                const filename =  typeof(req.files[0]) === "undefined" ? products[i].image : req.files[0].filename;
                const ruta = path.join(__dirname,'/../public/images/products-images',products[i].image);
                if (products[i].image != filename){
                    fs.unlinkSync(ruta);
                }
                products[i].image = filename;
                console.log(req.files[0]);
                getProduct.updateProduct(products);
                return res.redirect('/product')
            } 
        }
    },
    getDelete: (req, res) =>{
        const products = getProduct.getProducts();
        const product = products.find((prod)=>{
            return prod.id == req.params.id
        });

        res.render('products/delete',{products: product});
    },
    deleteProduct: (req, res) => {
        let products = getProduct.getProducts();
        products = products.filter(producto => {
            return producto.id != req.params.id
        });
        getProduct.updateProduct(products);

        return res.redirect('/product');
    },
};
module.exports = productController;