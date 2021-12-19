const router = require('express').Router();
const BlogEntry = require('../../models/BlogEntry');

router.post('/', async (req, res) => {
  try {
    const newBlogEntry = await BlogEntry.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateBlogEntry = await BlogEntry.update(
      {
        title: req.body.title,
        entry_text: req.body.entry_text,
      },
      {
        where: {
          id: req.params.blog_id,
        },
      });
      res.status(200).json(updateBlogEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  const deletedBlogEntry = await BlogEntry.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.json(deletedBlogEntry);
});

module.exports = router;