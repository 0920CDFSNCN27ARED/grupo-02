module.exports = (sequelize, dataTypes) => {
    let alias = 'Methods';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        method: {
            type: dataTypes.STRING(40)
        },
    };
    let config = {
        tableName: 'payment_method',
        timestamps: false
    };
    const Methods = sequelize.define(alias, cols, config);

    Methods.associate = function (models){
        Methods.hasMany(models.Sales, {
            as: 'pagos',
            foreignKey: 'payment_method_id',
        })
    }

    return Methods;
}