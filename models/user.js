const {DataTypes, Model} = require('sequelize');

class User extends Model {
    static initializeModel(sequelize) {
        super.init({
                id: {
                    type: DataTypes.UUID,
                    allowNull: false,
                    defaultValue: DataTypes.UUIDV4,
                    primaryKey: true
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: true
                }
            }, {
                sequelize,
                timestamps: true
            }
        );
        return this;
    }

    static associate(models) {
        this.hasMany(models.Publication);
    }
}

module.exports = User;
