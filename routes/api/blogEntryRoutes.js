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

module.exports = router;