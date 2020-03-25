'use strict';

require('dotenv').config()

const express = require('express');
const bootstrap = require('./bootstrap');

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // App
    const app = express();
    bootstrap(app);
    app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST);
    console.log(`Running on http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
}



