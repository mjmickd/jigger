const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();
// const receiptsCtrl = require('../controllers/receipts');
// const cocktailsCtrl = require('../controllers/cocktails');

// const ensureLoggedIn = require('../config/ensureLoggedIn');

// //POST /libray/:id/receipt
// router.post('cocktails/:id/receipt', ensureLoggedIn, cocktailsCtrl.create);
// //Delete/reviews/:id
// router.delete('/reviews/:id', ensureLoggedIn, receiptsCtrl.delete);

// router.get('cocktails/:id/edit', ensureLoggedIn, cocktailsCtrl.edit );

module.exports = router; 

// //see if you need to add API here 