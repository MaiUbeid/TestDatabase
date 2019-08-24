const express = require('express');

const router = express.Router();

const {getData, postData} = require('./cities');

router.get('/cities', getData);
router.post('/addCity', postData);

module.exports = router;
