const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, BlogEntry, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await BlogEntry.findAll({
      attributes: [
      'id',
      'title',
      'entry_text'
    ],
    include: [
      {
        model: User,
        attributes: ['user_name']
      }
    ]
    });

    // Pass serialized data and session flag into template
    console.log(projectData);
    res.json(projectData);
    
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;