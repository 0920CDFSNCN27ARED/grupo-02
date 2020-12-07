const fs = require('fs');
let products = JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', {encoding: 'utf-8'}));

let productController = {
    getAll:()=>{
        return products;
    },
    getProduct: (req,res)=>{
        res.render('product');
    },
};

module.exports = productController;