var express = require('express');
var router = express.Router();
var cocktailsCtrl = require('../controllers/cocktails');
var ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', cocktailsCtrl.index);

router.get('/search-page', cocktailsCtrl.searchPage);

router.post('/search', cocktailsCtrl.search);

router.get('/landing', cocktailsCtrl.landing);

router.post('/', ensureLoggedIn, cocktailsCtrl.addToFavorites);



module.exports = router;

//you need to res.render