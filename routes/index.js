var express = require('express');
var router = express.Router();
const passport = require('passport');

//add homepage here for the router
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Login to Jigger'});
});
router.get('/landing', function(req, res, next) {
  res.render('cocktails/landing', {title: 'Home'});
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
    failureRedirect: '/'
  }
))

router.get('/logout', function(req, res) {
  req.logout(function() {
    // Change path for your "landing" page
    res.redirect('/');
  });
});


module.exports = router;
