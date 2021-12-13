//to do on migrate... install bcrypt npm

const path = require('path');
// require('dotenv').config();
const express = require('express');
const session = require('express-session');
const exphbs  = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({  });

// the object each session receives
const sess = {
  secret: 'key that will sign cookie',
  cookie: { maxAge: 7200000 },
  // we do not want a nes session each browser visit
  resave: false,
//   don't save reoccurring visitors unless the session request is modified
  saveUninitialized: false,
  //store session info in database
  store: new SequelizeStore({
    db: sequelize
  })
};

// innitialized middleware
app.use(session(sess));

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// *****keep this example to write a post about >> the req.session.isAuth = true modifies the session request when this path is visited and leaves a cookie ---------------------------
// app.get('/', function (req, res) {
//   req.session.isAuth = true;
//   console.log(req.session);
//   console.log(req.session.id);
//   res.send('Hello World')
// });
// ----------------------------------------------------------------------------

app.use(routes);

//calling sync() creates/syncs the database table, because force false table is not dropped in the process>> then starts the server once db table is created
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});