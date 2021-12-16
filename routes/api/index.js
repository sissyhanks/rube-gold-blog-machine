const router = require('express').Router();
const blogEntryRoutes = require('./blogEntryRoutes');

//(.../api/blogEntry)
router.use('/blogEntry', blogEntryRoutes);

module.exports = router;