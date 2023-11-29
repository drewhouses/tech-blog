const router = require("express").Router();
const { Comment } = require("../../models");

//add a comement to blog post
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      content: req.body.content,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
