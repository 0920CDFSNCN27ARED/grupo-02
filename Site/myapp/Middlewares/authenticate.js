const db = require('../database/models');

function authenticate (req, res, next) {
    const id = req.session.idUserLogueado;

    if (!id) return next();
    
    db.Users.findByPk(id)
    .then(function(usuario){
        req.loggedUser = usuario;
        next();
    })
    .catch(function(error){
        delete req.session.idUserLogueado;
        return next();
    })
}

module.exports = authenticate;