const db = require('../config/connection');
const { User, Product, Category } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
const categorySeeds = require('./categorySeeds.json');

db.once('open', async () => {
    try {
      await User.deleteMany({});
      await Product.deleteMany({});
      await Category.deleteMany();

      await User.create(userSeeds);
      await Product.insertMany(productSeeds);
      await Category.insertMany(categorySeeds);
  
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });
  