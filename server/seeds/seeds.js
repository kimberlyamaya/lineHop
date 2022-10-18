// const faker = require('faker');
const custUserSeeds = require('./custUserSeeds.json');
const db = require('../config/connection');
const { CustUser } = require('../models');

db.once('open', async () => {
  try {
    await CustUser.deleteMany({});

    await CustUser.create(custUserSeeds);

    // for (let i = 0; i < thoughtSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } catch (err) {
    console.log("seeds.js line 24")
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});