const fs = require("fs");

const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db");

const modelFiles = fs
  .readdirSync(__dirname + "/../models/")
  .filter((file) => file.endsWith(".js"));

const sequelizeService = {
  init: async () => {
    try {
      const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        dbConfig
      );
      // first load models
      for (const file of modelFiles) {
        const model = await import(`../models/${file}`);
        model.default.initializeModel(sequelize);
      }

      // then associate them
      modelFiles.map(async (file) => {
        const model = await import(`../models/${file}`);
        model.default.associate && model.default.associate(sequelize.models);
      });

      // await sequelize.sync({ force: true });
      await sequelize.sync();

      console.log("[SEQUELIZE] Database service initialized");
    } catch (error) {
      console.log("[SEQUELIZE] Error during database service initialization");
      throw error;
    }
  },
};
module.exports = sequelizeService;
