var express = require('express');
var router = express.Router();
const librariesCtrl = require('../controllers/libraries');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const cocktailsCtrl = require('../controllers/cocktails');





module.exports = router;