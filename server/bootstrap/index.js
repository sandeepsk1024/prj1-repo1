const compression = require('./bootstrap.compression');
const routes = require('./bootstrap.routes');
const security = require('./bootstrap.security');
const bodyparse = require('./bootstrap.bodyParse');

module.exports = app => {
    app.set('etag', false);
    // app.set('views', 'views');
    // app.set('view engine', 'pug');
    security(app)
    compression(app)
    bodyparse(app)
    routes(app)
}

