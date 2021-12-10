const Sequelize = require('sequelize');
require('dotenv').config();

// https://www.npmjs.com/package/dotenv
let sequelize;


// https://sequelize.org/master/manual/getting-started.html#connecting-to-a-database
// Option 2: Passing parameters separately (other dialects)

// ok, if JAWS DB is present, use key values from that. else process.env info
if (process.env.JAWSBD_URL) {
  sequelize = new Sequelize(process.env.JAWSBD_URL, {});
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      // add comment to Getting Connected about sequelize needing its own port
      port:3306,
    }
  );
}

module.exports = sequelize;