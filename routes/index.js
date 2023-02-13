var express = require('express');
var router = express.Router();
const passport = require('passport');

//add homepage here for the router
router.get('/', function(req, res, next) {
  res.redirect('/landing');
});

router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    scope: ['profile', 'email'],
    // Optional
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/landing',
    failureRedirect: '/login'
  }
))



module.exports = router;
