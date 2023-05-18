const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const routeFiles = fs
    .readdirSync(__dirname + '/../routes/')
    .filter(file => file.endsWith('.js'));

let server;
const routes = [];

const expressService = {
    init: async () => {
        try {
            for (const file of routeFiles) {
                const route = await import(`../routes/${file}`);
                const routeName = Object.keys(route)[0];
                routes.push(route[routeName])
            }

            server = express();
            server.use(bodyParser.json());
            server.use(routes);
            server.listen(process.env.SERVER_PORT);
            console.log('[SUCCESS] Express server initialized on port:', process.env.SERVER_PORT);
        } catch (error) {
            console.log("[ERROR] Express server initialization Error", error);
        }
    }
};

module.exports = expressService;
