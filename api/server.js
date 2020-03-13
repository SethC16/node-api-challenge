const express = require('express');

const server = express();

const actionRouter = require('../router/actionRouter')
const projectRouter = require('../router/projectRouter')

server.use(logger);
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Lets get these CRUDs handled!</h2>`)
})

function logger(req, res, next) {
    const method = req.method;
    const endpoint = req.originalUrl;

    console.log(`${method} to ${endpoint}`)

    next()
}

module.exports = server;