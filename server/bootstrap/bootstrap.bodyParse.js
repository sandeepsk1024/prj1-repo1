const express = require('express')

module.exports = app => {
    //parse application/x-www-form-urlencoded 
    app.use(express.urlencoded({extended: false})) 

    //parse application/json
    app.use(express.json()) 
}
