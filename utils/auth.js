const withAuth = (req, res, next) => {
  // If the user isn't logged in, redirect them to the login route
  if (req.session.logged_in) {
    logged_in=true;
  } else {
    logged_in=false;
  }
};

module.exports = withAuth;