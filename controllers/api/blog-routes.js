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
router.put("/:id", async (req, res) => {
  try {
    const blogData = await BlogPost.update(
      {
        title: req.body.title,
        conent: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!blogData) {
      res.status(404).json({ message: "No blogpost with that ID found" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete blog post
router.delete("/:id", async (req, res) => {
  try {
    //
    const blogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No blogpost with that ID found" });
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
