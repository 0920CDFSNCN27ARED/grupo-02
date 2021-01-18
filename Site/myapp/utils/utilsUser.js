const fs = require('fs');

module.exports = {
    getUsers: () => {
        return JSON.parse(fs.readFileSync(__dirname + '/../data/users.json', {encoding: 'utf-8'}));
    },
    addUser: (newUser)=>{
        fs.writeFileSync(__dirname + '/../data/users.json',JSON.stringify(newUser,null, 4));
    },
}

