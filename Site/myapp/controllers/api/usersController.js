const db = require('../../database/models')
const path = require('path');

module.exports = {
    user: async (req, res) =>{
        const count = await db.Users.count();
        const page = req.query.page ? req.query.page : 0;
        const users = await db.Users.findAll({
            order: [['id', 'DESC']],
            offset: page * 10,
            limit: 10,
        });
        const nextPage = count <= (page + 10) ? null : req.baseUrl + `?page=${ page + 1}`;
        const prevPage = page == 0 ? null : req.baseUrl + `?page=${ page - 1}`;

        for(let i = 0; i < users.length; i++){
            delete users[i].dataValues.password;
            delete users[i].dataValues.category_id;
            delete users[i].dataValues.last_name;
            delete users[i].dataValues.image_name;
            users[i].dataValues.detail = '/api/users/' + users[i].dataValues.id;
        };
        res.send({
            meta:{
                url: req.originalUrl,
                status: 200,
                nextPage: nextPage,
                prevPage: prevPage,
                total_count: count,
            },
            data:{ users }
        })
    },
    detail: async (req, res)=>{
        const user = await db.Users.findByPk(req.params.id);
        const userImg = user.dataValues.image_name;
        user.dataValues.image_name = 'localhost:3000/images/users/' + userImg;
        delete user.dataValues.password;
        delete user.dataValues.category_id;

        res.send({
            meta: {
                url: req.originalUrl,
                status: 200,
            },
            data:{ user }
        })
    },
}