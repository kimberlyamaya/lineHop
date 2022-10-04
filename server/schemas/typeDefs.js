const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type CustUser {
    _id: ID
    username: String
    phone: Float
  }
  type Auth {
    token: ID!
    custUser: CustUser
  }
  type Query {
    me: CustUser
    custUsers: [CustUser]
    custUser(username: String!): CustUser
  }
  type Mutation {
    custLogin(username: String!, password: String!): Auth
    addCustUser(username: String!, phone: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;