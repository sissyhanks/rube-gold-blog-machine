const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, BlogEntry, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await BlogEntry.findAll({
      attributes: ["id", "title", "entry_text"],
      include: [
        {
          model: User,
          attributes: ["user_name"],
        },
        {
          model: Comment,
          attributes: ["comment_entry"],
        },
      ],
    });

    const blogs = projectData.map((entry) => entry.get({ plain: true }));
    // const comments = comment_entry.map((comment) =>
    //   comment.get({ plain: true })
    // );

    // Pass serialized data and session flag into template
    console.log(blogs);
    res.render("homepage", {
      blogs,
      logged_in: req.session.logged_in,
      login: false,
      signup: false,
      blogroll: true,
      dashboard: false,
      // comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login", {
    login: true,
    signup: false,
    blogroll: false,
  });
});

router.get("/signup", async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup", {
    signup: true,
    login: false,
    blogroll: false,
  });
});

module.exports = router;
