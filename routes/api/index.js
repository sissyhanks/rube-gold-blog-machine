const router = require('express').Router();
const blogEntryRoutes = require('./blogEntryRoutes');
const userRoutes = require('./userRoutes')

//(.../api/blogEntry)
router.use('/blogs', blogEntryRoutes);
router.use('/users', userRoutes);

module.exports = router;