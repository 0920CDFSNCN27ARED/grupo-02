const getUsers = require("../utils/utilsUser");

function authenticate (req, res, next) {
    const id = req.session.idUserLogueado;

    if (!id) return next();

    const users = getUsers.getUsers();

    const loggedUser = users.find((user) => {
        return user.id == id;
    });

    if (!loggedUser) {
        delete req.session.idUserLogueado;
        return next();
    }

    req.loggedUser = loggedUser;

    next();
}

module.exports = authenticate;