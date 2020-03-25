const { gql } = require('apollo-server')
const DB = require('../utils/data')

const resolvers = {
    Query: {
        todos: () => {
            return DB.Todos.getAll()
        }
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

