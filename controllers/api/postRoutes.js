const router = require('express').Router();
const { Post } = require('../../models');

// .../api/posts
router.post('/', async(req, res) => {
  try{
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;