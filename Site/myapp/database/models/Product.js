module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.TEXT,
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },
        image_name: {
            type: dataTypes.STRING,
        },
        category: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };
    const Products = sequelize.define(alias, cols, config);

    Products.associate = function(models){
        Products.belongsToMany(models.Sales, {
            as: 'productos_ventas',
            through: 'sales_products',
            foreignKey: 'product_id',
            otherKey: 'sale_id',
            timestamps: false
        })
    }

    return Products;
}