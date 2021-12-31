require("dotenv").config();
const Sequelize = require("sequelize");

//declare sequelize with let because the database will either be JAWS if in production or MYsql via workbench credentials which are stored in .env file
let sequelize;

if (process.env.JAWSDB_COBALT_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_COBALT_URL);
} else {
  sequelize = new Sequelize(
    // Database name
    process.env.DB_NAME,
    // User
    process.env.DB_USER,
    // Password
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
