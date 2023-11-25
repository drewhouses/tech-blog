const sequelize = require("../config/connection");
const BlogPost = require("../models/BlogPost");
const blogData = require("./blog-post-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Dish.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
