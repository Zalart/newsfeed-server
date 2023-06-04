const { DataTypes, Model } = require("sequelize");

class Publication extends Model {
  static initializeModel(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        teaser: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
      }
    );
    return this;
  }
  static associate(models) {
    this.User = this.belongsTo(models.User, {
      constraints: true,
      onDelete: "CASCADE",
    });
    this.Category = this.belongsTo(models.Category);
    this.Tag = this.belongsToMany(models.Tag, { through: "PublicationTags" });
  }
}

module.exports = Publication;
