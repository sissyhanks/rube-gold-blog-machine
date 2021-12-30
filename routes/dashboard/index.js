const router = require("express").Router();
const dashboardRoutes = require("./dashboardRoutes");

//(.../dash)
router.use("/board", dashboardRoutes);

module.exports = router;
