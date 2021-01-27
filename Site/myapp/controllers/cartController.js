let cartController = {
    getCart: (req,res)=>{
        res.render('products/cart', {user: req.loggedUser});
    },
};

module.exports = cartController;