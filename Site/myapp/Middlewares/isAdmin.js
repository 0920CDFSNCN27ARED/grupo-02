const db = require('../database/models');

userValidation = {
    isAdmin: (req, res, next) => {
        const id = req.session.idUserLogueado;
        if (!id) return next();
        db.Users.findByPk(id)
        .then(function(usuario){
            usuario.category_id == 1 ? req.userAdmin = true : req.userAdmin = false;
            next ();
        })
    },
    adminViews: (req, res, next) =>  {
        const id = req.session.idUserLogueado;
        db.Users.findByPk(id)
        .then(function(usuario){
            if (usuario.category_id !== 1 ) {
                return res.redirect ('/');
            }
            next();
        })
        
    }
}
module.exports = userValidation;