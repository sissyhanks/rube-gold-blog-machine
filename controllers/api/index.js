// creates a new router object allows for the addition of middleware and HTTP method routes
const router = require('express').Router();
// 
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;