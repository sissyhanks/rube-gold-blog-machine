const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

//if portion says to use credentials found in heroku via JawsDB
//else portion says to use credentials found in .env file which won't be deployed, yo!

if (process.env.JawsDB_URL) {
  sequelize = new Sequelize(process.env.JawsDB_URL);
} else {
  sequelize =  new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port:3306,
    }
  );
}

module.exports = sequelize;