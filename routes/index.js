const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dash", dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
