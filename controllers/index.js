const router = require('express').Router();

const blogRoutes = require('./blogRoutes');
const apiRoutes = require('./api');

router.use('/', blogRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;