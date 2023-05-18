const {DataTypes, Model} = require('sequelize');

class Publication extends Model {
    static initializeModel(sequelize) {
        super.init(
            {
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
            },
            {
                sequelize,
                timestamps: true
            }
        );
        return this;
    }
    static associate(models) {

    }
}

module.exports = Publication;
