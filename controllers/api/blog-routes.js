const router = require("express").Router();
const { BlogPost } = require("../../models");

// Create a blog post
router.post("/", async (req, res) => {
  try {
    const blogData = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(200).json(blogData);
  } catch (error) {
    res.status(400).json(err);
  }
});

// update blog post

// delete blog post
