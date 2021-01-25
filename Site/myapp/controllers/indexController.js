let indexController = {
    getIndex: (req,res)=>{
        res.render('index', {user: req.session.usuarioLogueado});
    },
};

module.exports = indexController;