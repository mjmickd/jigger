var express = require('express');
var router = express.Router();
var cocktailsCtrl = require('../controllers/cocktails');
var ensureLoggedIn = require('../config/ensureLoggedIn');
//const cocktails = require('../routes/cocktails')


router.get('/', cocktailsCtrl.index);

router.get('/search-page', cocktailsCtrl.searchPage);

router.post('/search', cocktailsCtrl.search);

router.get('/landing', cocktailsCtrl.landing);

router.get("/favorites", ensureLoggedIn, cocktailsCtrl.favorites);

router.post('/', ensureLoggedIn, cocktailsCtrl.addToFavorites);

router.delete('/', ensureLoggedIn, cocktailsCtrl.removeFromFavorites);

router.get('/:id', cocktailsCtrl.show)


// router.get('/cocktail/:id', cocktailsCtrl.addComment)

//router.get('/landing/:id', cocktailsCtrl.addToComments)

//const moviesRouter = require('./routes/movies');
// new reviews router
//const reviewsRouter = require('./routes/reviews')


module.exports = router;

//you need to res.render