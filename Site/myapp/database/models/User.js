const { DataTypes } = require('sequelize/types');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        first_name: {
            type: dataTypes.STRING(40),
        },
        last_name: {
            type: dataTypes.STRING(40),
        },
        email: {
            type: dataTypes.STRING(40),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        category_id: {
            type: dataTypes.INTEGER,
            /*references: {
            model: 'Categories',
            key: 'id'
            }*/
        },
        image_name: {
            type: dataTypes.STRING(100),
        },
    };
    let config = {
        tableName: 'users',
        timestamps: false
    };
    const Users = sequelize.define(alias, cols, config);

    Users.associate = function (models){
        Users.belongsTo(models.Categories, {
            as: 'categoria_de_usuario',
            foreignKey: 'category_id',
        })
        Users.hasMany(models.Sales, {
            as: 'usuarios_ventas',
            foreignKey: 'user_id'
        })
    };

    return Users;
}