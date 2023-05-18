require('dotenv/config');

module.exports = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST
};
