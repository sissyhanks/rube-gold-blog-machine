const router = require("express").Router();
const Comment = require("../../models/Comment");

router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      blog_entry_id: req.body.blog_entry_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateComment = await Comment.update(
      {
        comment_entry: req.body.comment_entry,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const deletedComment = await Comment.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(deletedComment);
});

module.exports = router;
