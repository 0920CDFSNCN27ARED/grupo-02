const db = require('../../database/models')

module.exports = {
    products: async (req,res)=>{
        const count = await db.Products.count();
        const page = req.query.page ? req.query.page : 0;
        const products = await db.Products.findAll({
            order: [['id', 'DESC']],
            offset: page * 3,
            limit: 3
        })
        res.send({
            meta: {
                url: req.originalUrl,
                status: 200,
                total_count: count
            },
            data: products
        })
    },
    offers: (req, res)=>{
        res.send('No hay ofertas por ahora :(')
    },
}
