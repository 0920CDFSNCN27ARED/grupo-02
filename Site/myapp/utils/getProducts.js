const fs = require('fs');
let getProducts = function getProducts (){
    return JSON.parse(fs.readFileSync(__dirname + '/../data/products.json', {encoding: 'utf-8'}));
};

module.exports = getProducts;



