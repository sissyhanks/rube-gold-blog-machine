const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, BlogEntry, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  res.render("dashboard", {
    logged_in: true,
    login: false,
    signup: false,
    blogroll: false,
    dashboard: true,
  });
});

module.exports = router;
