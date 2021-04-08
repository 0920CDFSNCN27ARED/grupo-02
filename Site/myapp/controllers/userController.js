const bcrypt = require('bcrypt');
const {check, validationResult, body} = require('express-validator');
/* const utilsUser = require('../utils/utilsUser'); */ /* JSON de usuarios, se migró a la DB*/
const db = require('../database/models');

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
                        {msg: 'Las credenciales no coinciden'}
                    ]});
                }
                req.session.idUserLogueado  = idUserLogueado;
                if (req.body.remember != undefined){
                    res.cookie('remember', idUserLogueado, {
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
                category_id: 2,
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
        res.clearCookie('remember');
        res.redirect('/');
    },
    profile: (req,res) => {
        return res.render ('users/profile',{user: req.loggedUser})
    },
    profileEdit: (req,res) => {
        return res.render ('users/profileEdit',{user: req.loggedUser})
    },
    updateUser: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.render ('users/profileEdit', {errors: errors.errors, user: req.loggedUser})
        } else {

        }
        console.log(req.params.id);
            const Users = db.Users;
            const id = req.params.id;
            Users.update (
                {
                    first_name: req.body.name,
                    last_name: req.body.last_name,
                },
                { where: { id: id } }, 
            );
        return res.redirect ('/user/profile')
    },
    deleteUser: async (req, res) => {
        await db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
        return res.redirect('/user/login');
    }
}

module.exports = userController;