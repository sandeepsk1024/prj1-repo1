const { typeDefs, resolvers } = require('../graphql')
const { ApolloServer } = require('apollo-server-express');

module.exports = app => {
    const apolloServer = new ApolloServer({
        typeDefs, resolvers
    })

    apolloServer.applyMiddleware({ app, path: '/graphql' })

}
