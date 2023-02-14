const express = require('express');
const router = express.Router();
const receiptsCtrl = require('../controllers/receipts');
const cocktailsCtrl = require('../controllers/cocktails');
const ensureLoggedIn = require('../config/ensureLoggedIn');




//GET all the drinks you've had '/library' (display all the cocktails that you've drank)
router.get('cocktails/:id', ensureLoggedIn, cocktailsCtrl.show);

//GET '/receipt' (display a specific drink that've clicked)
router.get('receipt/:id', ensureLoggedIn, receiptsCtrl.show);
//POST /post a comment for the drink that you've had 
router.post('receipt/:id', ensureLoggedIn, receiptsCtrl.create);

//CRUD display all of the cocktails -> /cocktails cocktailsCtrl.index 
router.get('cocktails', ensureLoggedIn, cocktailsCtrl.index);
//CRUD add the logged in user's _id to a cocktailsDrank array -> POST /cocktails/:id  cocktailsCtrl.addDrink

router.post('cocktails/:id', ensureLoggedIn, cocktailsCtrl.addDrink);

//Crud add the new cocktail form being submitted





module.exports = router;