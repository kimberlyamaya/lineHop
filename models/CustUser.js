const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const custUserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      // match: [/^[(]?[0-9]{3}[)]?[ ,-]?[0-9]{3}[ ,-]?[0-9]{4}$/gm, '10 digit phone number']
      match: [/^1?\d{10}$/gm, 'phone number no dashes, hypens, parenthesis']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
custUserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
custUserSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const CustUser = model('CustUser', custUserSchema);

module.exports = CustUser;
