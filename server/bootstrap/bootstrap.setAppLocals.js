const logger = require('../logger')
module.exports = app => {
    app.locals.Logger = logger;
}
