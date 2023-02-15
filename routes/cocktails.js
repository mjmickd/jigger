var express = require('express');
var router = express.Router();
var cocktailsCtrl = require('../controllers/cocktails');

router.get('/', cocktailsCtrl.index);

router.get('/search-page', cocktailsCtrl.searchPage);

router.post('/search', cocktailsCtrl.search);


module.exports = router;

//you need to res.render