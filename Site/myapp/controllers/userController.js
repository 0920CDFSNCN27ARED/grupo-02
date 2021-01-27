const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
const utilsUser = require('../utils/utilsUser');

let userController = {
    getLogin: (req,res)=>{
        res.render('users/login2', {user: req.loggedUser});
    },
    processLogin: (req, res) =>{
        const errors = validationResult(req);
        if (errors.isEmpty()){
            let usersJSON = utilsUser.getUsers();
            let users;
            let idUserLogueado;
            if (usersJSON == ''){
                users = [];
            } else {
                users = usersJSON;
            }
            for (let i=0; i < users.length; i++){
                if (users[i].email == req.body.email){
                    if(bcrypt.compareSync(req.body.password, users[i].password)){
                        idUserLogueado = users[i].id;
                        break;
                    } 
                } 
            }
            if (idUserLogueado == undefined){
                return res.render ('users/login2', {errors: [
                    {msg: 'Credenciales inválidas'}
                ]});
            } 
            req.session.idUserLogueado  = idUserLogueado;
            return res.redirect ('/');
        } else {
            return res.render ('users/login2', {errors: errors.errors});
        }
    },
    getRegister: (req,res)=>{
        res.render('users/register', {user: req.loggedUser});
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