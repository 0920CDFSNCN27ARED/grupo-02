const fs = require('fs');
let JSONProducts= {
    getProducts: ()=>{
        return JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', {encoding: 'utf-8'}));
    },
    addProduct: (newProduct)=>{
        fs.writeFileSync(__dirname + '/../data/products.json',JSON.stringify(newProduct,null, 4));
    }
}
module.exports = JSONProducts;