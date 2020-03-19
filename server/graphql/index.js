const { gql } = require('apollo-server')

const getTodo = (title) => ({
    title
})

const resolvers = {
    Query: {
        todos: () => [
            getTodo("eat"),
            getTodo("fast"),
            getTodo("sleep"),
            getTodo("work")
        ]
    }
}

const typeDefs = gql`
    type Todo {
        title: String
    }

    type Query {
        todos: [Todo]
    }
`;

module.exports = {
    typeDefs,
    resolvers
}

