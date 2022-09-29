const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    phone: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, phone: Int!, password: String!): Auth
  }
`;

module.exports = typeDefs;