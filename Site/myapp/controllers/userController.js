let userController = {
    getLogin: (req,res)=>{
        res.render('users/login2');
    },
    getRegister: (req,res)=>{
        res.render('users/register');
    },
}

module.exports = userController;