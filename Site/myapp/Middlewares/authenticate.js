const { getUsers } = require("../utils/utilsUser");

function authenticate (req,res,next){
    const id = req.session.loggedUserId;

    const users = getUsers ();

    const loggedUser = users.find((user)=>{
        return user.id == id;

    });

    if (!loggedUser){
        delete req.session.loggedUserId;
        return next();
    }
    req.loggedUser = loggedUser;
    next();
}

module.exports = authenticate;