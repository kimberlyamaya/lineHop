const { CustUser } = require('../models')
const { signToken } = require('../utils/auth')

module.exports = {
  // get single custUser
  async getOneCustUser ({ custUser = null, params }, res) {
    const foundCustUser = await CustUser.findOne ({ 
      $or: [{ _id: custUser ? custUser._id : params.id }, { username: params.username }]
    })

    if (!foundCustUser) {
        return res.status(400).json({ message: 'Cannot find a user with this id!' })
    }

    res.json(foundCustUser)
  },
  
  // post custUser
  async createCustUser({ body }, res) {
    const custUser = await CustUser.create(body)

    if (!custUser) {
      return res.status(400).json({ message: 'Something is wrong, please try again. '})
    }

    const token = signToken(custUser)

    res.json({ token, custUser })
  },

  // login
  async login({ body }, res) {
    const custUser = await CustUser.findOne({ $or: [{ username: body.username }] })

    if (!CustUser) {
      return res.status(400).json({ message: "Can't find this user" })
    }

    const correcPW = await custUser.isCorrectPassword(body.password)

    if (!correcPW) {
        return res.status(400).json({ message: 'Wrong password!' })
    }

    const token = signToken(custUser)
    res.json({ token, custUser })
  },
}