const db = require("../database/models");

function rememberMiddleware (req, res, next){
    next();
    if (req.body.remember != undefined && req.session.idUserLogueado == undefined){
        db.Users.findOne({
            where: {
                email: req.body.email
            } 
        })
        .then(function(usuario){
            if (usuario.email == req.cookie.email){
                idUserLogueado = usuario;
                break;
            }
            req.session.idUserLogueado = idUserLogueado
        });
    };
}
module.exports = rememberMiddleware;