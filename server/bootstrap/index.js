const compression = require('./bootstrap.compression');
const routes = require('./bootstrap.routes');
const security = require('./bootstrap.security');
const bodyparse = require('./bootstrap.bodyParse');
const graphql = require('./bootstrap.graphql');
const etag = require('./bootstrap.etag')

module.exports = app => {
    etag(app);
    security(app)
    compression(app)
    bodyparse(app)
    graphql(app)
    routes(app)
}

