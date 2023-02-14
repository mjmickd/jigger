const express = require('express');
const router = express.Router();
const librariesCtrl = require ('../controllers/libraries');
const ensureLoggedIn = require('../config/ensureLoggedIn');



//GET all the drinks you've had '/library' (display all the cocktails that you've drank)
router.get('library/:id', librariesCtrl.show);

//GET '/receipt' (display a specific drink that've clicked)
router.get('receipt/:id', receiptsCtrl.show);
//POST /post a comment for the drink that you've had 
router.post('receipt/:id', ensureLoggedIn, receiptsCtrl.create);

//CRUD display all of the cocktails -> /cocktails cocktailsCtrl.index 

//CRUD add the logged in user's _id to a cocktailsDrank array -> POST /cocktails/:id  cocktailsCtrl.addDrink




module.exports = router;