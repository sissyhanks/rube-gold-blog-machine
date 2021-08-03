const router = require('express').Router();
const { Post, User } = require('../../models');
// /api/posts/create
router.post('/create', (req, res) => {
    Post.create(req.body).then(function response(result){
        console.log("posted");
        res.json(result);
    })


})


module.exports = router;