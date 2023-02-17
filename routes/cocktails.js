var express = require('express');
var router = express.Router();
var cocktailsCtrl = require('../controllers/cocktails');
var ensureLoggedIn = require('../config/ensureLoggedIn');



router.get('/', cocktailsCtrl.index);

router.get('/search-page', cocktailsCtrl.searchPage);

router.post('/search', cocktailsCtrl.search);

router.get('/landing', cocktailsCtrl.landing);

router.get("/favorites", ensureLoggedIn, cocktailsCtrl.favorites);

router.post('/', ensureLoggedIn, cocktailsCtrl.addToFavorites);

router.delete('/', ensureLoggedIn, cocktailsCtrl.removeFromFavorites);

router.get('/:id', cocktailsCtrl.show)


module.exports = router;

