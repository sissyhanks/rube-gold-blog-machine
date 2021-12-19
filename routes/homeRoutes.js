const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, BlogEntry, Comment } = require('../models');

router.get('/', (req, res) => {
  res.send('hello tall');
});

module.exports = router;