const bcrypt = require('bcrypt');
const utilsUser = require('../utils/utilsUser');

let userController = {
    getLogin: (req,res)=>{
        res.render('users/login2');
    },
    getRegister: (req,res)=>{
        res.render('users/register');
    },
    postRegister: (req, res, next)=>{
        let users = utilsUser.getUsers();
        let newUser = {
            id: users[users.length -1].id + 1,
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            category: 'user',
            image: req.files[0].filename,
        };
        users.push(newUser);
        utilsUser.addUser(users);
        return res.redirect('/user/login');
    },
}

module.exports = userController;