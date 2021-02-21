module.exports = (sequelize, dataTypes) => {
    let alias = 'Sales';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        payment_method_id: {
            type: dataTypes.INTEGER,
        },
        price: {
            type: dataTypes.DECIMAL,
        },
        quantity: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'sales',
        timestamps: false
    };
    const Sales = sequelize.define(alias, cols, config);

    Sales.associate = function (models){
        Sales.belongsTo(models.Methods, {
            as: 'medios_de_pago',
            foreignKey: 'payment_method_id',
        })
        Sales.belongsTo(models.Users, {
            as: 'usuario_comprador',
            foreignKey: 'user_id'
        })
        Sales.belongsToMany(models.Products, {
            as: 'venta_productos',
            through: 'sales_products',
            foreignKey: 'sale_id',
            otherKey: 'product_id',
            timestamps: false
        })
    };
    return Sales;
}