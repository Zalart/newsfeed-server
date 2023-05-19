const {DataTypes, Model} = require('sequelize');

class Publication extends Model {
    static initializeModel(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true
                },
                date: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW
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
                // tags: {
                //     type: DataTypes.JSON,
                //     allowNull: true
                // },
                // uri: {
                //     type: DataTypes.STRING,
                //     allowNull: false
                // },
                active: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: true,
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
        this.belongsTo(models.User);
        this.belongsTo(models.Category)
        this.belongsToMany(models.Tag, { through: 'PublicationTags'})
    }
}

module.exports = Publication;
