const express = require('express');

const router = express.Router();

const pushController = require('../controllers/pushcontroller');

router.get('/push', pushController.push);

module.exports = router;