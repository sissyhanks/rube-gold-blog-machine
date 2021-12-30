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

    const blogs = projectData.map((project) => project.get({ plain: true }));
    const comments = projectData.comment_entry.map((project) =>
      project.get({ plain: true })
    );

    // Pass serialized data and session flag into template
    console.log(projectData);
    res.render("homepage", {
      blogs,
      comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
