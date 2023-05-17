const { DataTypes } = require('sequelize');

const sequelize = require('../utils/db');

const Publication = sequelize.define('Publication' , {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teaser: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tags: {
        type: DataTypes.JSON,
        allowNull: true
    },
    creatorId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uri: {
        type: DataTypes.STRING,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = Publication;
