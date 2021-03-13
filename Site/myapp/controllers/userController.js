const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
/* const utilsUser = require('../utils/utilsUser'); */ /* JSON de usuarios, se migró a la DB*/
const db = require("../database/models");

let userController = {
    getLogin: (req,res)=>{
        res.render('users/login2', {user: req.loggedUser});
    },
    processLogin: (req, res) =>{
        const errors = validationResult(req);
        /*if (errors.isEmpty()){
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
                return res.render ('users/login2', {user: req.user, errors: [
                    {msg: 'Credenciales inválidas'}
                ]});
            } 
            req.session.idUserLogueado  = idUserLogueado;
            return res.redirect ('/');
        } else {
            return res.render ('users/login2', {errors: errors.errors, user: req.user});
        };*/
            db.Users.findOne({
                where: {
                    email: req.body.email
                } 
            })
            .then(function(usuario){
                let idUserLogueado;
                if(bcrypt.compareSync(req.body.password, usuario.password)){
                    idUserLogueado = usuario.id;
                } else {
                    return res.render ('users/login2', {user: req.user, errors: [
                        {msg: 'Contraseña incorrecta'}
                    ]});
                }
                req.session.idUserLogueado  = idUserLogueado;
                if (req.body.remember != undefined){
                    res.cookie("remember", idUserLogueado, {
                        maxAge: 120000,
                    })
                }
                return res.redirect ('/');
            })
            .catch(function(error){
                return res.render ('users/login2', {errors: errors.errors, user: req.user})
            })
    },
    getRegister: (req,res)=>{
        res.render('users/register', {user: req.loggedUser});
    },
    postRegister: (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render ('users/register', {errors: errors.errors, user: req.loggedUser})
        } else {
                db.Users.create({
                first_name: req.body.name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category_id: 1,
                image_name: req.files[0].filename
            });
            res.redirect('/user/login');
        }
        
        /*let users = utilsUser.getUsers();
        let newUser = {
            id: users[users.length -1].id + 1,
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            category: 2,
            image: req.files[0].filename,
        };
        users.push(newUser);
        utilsUser.addUser(users);*/
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("remember");
        res.redirect("/");
    },
}

module.exports = userController;