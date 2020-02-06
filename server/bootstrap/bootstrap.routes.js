const path = require('path');
const express = require('express')

//const indexRoute = require('../routes/route.index');
const apiRoute = require('../routes/route.api');

module.exports = app => {
    //app.use('/', indexRoute);
    app.use('/api', apiRoute);
    //app.use(express.static(path.resolve(process.cwd(), 'public'), {fallthrough: false}));
}