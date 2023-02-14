//CRUD through router.get(/libraries, ensureLoggedIn, librariesCtrl.index)


var express = require('express');
var router = express.Router();
const librariesCtrl = require('../controllers/libraries');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// router.get('libraries', function(req,res,next){
//     res.redirect('/libraries');
// });

//display all the cocktails - GET /cocktails/all
**router.get('libraries' ensureLoggedIn, librariesCtrl.allCocktails);
//CRUD Show - display one cocktail's details /cocktails/:id ... cocktailsCtrl.show



