const router = require("express").Router();
const blogEntryRoutes = require("./blogEntryRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");

//(.../api/blogEntry)
router.use("/blogs", blogEntryRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
