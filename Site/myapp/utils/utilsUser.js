const fs = require('fs');
const db = require('../database/models');

module.exports = {
    getUsers: () => {
        db.Users.findAll()
        .then(function(usuarios){
            return usuarios;
        })
    },
    addUser: (newUser)=>{
        fs.writeFileSync(__dirname + '/../data/users.json',JSON.stringify(newUser,null, 4));
    },
}