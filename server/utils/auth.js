const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
      // console.log(token)
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.custUser = data
      // console.log(req.custUser)
    } catch {
      console.log('Invalid token, in auth.js');
    }

    return req;
  },
  signToken: function({ username, phone, _id }) {
    const payload = { username, phone, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};
