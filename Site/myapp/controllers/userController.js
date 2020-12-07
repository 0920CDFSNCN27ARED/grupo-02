let userController = {
    getLogin: (req,res)=>{
        res.render('login2');
    },
    getRegister: (req,res)=>{
        res.render('register');
    },
}

module.exports = userController;