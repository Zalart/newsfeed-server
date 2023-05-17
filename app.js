const http = require('http');

const express = require('express');

const app = express();

const authRoutes = require('./routes/auth');
const publicationRoutes = require('./routes/publication');

app.use('/auth', authRoutes);
app.use('/feed', publicationRoutes);

const server = http.createServer(app)

server.listen(3000)
