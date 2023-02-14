const express = require('express');
const router = express.Router();
//const searchesCtrl = require('../controllers/searches');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/searches'