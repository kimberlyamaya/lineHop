const { AuthenticationError } = require('apollo-server-express');
const { CustUser } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.custUser) {
        const custUserData = await CustUser.findOne({})
          .select('-__v -password')
          //.populate other tables)
  
        return custUserData
      }
      throw new AuthenticationError('Not logged in')
    },
    custUsers: async () => {
      return CustUser.find()
        .select('-__v -password')
        // use .populate to bring in items related to this User)
    },
    custUser: async (parent, { username }) => {
      return CustUser.findOne({ username })
        .select('-__v -password')
        // use .populate to bring in items related to this User)
    }
  },

  Mutation: {
    addCustUser: async (parent, args) => {
      const custUser = await CustUser.create(args);
      const token = signToken(custUser);

      return { token, custUser };
    },
    custLogin: async (parent, { username, password }) => {
      const custUser = await CustUser.findOne({ username });

      if (!custUser) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await custUser.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(custUser);
      return { token, custUser };
    }
  }
};
  
module.exports = resolvers;