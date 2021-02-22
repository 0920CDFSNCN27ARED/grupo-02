function isLogged (req, res, next){
    const id = req.session.idUserLogueado;
    if (!(!id || id == undefined)) {
        return res.redirect ('/');
    } else {
        next ();
    }
}
module.exports = isLogged;