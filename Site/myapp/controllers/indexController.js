let indexController = {
    getIndex: (req,res)=>{
        res.render('index', {user: req.loggedUser});
    },
};

module.exports = indexController;