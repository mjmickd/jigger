// //CRUD through router.get(/cocktails, ensureLoggedIn, librariesCtrl.index)


var express = require('express');
var router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
// const cocktailsCtrl = require('../controllers/cocktails');


// // GET /movies (display all movies)
router.get('/', cocktailsCtrl.index);
// // GET /movies/new (display a form for entering a new movie)
// router.get('/new', ensureLoggedIn, moviesCtrl.new);
// // GET /movies/:id (display a "detail/show" page for a single movie)
// router.get('/:id', cocktailsCtrl.show);
// // POST /movies (handle the new form being submitted)
// router.post('/', ensureLoggedIn, cocktailsCtrl.create);

module.exports = router;

//you need to res.render


