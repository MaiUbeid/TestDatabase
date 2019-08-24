const express = require('express');

const router = express.Router();

const data = require('./cities');

router.use(express.urlencoded({ extended: false }));
router.get('/cities', data.getData);

module.exports = router;
