const User = require("./User");
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");

BlogPost.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

BlogPost.hasMany(Comment, {
  foreignKey: "blogpost_id",
  onDelete: "CASCADE",
});

module.exports = { User, BlogPost, Comment };
