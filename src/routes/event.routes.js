const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const protect = require('../middleware/authMiddleware');

module.exports = router;