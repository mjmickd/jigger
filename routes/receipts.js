const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();
const receiptsCtrl = require('../controllers/receipts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//POST /libray/:id/receipt
router.post('/library/:id/receipt', ensureLoggedIn, receiptsCtrl.create);
//Delete/reviews/:id
router.delete('/reviews/:id', ensureLoggedIn, receiptsCtrl.delete);

module.exports = router; 

//see if you need to add API here 