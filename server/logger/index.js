const bunyan = require("bunyan")
const Logger=  bunyan.createLogger({name: "rootLogger"})

module.exports = Logger;