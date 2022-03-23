const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, BlogEntry, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("dashboard", {
    blogroll: false,
    dashboard: true,
  });
});

module.exports = router;
