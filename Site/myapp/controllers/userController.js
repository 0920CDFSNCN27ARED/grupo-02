let userController = {
    getLogin: (req,res)=>{
        res.render('login');
    },
    getRegister: (req,res)=>{
        res.render('register');
    },
}

module.exports = userController;