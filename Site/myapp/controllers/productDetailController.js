const fs = require('fs');
let products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', {encoding: 'utf-8'}));

let productDetailController = {
    getAll:()=>{
        return products;
    },
    getProduct: (req,res)=>{
        res.render('productDetail');
    },
    editProductForm:(req,res)=>{
        res.render('editProduct')
    },
};

module.exports = productDetailController;