var logger = require('bunyan').createLogger({
    name: 'routes.AuthFacebook'
  }),
  passport = require('passport');

module.exports = function(app) {

  // we will call this to start the Facebook Login process
  app.get('/auth/facebook', passport.authenticate('facebook'));

  // GitHub will call this URL
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
      failureRedirect: '/'
    }),
    function(req, res) {
      logger.info("redirect user to home: %j", req.user);
      res.redirect('/home');
    }
  );

};
