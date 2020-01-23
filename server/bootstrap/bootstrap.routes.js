const path = require('path');
const express = require('express')

const indexRoute = require('../routes/route.index');

module.exports = app => {
    app.use('/', indexRoute);
    app.use(express.static(path.resolve(process.cwd(), 'public'), {fallthrough: false}));
}