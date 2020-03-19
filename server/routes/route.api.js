const express = require("express");
const router = express.Router();
const Logger = require('../logger')

router.get("/hello", (req, res) => {
    Logger.info("hello")
    res.json({message: 'hello world'})
})

module.exports = router;