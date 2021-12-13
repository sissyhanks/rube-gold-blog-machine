const router = require('express').Router();
// const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage', {
      logged_in: req.session.logged_in,
      login: false,
    signup: false,
    blogroll: true,
    dashboard: false,
    });

});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login', {
    login: true,
    signup: false,
    blogroll: false,
  });
});

router.get('/signup', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup', {
    signup: true,
    login: false,
    blogroll: false
  });
});

router.get('/dashboard', (req, res) => {
    res.render('dash', {
      logged_in: req.session.logged_in,
    blogroll: false,
    dashboard: true,
    });

});

module.exports = router;