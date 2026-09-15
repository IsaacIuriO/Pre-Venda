const { DataTypes, Model } = require('sequelize');

const sequelize = require('../database/dbconfig');

class Interessados extends Model{}

Interessados.init(
{
    username:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    email:
    {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {isEmail:true}
    },

    telephone:
    {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isTelephone:true}
    },
    
    quantity:
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    notifications:
    {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'Interessados',     
    tableName: 'interessados'
});

module.exports = Interessados;
