const getUsers = require("../utils/utilsUser");


userValidation = {
    isAdmin: (req, res, next) => {
        const id = req.session.idUserLogueado;
        const users = getUsers.getUsers();
        const loggedUserAdmin = users.find((user) => {
            return user.id == id;
        });
        loggedUserAdmin.category == 'admin' ? req.userAdmin = true : req.userAdmin = false;
        next ();
    },
    adminViews: (req, res, next) =>  {
        const id = req.session.idUserLogueado;
        const users = getUsers.getUsers();
        const loggedUserAdmin = users.find((user) => {
            return user.id == id;
        });
        if (loggedUserAdmin.category !== 'admin') {
            return res.redirect ('/');
        } 
        next();
    }
}
module.exports = userValidation;