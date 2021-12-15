const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// .../api/posts
router.post('/', withAuth, (req, res) => {
    Post.create({
      title: req.body.title,
      blog_text: req.body.blog_text,
      user_id: req.session.user_id
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});
// router.post('/', withAuth (req, res) => {
//   Post.create(
//       {title: req.body.title,
//         blog_text: req.body.blog_text,
//       user_id: req.session.user_id}
      
//     )
    
//     .then(dbPostData => res.json(dbPostData))
//    .catch (err => {
//             console.log(err);
//         res.status(500).json(err);
//   });
// });

module.exports = router;