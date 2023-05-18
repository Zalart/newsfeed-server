const dotenv = require('dotenv');

const expressService = require('./services/express.service');
const sequelizeService = require('./services/sequelize.service');

dotenv.config();

(async () => {
    try {
        await expressService.init();
        await sequelizeService.init();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})()
