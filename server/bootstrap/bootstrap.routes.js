const path = require('path');
const express = require('express')

const apiRoute = require('../routes/route.api');

module.exports = app => {
    app.use('/api', apiRoute);
}