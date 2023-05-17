const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('newsfeed', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
