const { Sequelize } = require('sequelize');
const config = require('./db');

console.log(config);

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: config.logging
    }
);

module.exports = sequelize ;
