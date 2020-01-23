'use strict';

const express = require('express');
const bootstrap = require('./bootstrap');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
bootstrap(app);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);