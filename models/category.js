const {DataTypes, Model} = require('sequelize');

class Category extends Model {
    static initializeModel(sequelize) {
        super.init({
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true
                },
                title: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            },
            {
                sequelize
            })
        return this;
    }

    static associate(models) {
        this.hasMany(models.Publication)
    }
}

module.exports = Category;
