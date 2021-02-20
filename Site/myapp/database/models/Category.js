const { DataTypes } = require('sequelize/types');

module.exports = (sequelize, DataTypes) => {
    let alias = 'Categories';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING
        },
    };
    let config = {
        tableName: 'users_category',
        timestamps: false
    };
    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models){
        Category.hasMany(models.Users, {
            as: 'usuarios',
            foreignKey: 'category_id',
        })
    }

    return Category;
}