const db = require('../../database/models')

module.exports = {
    products: async (req,res)=>{
        const count = await db.Products.count();
        const page = req.query.page ? Number(req.query.page) : 0;
        const products = await db.Products.findAll({
            order: [['id', 'DESC']],
            offset: page * 10,
            limit: 10,
        });

        const nextPage = count <= (page + 10) ? null : req.baseUrl + `?page=${ page + 1}`;
        const prevPage = page == 0 ? null : req.baseUrl + `?page=${ page - 1}`;

        for(let i = 0; i < products.length; i++){
            products[i].dataValues.detail = '/api/products/' + products[i].dataValues.id
            products[i].dataValues.image_name = 'localhost:3000/images/products-images/' + products[i].dataValues.image_name.replace(' ', '%');
        }

        res.send({
            meta: {
                url: req.originalUrl,
                status: 200,
                nextPage: nextPage,
                prevPage: prevPage,
                total_count: count
            },
            data: products
        })
    },
    detail: async (req, res)=>{
        const product = await db.Products.findByPk(req.params.id);
        product.dataValues.image_name = 'localhost:3000/images/products-images/' + product.dataValues.image_name.replace(' ', '%');

        res.send({
            meta: {
                url: req.originalUrl,
                status: 200,
            },
            data: { product }
        })
    },
    count: async (req, res) => {
        res.set({
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3001",
        })
        const count = await db.Products.count();
        const products = await db.Products.findAll();
        const totalPrice = products.reduce((acc, prod) => {
            return acc + Number(prod.price);
        }, 0);
        res.send({
            count,
            totalPrice,
        })
    },
}
