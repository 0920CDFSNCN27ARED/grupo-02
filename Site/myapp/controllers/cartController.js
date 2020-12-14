let cartController = {
    getCart: (req,res)=>{
        res.render('products/cart');
    },
};

module.exports = cartController;